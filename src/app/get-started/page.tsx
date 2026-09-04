import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetStartedForm from "@/components/GetStartedForm";

export const metadata: Metadata = {
  title: "Get Started | Ledgerly 24/7",
  description: "Tell Ledgerly 24/7 about your bookkeeping and accounting needs.",
};

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-secondary-bg">
      <Navbar />
      <main className="container mx-auto px-6 pb-24 pt-36 md:px-12 md:pt-44">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-secondary-text transition hover:text-primary"><ArrowLeft size={16} /> Back to homepage</Link>
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-accent-blue px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary"><ShieldCheck size={16} /> Get started</span>
            <h1 className="text-4xl font-black leading-tight text-navy md:text-6xl">Let&apos;s organize your business finances.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-secondary-text">Answer a few questions so we can understand your business and recommend the right next step.</p>
          </div>
          <GetStartedForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
