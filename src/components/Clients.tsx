"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Scale, 
  HardHat, 
  ShoppingCart, 
  Stethoscope, 
  Briefcase,
  Paintbrush,
  Users2
} from "lucide-react";

const clients = [
  {
    name: "Real Estate Developers",
    description: "Specialized project cost tracking and property management accounting.",
    icon: Building2,
    color: "bg-blue-50"
  },
  {
    name: "Law Firms & Attorneys",
    description: "Trust accounting and IOLTA compliance for legal professionals.",
    icon: Scale,
    color: "bg-navy/5"
  },
  {
    name: "Construction Companies",
    description: "Job costing, progress billing, and contractor payment management.",
    icon: HardHat,
    color: "bg-orange-50"
  },
  {
    name: "E-commerce Businesses",
    description: "Inventory management and multi-channel sales reconciliation.",
    icon: ShoppingCart,
    color: "bg-green-50"
  },
  {
    name: "Healthcare Providers",
    description: "HIPAA-compliant financial management for clinics and practitioners.",
    icon: Stethoscope,
    color: "bg-red-50"
  },
  {
    name: "Creative Agencies",
    description: "Profitability analysis for designers, architects, and consultants.",
    icon: Paintbrush,
    color: "bg-purple-50"
  },
  {
    name: "Consultants & Coaches",
    description: "Simplified expense tracking and tax planning for solo-professionals.",
    icon: Briefcase,
    color: "bg-slate-50"
  },
  {
    name: "Non-Profit Organizations",
    description: "Fund accounting and grant tracking for mission-driven entities.",
    icon: Users2,
    color: "bg-cyan-50"
  }
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Industry Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-navy mb-6"
          >
            Clients That We Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary-text leading-relaxed"
          >
            We provide tailored financial solutions for a diverse range of industries, 
            ensuring niche-specific compliance and growth-focused insights.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-secondary-bg rounded-[20px] border border-border-custom hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group text-center flex flex-col items-center"
            >
              <div className={`w-16 h-16 ${client.color} rounded-2xl flex items-center justify-center p-3 mb-6 shadow-sm transform group-hover:scale-110 transition-transform duration-300 text-primary`}>
                <client.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{client.name}</h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Professional Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 bg-navy rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                <Building2 size={32} />
            </div>
            <div>
                <p className="text-white font-bold text-xl">Don&apos;t see your industry?</p>
                <p className="text-white/60 text-sm font-medium">We specialize in creating custom financial workflows for unique business models.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/923155130326"
            target="_blank"
            className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-white hover:text-navy transition-all shadow-xl"
          >
            Message Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
