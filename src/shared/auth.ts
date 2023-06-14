import { headers } from "next/headers";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {
  NO_SESSION_REDIRECT,
  ORIGIN_URL_KEY,
  githubCredentials,
  googleCredentials,
} from "./settings";
import { createUser } from "./db";
import { AdapterUser } from "next-auth/adapters";

export type LoginProviders = "github" | "google";

export const authOptions: NextAuthOptions = {
  providers: [GithubProvider(githubCredentials), GoogleProvider(googleCredentials),],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn(user) {
      const loginUser = user.user as AdapterUser;
      createUser(loginUser);
      return true;
    },
  },
};

export function getOriginPath() {
  const headerObj = headers();
  const origin = headerObj.get(ORIGIN_URL_KEY) ?? "";
  return origin;
}

export function makeRedirectURL(origin: string) {
  return `${NO_SESSION_REDIRECT}${origin}`;
}
