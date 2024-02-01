import { Prisma, Task } from "@prisma/client";
import { User as NextUser } from "next-auth";
import { z } from "zod";
import { prisma } from "./client";
import { raise } from "@/shared/exceptions";
import { formSchema } from "@/shared/onboarding";

class UserDAO {
  async createUser(loginUser: NextUser) {
    if (!loginUser.email) {
      throw raise("E-mail not found");
    }
    const existingUser = await this.fetchUserBy({ email: loginUser.email });

    if (existingUser) return existingUser;

    return prisma.user.create({
      data: this.parseNextAuthUser(loginUser),
    });
  }

  async fetchUserBy(where: Prisma.UserWhereUniqueInput) {
    const query = { ...where };
    if (query.username) {
      query.username = decodeURIComponent(query.username);
    }

    return prisma.user.findUnique({ where: query });
  }

  async fetchUsers(
    filter: { username?: string; email?: string },
    page = 1,
    pageSize = 10
  ) {
    const skip = (page - 1) * pageSize;
    const where = {
      OR: [],
    };
    if (filter.email) {
      where.OR.push({ email: { contains: filter.email } });
    }
    if (filter.username) {
      where.OR.push({ username: { contains: filter.username } });
    }
    if (where.OR.length === 0) {
      delete where.OR;
    }
    return prisma.user.findMany({
      where,
      skip,
      take: pageSize,
    });
  }

  async isOboardingFinished(username: string) {
    const user = await this.fetchUserBy({ username });
    if (!user) {
      throw raise("Could not find user in DB");
    }
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
        age: parseInt(data.registration.idade, 10),
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
