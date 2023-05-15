import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata = {
  title: "PodCodar App",
  description: "PodCodar community app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
