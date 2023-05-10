"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const GithubSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl  = searchParams.get("callbackUrl");

  return (
    <div
      onClick={() => signIn("github", { callbackUrl: callbackUrl ?? undefined })}
    >
      Continue with Github
    </div>
  );
};

export default GithubSignInButton;
