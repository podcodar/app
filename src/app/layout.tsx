import { PropsWithChildren } from "react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PodCodar App",
  description: "Sejam bem vindes ao app da comunidade PodCodar!",
  icons: {
    icon: {
      url: "/images/logo.svg",
      type: "image/svg",
    },
  },
  openGraph: {
    type: "website",
    images: {
      url: "/images/logo.svg",
      type: "image/svg",
    },
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
