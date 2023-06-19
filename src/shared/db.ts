import { PrismaClient } from "@prisma/client";
import { User } from "next-auth";

export const prisma = new PrismaClient();

export async function createUser(loginUser: User) {
  const existingUser = await prisma.user.findUnique({
    where: { email: loginUser.email as string },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        email: loginUser.email as string,
        avatar: loginUser.image as string,
        name: loginUser.name as string,
        username: loginUser.email as string,
      },
    });
  }
}
