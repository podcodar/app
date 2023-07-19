import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";
import AuthProvider from "@/contexts/AuthProvider";
import { authOptions } from "@/shared/auth";
import Navbar from "@/components/Navbar";

import { fetchUserWithSession } from "@/shared/auth";

export const metadata: Metadata = {
  title: "PodCodar Admin",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  const loggedUser = await fetchUserWithSession(session);

  return (
    <body>
      <AuthProvider>
        <div className="bg-white shadow">
          <Navbar loggedUser={loggedUser} />
        </div>
        {children}
      </AuthProvider>
    </body>
  );
}
