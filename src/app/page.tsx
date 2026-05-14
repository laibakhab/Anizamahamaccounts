import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustSignals from "@/components/TrustSignals";
import Features from "@/components/Features";
import FiverrPromotion from "@/components/FiverrPromotion";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <TrustSignals />
      <Features />
      <FiverrPromotion />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
