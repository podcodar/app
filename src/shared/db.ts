import { PrismaClient, Prisma } from "@prisma/client";
import { User as NextUser } from "next-auth";
import { raise } from "./exceptions";

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
