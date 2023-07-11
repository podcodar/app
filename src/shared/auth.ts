import { headers } from "next/headers";
import { NextAuthOptions, Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {
  NO_SESSION_REDIRECT,
  ORIGIN_URL_KEY,
  githubCredentials,
  googleCredentials,
} from "./settings";
import { user } from "./db";
import { Roles } from "@prisma/client";
import { redirect } from "next/navigation";

export type LoginProviders = "github" | "google";

export const authOptions: NextAuthOptions = {
  providers: [GithubProvider(githubCredentials), GoogleProvider(googleCredentials),],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn(authUser) {
      const loggedUser = await user.createUser(authUser.user);
      return loggedUser.roles.includes(Roles.USER);
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

export async function fetchUserWithSession(session: Session | null) {
  const redirectUrl = makeRedirectURL(getOriginPath());

  if (!session?.user?.email) return redirect(redirectUrl);

  const loggedUser = await user.fetchUserBy({ email: session.user.email });
  if (!loggedUser) return redirect(redirectUrl);

  return loggedUser;
}
