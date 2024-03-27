import { Session } from "next-auth";
import { User as UserEntity } from "@prisma/client";
export type User = {
  name: string;
  email: string;
  image: string;
};

export type GetUsers = {
  name?: UserEntity["name"];
  email?: UserEntity["email"];
  username?: UserEntity["username"];
};

export function getUserSession(session: Session | null): User {
  if (session?.user == null) {
    throw new Error("User session not found");
  }

  const { name, email, image } = session.user as User;

  return {
    email,
    image,
    name,
  };
}
