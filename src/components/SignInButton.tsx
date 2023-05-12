"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode
  provider: string
}

const SignInButton = ({children, provider}: PropsType) => {
  const searchParams = useSearchParams();
  const callbackUrl  = searchParams.get("callbackUrl");

  return (
    <button
      className="flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => signIn(provider, { callbackUrl: callbackUrl ?? undefined })}
      type="button"
    >
      {children}
    </button>
  );
};

export default SignInButton;
