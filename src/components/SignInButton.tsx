"use client";

import { signIn } from "next-auth/react";
import { ReactNode } from "react";

type LoginProviders = "github"; // | "google"

type Props = {
  children: ReactNode;
  provider: LoginProviders;
};

const SignInButton = ({ children, provider }: Props) => {
  return (
    <button
      className="flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => signIn(provider)}
      type="button"
    >
      {children}
    </button>
  );
};

export default SignInButton;
