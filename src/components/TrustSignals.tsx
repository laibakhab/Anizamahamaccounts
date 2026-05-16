"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "QuickBooks",
    description: "Advanced ProAdvisor level expertise in automated bookkeeping.",
    logo: "/images/QuickBooks logo.png",
    color: "bg-green-50"
  },
  {
    name: "Xero",
    description: "Certified expertise in cloud-based accounting and bank feeds.",
    logo: "/images/xero logo.jpg",
    color: "bg-blue-50"
  },
  {
    name: "MS Excel",
    description: "Advanced data analysis, financial modeling, and reporting.",
    logo: "/images/MS Excel logo.png",
    color: "bg-green-50"
  },
  {
    name: "Zoho Books",
    description: "Seamless integration and invoicing for small businesses.",
    logo: "https://www.vectorlogo.zone/logos/zoho/zoho-icon.svg",
    color: "bg-red-50"
  },
  {
    name: "Wave",
    description: "Cost-effective solutions for freelancers and startups.",
    logo: "/images/wave logo.png",
    color: "bg-cyan-50"
  }
];

const TrustSignals = () => {
  return (
    <section id="software" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Technical Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-navy mb-6"
          >
            Tools We Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary-text leading-relaxed"
          >
            We are proficient in the industry's leading cloud accounting software,
            ensuring your data is handled with the best technology available.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-secondary-bg rounded-[20px] border border-border-custom hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group text-center flex flex-col items-center"
            >
              <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center p-3 mb-6 shadow-sm transform group-hover:scale-110 transition-transform duration-300`}>
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{tool.name}</h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-6 bg-navy rounded-[24px] flex flex-col md:flex-row items-center justify-start gap-6"
        >
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-navy bg-secondary-bg overflow-hidden">
                <img src={`/images/r${i}.jpeg`} alt="Client" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-white font-bold text-lg">Trusted by 100+ Businesses Worldwide</p>
            <p className="text-white/60 text-sm font-medium">Delivering accurate financial insights for growth-focused companies.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
