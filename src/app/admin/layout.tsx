import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";
import AuthProvider from "@/contexts/AuthProvider";
import { authOptions } from "@/shared/auth";
import Navbar from "@/components/Navbar";

import { fetchUserWithSession } from "@/shared/auth";
import { UserProvider } from "@/contexts/UserProvider";

export const metadata: Metadata = {
  title: "PodCodar Admin",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  const loggedUser = await fetchUserWithSession(session);

  return (
    <body>
      <AuthProvider>
        <UserProvider user={loggedUser}>
          <div className="bg-white shadow">
            <Navbar />
          </div>
          {children}
        </UserProvider>
      </AuthProvider>
    </body>
  );
}
