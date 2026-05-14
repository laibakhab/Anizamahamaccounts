import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Certified Accountant & Bookkeeper | QuickBooks, Xero, Zoho Expert",
  description: "Professional bookkeeping and accounting services by Aniza, a certified accountant and Fiverr Level 2 Seller.",
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
      </body>
    </html>
  );
}
