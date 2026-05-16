"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  PieChart, 
  TrendingUp 
} from "lucide-react";
import Link from "next/link";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-accent-blue/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-primary/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="inline-block py-1.5 px-4 mb-6 text-sm font-bold tracking-wide text-primary uppercase bg-accent-blue rounded-full border border-primary/10">
              Certified Accountant & Bookkeeper
            </span>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-[1.1] mb-6">
              Helping Businesses Stay Financially <span className="text-primary">Organized</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-text mb-10 leading-relaxed max-w-xl">
              Trusted by construction companies, architects, attorneys, designers, consultants, and small businesses in New York City, Miami, and London.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="https://calendly.com/ledgerly247/30min"
                target="_blank"
                className="bg-primary text-white px-8 py-4 rounded-[20px] font-bold text-lg hover:bg-navy transition-all shadow-xl shadow-primary/20 flex items-center group"
              >
                Free 30-Min Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-3 px-6 py-4 rounded-[20px] font-bold text-navy hover:bg-secondary-bg border border-border-custom transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 bg-accent-blue rounded-full flex items-center justify-center text-primary">
                  <Play size={18} fill="currentColor" />
                </div>
                Watch Intro
              </motion.button>
            </div>

            {/* Global Presence Badge */}
            <div className="flex items-center gap-2 mb-12 bg-accent-blue/50 w-fit px-4 py-2 rounded-full border border-primary/10">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-accent-blue flex items-center justify-center overflow-hidden">
                  <span className="text-[10px]">🇺🇸</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white border-2 border-accent-blue flex items-center justify-center overflow-hidden">
                  <span className="text-[10px]">🇵🇰</span>
                </div>
              </div>
              <span className="text-sm font-bold text-navy">Offices in New York & Pakistan</span>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border-custom">
              {[
                "Certified Accountant",
                "100% Client Satisfaction",
                "Tax Ready Books",
                "IFRS Compliant"
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                  <span className="text-xs font-bold text-navy uppercase tracking-tight">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Mock Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            {/* Main Dashboard Mockup */}
            <div className="relative bg-white rounded-[24px] border border-border-custom shadow-2xl p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-8 border-b border-border-custom pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-sm font-bold text-secondary-text">Aniza_Bookkeeping_Dashboard.xlsx</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-secondary-bg rounded-xl border border-border-custom">
                  <p className="text-xs font-bold text-secondary-text uppercase mb-1">Total Revenue</p>
                  <p className="text-xl sm:text-2xl font-black text-navy">$84,250.00</p>
                  <div className="flex items-center text-green-500 text-xs mt-1 font-bold">
                    <TrendingUp size={12} className="mr-1" /> +12.5%
                  </div>
                </div>
                <div className="p-4 bg-secondary-bg rounded-xl border border-border-custom">
                  <p className="text-xs font-bold text-secondary-text uppercase mb-1">Tax Liability</p>
                  <p className="text-xl sm:text-2xl font-black text-navy">$12,180.00</p>
                  <div className="text-xs text-navy/40 font-bold mt-1 uppercase">Tax Ready</div>
                </div>
              </div>

              {/* Visual "Graph" placeholders */}
              <div className="space-y-4">
                <div className="h-32 bg-secondary-bg rounded-xl border border-border-custom flex items-end p-4 gap-2">
                  {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="flex-1 bg-primary/20 rounded-t-sm" 
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between p-4 bg-primary text-white rounded-xl">
                    <div className="flex items-center gap-3">
                        <PieChart size={20} />
                        <span className="font-bold">Financial Health Score</span>
                    </div>
                    <span className="font-black text-xl">98/100</span>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -right-12 md:top-12 md:-right-20 bg-navy text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl z-20"
            >
              <p className="text-2xl md:text-3xl font-black leading-none">3+</p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Years of Experience</p>
            </motion.div>

            {/* Extra Floating Icon */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-border-custom z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <BarChart3 size={20} />
              </div>
              <p className="text-sm font-bold text-navy whitespace-nowrap">Audit Ready Books</p>
            </motion.div>

          </motion.div>

        </div>
      </div>
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoSrc="/video/intro.mp4" 
      />
    </section>
  );
};

export default Hero;
