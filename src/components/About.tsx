"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Lock, 
  CheckCircle2 
} from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Profile Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/3 relative"
          >
            <div className="aspect-[4/5] bg-secondary-bg rounded-[40px] overflow-hidden border border-border-custom relative group shadow-2xl">
              <img 
                src="/images/profile.jpg" 
                alt="Aniza Z. - Certified Accountant" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-md rounded-[24px] border border-white/50 shadow-lg">
                <p className="font-black text-navy text-xl">Aniza Maham</p>
                <p className="text-primary font-bold text-sm uppercase tracking-widest">Certified Accountant</p>
              </div>
            </div>            
            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-[40px]" />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8">Meet Aniza</h2>
            
            <div className="space-y-6 text-lg text-secondary-text leading-relaxed mb-10">
              <p>
                I am a dedicated and certified accountant with over <span className="text-navy font-bold">3+ years of hands-on experience</span> in the world of bookkeeping and financial management. My mission is to provide businesses with the clarity and organization they need to thrive.
              </p>
              <p>
                I specialize in high-quality bookkeeping services that strictly comply with international standards, including <span className="text-navy font-bold">IFRS, IASB, FASB, and IFAC</span>. Whether it's catching up on months of overdue books or setting up robust financial systems, I ensure your records are 100% accurate and audit-ready.
              </p>
              <p>
                I am committed to delivering premium results that are both cost-effective and highly secure, ensuring your financial data remains confidential at all times.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { label: "Certified Accountant", icon: Award },
                { label: "3+ Years Experience", icon: Clock },
                { label: "IFRS & FASB Compliant", icon: CheckCircle2 },
                { label: "Cost-Effective Services", icon: DollarSign },
                { label: "Confidential & Secure", icon: Lock },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-accent-blue rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-navy">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <Link
                href="https://calendly.com/ledgerly247/30min"
                target="_blank"
                className="bg-primary text-white px-10 py-5 rounded-[20px] font-bold text-lg hover:bg-navy transition-all shadow-xl shadow-primary/20"
              >
                Free 30-Min Consultation
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
