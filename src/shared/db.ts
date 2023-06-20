import { PrismaClient } from "@prisma/client";
import { User } from "next-auth";

export const prisma = new PrismaClient();

export async function createUser(loginUser: User) {
  const existingUser = await prisma.user.findUnique({
    where: { email: loginUser.email as string },
  });

  if (!existingUser) {
    const createdUser = await prisma.user.create({
      data: {
        email: loginUser.email as string,
        avatar: (loginUser.image as string) ?? null,
        name: (loginUser.name as string) ?? (loginUser.email as string),
        username: loginUser.email as string,
      },
    });

    if (!createdUser) {
      throw new Error("Server failed to create user");
    }
  }
}

export async function fetchUserByUsername(username: string) {
  return await prisma.user.findUnique({
    where: { username: decodeURIComponent(username) },
  });
}
