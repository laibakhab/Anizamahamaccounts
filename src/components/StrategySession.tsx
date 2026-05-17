"use client";

import { motion } from "framer-motion";
import { Video, Clock, ArrowRight, Calendar, Star } from "lucide-react";
import Link from "next/link";

const StrategySession = () => {
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
          {/* Subtle Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-primary/20 text-accent-blue px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border border-primary/20"
            >
              <Video size={16} fill="currentColor" />
              Free Strategy Session
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              30-Min <span className="text-primary">Complementary</span> Consultation
            </h2>
            
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Let&apos;s dive deep into your bookkeeping challenges. We&apos;ll identify bottlenecks and map out a path to perfectly organized, audit-ready books.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="text-primary" size={24} />
                <span className="font-bold">No Obligation</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Calendar className="text-primary" size={24} />
                <span className="font-bold">Flexible Booking</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Star className="text-primary" size={24} />
                <span className="font-bold">Expert Advice</span>
              </div>
            </div>

            <Link
              href="https://calendly.com/ledgerly247/30min"
              target="_blank"
              className="inline-flex items-center bg-primary text-white px-10 py-5 rounded-[20px] font-black text-xl hover:bg-white hover:text-navy transition-all shadow-2xl shadow-primary/20 group"
            >
              Book Your Free Call
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySession;
