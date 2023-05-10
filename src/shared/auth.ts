import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { githubCredentials } from "./settings";

export const authOptions: NextAuthOptions = {
  providers: [GithubProvider(githubCredentials)],
  pages: {
    signIn: "/login"
  }
};
