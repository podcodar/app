import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import AuthProvider from "@/contexts/AuthProvider";
import { authOptions, makeRedirectURL, getOriginPath } from "@/shared/auth";
import Navbar from "@/components/Navbar";
import { container } from "@/shared/tw";

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
