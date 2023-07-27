import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/shared/auth";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/contexts/AuthProvider";
import { fetchUserWithSession } from "@/shared/auth";
import { UserProvider } from "@/contexts/UserProvider";

export const metadata: Metadata = {
  title: "PodCodar",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  const loggedUser = await fetchUserWithSession(session);

  return (
    <AuthProvider>
      <UserProvider user={loggedUser}>
        <div className="shadow-md">
          <Navbar loggedUser={loggedUser} />
        </div>
        {children}
      </UserProvider>
    </AuthProvider>
  );
}
