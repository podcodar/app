import Navbar from "@/components/Navbar";
import { container } from "@/shared/tw";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import AuthProvider from "@/contexts/AuthProvider";

export const metadata: Metadata = {
  title: "PodCodar Admin",
};

export default function RootLayout({ children }: PropsWithChildren) {
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
