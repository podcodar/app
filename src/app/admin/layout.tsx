import Navbar from "@/components/Navbar";
import { container } from "@/shared/tw";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "PodCodar Admin",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <body>
      <header className="bg-white shadow">
        <Navbar />

        <div className={container}>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>

      {children}
    </body>
  );
}
