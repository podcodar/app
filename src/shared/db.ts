import { PrismaClient } from "@prisma/client";
import { AdapterUser } from "next-auth/adapters";

export const prisma = new PrismaClient();

export async function createUser(loginUser: AdapterUser) {
  const existingUser = await prisma.user.findUnique({
    where: { email: loginUser.email },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        email: loginUser.email,
        avatar: loginUser.image as string,
        name: loginUser.name as string,
        username: loginUser.email,
      },
    });
  }
}
