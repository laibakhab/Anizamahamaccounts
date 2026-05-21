import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ledgerly 24/7 | Certified Accountant & Bookkeeper",
  description: "Professional bookkeeping and accounting services by Aniza, a certified accountant helping businesses stay financially organized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-white text-navy min-h-screen">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
