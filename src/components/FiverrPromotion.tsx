"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Zap, Star } from "lucide-react";
import Link from "next/link";

const FiverrPromotion = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#2563EB" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[40px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Green Accent (Fiverr-like) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border border-green-500/20"
            >
              <Star size={16} fill="currentColor" />
              Top Rated Service
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Hire Me on <span className="text-green-500 italic">Fiverr</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Work with confidence through Fiverr's secure platform. Get expert bookkeeping services 
              with guaranteed quality and safe payments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-white/80">
                <ShieldCheck className="text-green-500" size={24} />
                <span className="font-bold">Secure Payments</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Zap className="text-green-500" size={24} />
                <span className="font-bold">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Star className="text-green-500" size={24} />
                <span className="font-bold">Level 2 Seller</span>
              </div>
            </div>

            <Link
              href="https://www.fiverr.com/s/pdKEdLR"
              target="_blank"
              className="inline-flex items-center bg-green-500 text-white px-10 py-5 rounded-[20px] font-black text-xl hover:bg-white hover:text-navy transition-all shadow-2xl shadow-green-500/20 group"
            >
              View Fiverr Gig
              <ExternalLink className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FiverrPromotion;
