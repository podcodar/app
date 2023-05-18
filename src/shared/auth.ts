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

export type LoginProviders = "github" | "google";

export const authOptions: NextAuthOptions = {
  providers: [GithubProvider(githubCredentials), GoogleProvider(googleCredentials),],
  pages: {
    signIn: "/login",
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
