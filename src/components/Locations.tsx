"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Building2, Navigation } from "lucide-react";

const locations = [
  { city: "New York City", country: "USA", flag: "🇺🇸" },
  { city: "Miami", country: "USA", flag: "🇺🇸" },
  { city: "London", country: "UK", flag: "🇬🇧" },
  { city: "Karachi", country: "Pakistan", flag: "🇵🇰" },
];

const Locations = () => {
  return (
    <section className="py-24 bg-secondary-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 mb-6 text-sm font-bold tracking-wide text-primary uppercase bg-accent-blue rounded-full border border-primary/10">
                <Globe size={16} />
                Global Presence
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
                Serving Clients <span className="text-primary">Globally</span>
              </h2>
              
              <p className="text-lg text-secondary-text mb-8 leading-relaxed">
                With offices in New York and Pakistan, we provide expert bookkeeping and accounting services to businesses across the USA, UK, and worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {locations.map((loc, index) => (
                  <motion.div
                    key={loc.city}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-border-custom shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-accent-blue rounded-full flex items-center justify-center text-primary text-xl">
                      {loc.flag}
                    </div>
                    <div>
                      <p className="font-bold text-navy leading-none">{loc.city}</p>
                      <p className="text-xs text-secondary-text font-medium uppercase tracking-wider mt-1">{loc.country}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Address Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-navy text-white rounded-[24px] shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Building2 size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 text-accent-blue font-bold uppercase tracking-widest text-xs">
                    <MapPin size={14} />
                    Main Office
                  </div>
                  <h3 className="text-xl font-bold mb-2">New York Office</h3>
                  <p className="text-white/80 font-medium mb-4">67 West St, Brooklyn, NY 11222</p>
                  <a 
                    href="https://maps.google.com/?q=67+West+St,+Brooklyn,+NY+11222" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors"
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Stylized Map */}
          <div className="lg:w-1/2 w-full h-[400px] lg:h-[500px] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-full bg-white rounded-[32px] border border-border-custom shadow-2xl p-8 relative overflow-hidden flex items-center justify-center"
            >
              {/* World Map SVG Placeholder */}
              <div className="w-full h-full relative opacity-20">
                <svg viewBox="0 0 1000 500" className="w-full h-full text-navy fill-current">
                    <path d="M150,100 Q200,50 250,100 T350,150 T450,100 T550,150 T650,100 T750,150 T850,100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx="200" cy="150" r="10" />
                    <circle cx="500" cy="250" r="10" />
                    <circle cx="800" cy="150" r="10" />
                </svg>
              </div>

              {/* Pulsing Location Markers */}
              <div className="absolute inset-0 pointer-events-none">
                {/* NY Marker */}
                <div className="absolute top-[30%] left-[25%]">
                    <Marker label="New York" />
                </div>
                {/* London Marker */}
                <div className="absolute top-[25%] left-[48%]">
                    <Marker label="London" />
                </div>
                {/* Pakistan Marker */}
                <div className="absolute top-[45%] left-[68%]">
                    <Marker label="Pakistan" />
                </div>
                {/* Miami Marker */}
                <div className="absolute top-[42%] left-[22%]">
                    <Marker label="Miami" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 p-6 bg-accent-blue/30 backdrop-blur-md rounded-2xl border border-primary/10">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-navy font-black text-2xl">24/7</p>
                        <p className="text-xs font-bold text-navy/60 uppercase tracking-tighter">Support Across Timezones</p>
                    </div>
                    <div className="h-10 w-px bg-navy/10" />
                    <div>
                        <p className="text-navy font-black text-2xl">100%</p>
                        <p className="text-xs font-bold text-navy/60 uppercase tracking-tighter">Remote Delivery</p>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Marker = ({ label }: { label: string }) => (
  <div className="relative flex items-center justify-center">
    <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping" />
    <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg" />
    <div className="absolute top-6 whitespace-nowrap bg-navy text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg">
      {label}
    </div>
  </div>
);

export default Locations;
