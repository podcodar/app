import { Metadata } from "next";
import { PropsWithChildren } from "react";
import AuthProvider from "@/contexts/AuthProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "PodCodar Admin",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <body>
      <AuthProvider>
        <div className="bg-white shadow">
          <Navbar />
        </div>
        {children}
      </AuthProvider>
    </body>
  );
}
