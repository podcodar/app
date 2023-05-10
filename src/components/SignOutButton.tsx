"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {

  return (
    <div
      onClick={() => signOut()}
    >
      Sign Out
    </div>
  );
};

export default SignOutButton;
