import Navbar from "@/components/Navbar";
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

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>

      {children}
    </body>
  );
}
