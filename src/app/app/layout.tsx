import Navbar from "@/components/Navbar";
import { container } from "@/shared/tw";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import AuthProvider from "@/contexts/AuthProvider";

export const metadata: Metadata = {
  title: "PodCodar",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  // TODO: Validate Auth
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
