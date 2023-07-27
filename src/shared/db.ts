import { PrismaClient, Prisma } from "@prisma/client";
import { User as NextUser } from "next-auth";
import { raise } from "./exceptions";
import { formSchema } from "./onboarding";
import { z } from "zod";

export const prisma = new PrismaClient();

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
