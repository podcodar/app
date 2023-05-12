import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { container } from "@/shared/tw";
import { authOptions, makeRedirectURL, getOriginPath  } from "@/shared/auth";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/contexts/AuthProvider";

export const metadata: Metadata = {
  title: "PodCodar",
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
        </header>

        <div className={container}>{children}</div>
      </AuthProvider>
    </body>
  );
}
