import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { PropsWithChildren } from "react";
import AuthProvider from "@/contexts/AuthProvider";
import { authOptions } from "@/shared/auth";
import Navbar from "@/components/Navbar";
import { Container } from "@/shared/components";
import { fetchUserWithSession } from "@/shared/db";

export const metadata: Metadata = {
  title: "PodCodar Admin",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  const loggedUser = await fetchUserWithSession(session);

  return (
    <body>
      <AuthProvider>
        <header className="bg-white shadow">
          <Navbar loggedUser={loggedUser} />

          <Container>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </Container>
        </header>

        {children}
      </AuthProvider>
    </body>
  );
}
