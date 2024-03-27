import { Prisma, Task } from "@prisma/client";
import { User as NextUser } from "next-auth";
import { z } from "zod";
import { prisma } from "./client";
import { raise } from "@/shared/exceptions";
import { formSchema } from "@/shared/onboarding";
import { GetUsers } from "@/entities/users";

class UserDAO {
  async createUser(loginUser: NextUser) {
    const existingUser = await this.fetchUserBy({
      email: loginUser.email ?? raise("E-mail not found"),
    });

    if (existingUser) return existingUser;

    return await prisma.user.create({
      data: this.parseNextAuthUser(loginUser),
    });
  }

  async fetchUserBy(where: Prisma.UserWhereUniqueInput) {
    if (where.username) {
      where.username = decodeURIComponent(where.username);
    }

    return await prisma.user.findUnique({
      where,
    });
  }

  async fetchUsers(filter: GetUsers, page = 1, pageSize = 10) {
    const skip = (page - 1) * pageSize;
    const whereCondition: Prisma.Enumerable<Prisma.UserWhereInput> = [];

    Object.keys(filter).forEach((key) => {
      const property = key as keyof typeof filter;
      const value = filter[property];

      if (value !== undefined) {
        whereCondition.push({
          [key]: { contains: value, mode: "insensitive" },
        });
      }
    });

    let where: Prisma.UserWhereInput = {};
    if (whereCondition.length > 0) {
      where = { OR: whereCondition };
    }

    const [users, total] = await prisma.$transaction([prisma.user.findMany({
      where: where,
      skip,
      take: pageSize,
    }), prisma.user.count({
      where: where,
    }),]);

    return {
      total,
      data: users,
      pagination: {
        page,
        pageSize,
      },
    };
  }

  async isOboardingFinished(username: string) {
    const user =
      (await this.fetchUserBy({ username })) ??
      raise("Could not find user on DB");

    return Boolean(user.expectations);
  }

  async updateUserOnboardingBy(
    where: Prisma.UserWhereUniqueInput,
    data: z.infer<typeof formSchema>
  ) {
    await prisma.user.update({
      where,
      data: {
        socialName: data.registration.nomeSocial,
        gender: data.registration.gender,
        age: parseInt(data.registration.idade),
        country: data.contact.pais,
        city: data.contact.cidadeEstado,
        phoneNumber: data.contact.telefone,
        educationLevel: data.professional.educationLevel,
        profession: data.professional.profissao,
        company: data.professional.empresaOrganizacao,
        github: data.professional.githubPortifolio,
        linkedin: data.professional.linkedin,
        techInterests: data.about.qOne,
        expectations: data.about.qTwo,
      },
    });
  }

  async assignTasksToUser(userId: number, tasks: Task[]) {
    const tasksData = tasks.map((task) => ({
      userId,
      taskId: task.id,
      completed: false,
    }));

    await prisma.userTasks.createMany({
      data: tasksData,
    });
  }

  private parseNextAuthUser(loginUser: NextUser): Prisma.UserCreateInput {
    return {
      username: loginUser.email ?? "",
      email: loginUser.email ?? "",
      name: loginUser.name ?? "",
      avatar: loginUser.image ?? undefined,
    };
  }
}

export const user = new UserDAO();
