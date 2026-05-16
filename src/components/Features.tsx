"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Certified Accountant",
    desc: "Professionally trained and certified to handle complex financial tasks."
  },
  {
    title: "Accurate & Tax Ready",
    desc: "Meticulous reports that are ready for immediate tax filing and audits."
  },
  {
    title: "IFRS & FASB Compliant",
    desc: "Strict adherence to IFRS, IASB, FASB, and IFAC regulations."
  },
  {
    title: "Confidential & Secure",
    desc: "Your sensitive financial data is protected with 100% confidentiality."
  },
  {
    title: "Cost-Effective Pricing",
    desc: "Premium quality bookkeeping services at competitive market rates."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The Advantage</span>
            <h2 className="text-4xl font-black text-navy mb-6 leading-tight">
              Why Businesses Trust Us
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed">
              We combine international accounting standards with modern cloud technology to deliver results that help your business grow.
            </p>
          </div>

          {/* Grid Right Column */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mt-1 bg-primary/10 p-1.5 rounded-full text-primary shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{reason.title}</h3>
                  <p className="text-secondary-text text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
