import { User } from "@prisma/client";
import { ReactNode, createContext, useContext } from "react";

const UserContext = createContext<User | null>(null);

type Props = {
  user: User;
  children: ReactNode;
};

export const UserProvider = ({ user, children }: Props) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = (): User => {
  const user = useContext(UserContext);
  return user ?? raise("No provider found.");
};

const raise = (error: string): never => {
  throw new Error(error);
};
