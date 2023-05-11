import { headers } from "next/headers";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { githubCredentials } from "./settings";

export const authOptions: NextAuthOptions = {
  providers: [GithubProvider(githubCredentials)],
  pages: {
    signIn: "/login"
  }
};

export function getOriginPath() {
  const headerObj = headers();
  const origin = headerObj.get(ORIGIN_URL_KEY) ?? "";

  return origin;
}

export const ORIGIN_URL_KEY = "x-url";

const NO_SESSION_REDIRECT = "/login?callbackUrl=";

export function makeRedirectURL(origin: string) {
  return `${NO_SESSION_REDIRECT}${origin}`;
}
