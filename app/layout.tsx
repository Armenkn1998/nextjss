import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Դաս 13 — Cookies, Proxy և Protected Route",
  description: "Next.js ուսումնական նախագիծ"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hy">
      <body>{children}</body>
    </html>
  );
}
