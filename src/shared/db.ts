import { PrismaClient, Prisma } from "@prisma/client";
import { User as NextUser } from "next-auth";

export const prisma = new PrismaClient();

export async function createUser(loginUser: NextUser) {
  const existingUser = await fetchUserBy({
    email: loginUser.email!,
  });

  if (existingUser) return existingUser;

  return await prisma.user.create({
    data: parseNextAuthUser(loginUser),
  });
}

export async function fetchUserBy(where: Prisma.UserWhereUniqueInput) {
  if (where.username) {
    where.username = decodeURIComponent(where.username);
  }

  return await prisma.user.findUnique({
    where,
  });
}

function parseNextAuthUser(loginUser: NextUser): Prisma.UserCreateInput {
  return {
    username: loginUser.email ?? "",
    email: loginUser.email ?? "",
    name: loginUser.name ?? "",
    avatar: loginUser.image ?? undefined,
  };
}
