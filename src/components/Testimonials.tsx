"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { image: "/images/r1.jpeg" },          
  { image: "/images/r2.jpeg" },
  { image: "/images/r3.jpeg" },
  { image: "/images/r4.jpeg" },
  { image: "/images/r5.jpeg" },
  { image: "/images/r6.jpeg" },
  { image: "/images/r8.jpeg" },
  { image: "/images/r9.jpeg" },
  { image: "/images/r10.jpeg" },
  { image: "/images/r12.jpeg" },
  { image: "/images/r13.jpeg" },
];


const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000); // Transitions every 4 seconds

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section id="testimonials" className="py-24 bg-secondary-bg overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Social Proof
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-navy mb-6"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white p-4 md:p-6 rounded-[40px] shadow-2xl border border-border-custom relative overflow-hidden flex items-center justify-center"
              >
                <div className="w-full relative group overflow-hidden rounded-[24px]">
                  <img 
                    src={testimonials[current].image} 
                    alt={`Client Review ${current + 1}`}
                    className="w-full h-auto object-contain max-h-[600px] mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/5 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
              <button 
                onClick={prev}
                className="p-3 rounded-full bg-white shadow-lg border border-border-custom text-navy hover:bg-primary hover:text-white transition-all duration-300 group cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
              </button>
              
              <div className="flex items-center gap-2 font-bold text-navy bg-white px-6 py-2 rounded-full shadow-md border border-border-custom">
                <span className="text-primary text-xl">{current + 1}</span>
                <span className="opacity-30">/</span>
                <span className="opacity-60">{testimonials.length}</span>
              </div>

              <button 
                onClick={next}
                className="p-3 rounded-full bg-white shadow-lg border border-border-custom text-navy hover:bg-primary hover:text-white transition-all duration-300 group cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
              </button>
            </div>

            {/* Indicator Dots (Optional but good for visual) */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === index ? "w-8 bg-primary" : "w-2 bg-navy/20 hover:bg-navy/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
