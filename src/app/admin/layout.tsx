import Navbar from "@/components/Navbar";
import { container } from "@/shared/tw";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import AuthProvider from "@/contexts/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions, makeRedirectURL } from "@/shared/auth";
import { redirect } from "next/navigation";
import { getOriginPath } from "@/shared/server";

export const metadata: Metadata = {
  title: "PodCodar Admin",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  if (!session) {
    const origin = getOriginPath();
    return redirect(makeRedirectURL(origin));
  }

  return (
    <body>
      <AuthProvider>
        <header className="bg-white shadow">
          <Navbar />

          <div className={container}>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>

        {children}
      </AuthProvider>
    </body>
  );
}
