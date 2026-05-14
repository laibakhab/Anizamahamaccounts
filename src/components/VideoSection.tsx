"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import VideoModal from "./VideoModal";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Personal Introduction</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">See How I Can Help Your Business</h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              A brief overview of my bookkeeping process and how I ensure your financial records stay 100% accurate.
            </p>
          </motion.div>

          {/* Premium Thumbnail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => setIsOpen(true)}
            className="group relative aspect-video bg-navy rounded-[40px] overflow-hidden cursor-pointer shadow-2xl border border-border-custom"
          >
            {/* Thumbnail Background Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-navy/80 to-navy transition-all duration-500 group-hover:scale-105" />
            
            {/* Visual Elements inside thumbnail */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Pulsing Play Button */}
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-primary shadow-xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </div>
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 pointer-events-none" />
              </div>
              
              <p className="text-white font-bold mt-8 text-lg md:text-xl tracking-tight">Watch the Intro Video</p>
              <p className="text-white/60 text-sm mt-2 font-medium">Click to play • 2:30 mins</p>
            </div>

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-xs font-bold uppercase tracking-widest">
              <Info size={14} />
              Introduction & Process
            </div>
          </motion.div>
        </div>
      </div>

      <VideoModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        videoSrc="/video/intro.mp4" 
      />
    </section>
  );
};

export default VideoSection;
