import { Session } from "next-auth";

export type User = {
  name: string;
  email: string;
  image: string;
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
