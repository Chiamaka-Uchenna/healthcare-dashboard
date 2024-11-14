import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "./ui/fonts";


export const metadata: Metadata = {
  title: "Tech.Care",
  description: "Your Digital Health Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
