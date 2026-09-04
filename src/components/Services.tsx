"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  RefreshCcw, 
  Receipt, 
  Users, 
  ClipboardCheck, 
  FileText, 
  Scale, 
  CalendarDays, 
  LockKeyhole, 
  LineChart,
  CheckCircle2
} from "lucide-react";
import VideoModal from "./VideoModal";

const serviceCategories = [
  {
    name: "Foundation",
    services: [
      {
        title: "Monthly Bookkeeping",
        desc: "Full-cycle bookkeeping that keeps your business organized, compliant, and ready for any financial inquiry.",
        icon: CalendarDays,
        badge: "Most Requested"
      },
      {
        title: "Bank Reconciliation",
        desc: "Zero-discrepancy oversight of all accounts, ensuring every dollar is accounted for and your cash position is always clear.",
        icon: RefreshCcw,
        badge: "Ongoing Retainer"
      },
      {
        title: "Catch Up & Clean Up",
        desc: "Restoring historical accuracy to neglected accounts, transforming disorganized data into structured financial intelligence.",
        icon: Database,
        badge: "Audit Ready"
      },
      {
        title: "A/P & A/R Management",
        desc: "Strategic management of payables and receivables to optimize your working capital and maintain strong vendor relationships.",
        icon: Receipt,
      },
    ]
  },
  {
    name: "Growth",
    services: [
      {
        title: "Budgeting & Forecasting",
        desc: "Predictive financial modeling that allows you to anticipate market shifts and scale your operations with confidence.",
        icon: LineChart,
        badge: "Growth Stage"
      },
      {
        title: "Payroll Processing",
        desc: "Risk-free payroll administration that ensures timely compensation while maintaining strict compliance with local tax regulations.",
        icon: Users,
      },
      {
        title: "Invoicing & Billing",
        desc: "Automated billing systems that accelerate your revenue cycle and project a professional image to your clients.",
        icon: ClipboardCheck,
      },
    ]
  },
  {
    name: "Reporting",
    services: [
      {
        title: "Financial Statements",
        desc: "Executive-level reporting (P&L, Balance Sheets) that provides a comprehensive view of your organization's health.",
        icon: FileText,
        badge: "Most Requested"
      },
      {
        title: "Tax Preparation Support",
        desc: "Pre-emptive tax alignment services that ensure your books are perfectly synchronized with CPA requirements.",
        icon: Scale,
        badge: "Audit Ready"
      },
      {
        title: "Year-End Closing",
        desc: "Seamless fiscal year transitions with verified closing procedures that prepare your business for the next cycle of growth.",
        icon: LockKeyhole,
      },
    ]
  }
];

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Professional Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-navy mb-8 leading-tight"
          >
            Our team delivers accurate, audit-ready financial management so business owners can focus on growth.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto"
          >
            Strategic financial solutions designed for construction, legal, and professional service industries.
          </motion.p>
        </div>

        <div className="space-y-20">
          {serviceCategories.map((category, catIndex) => (
            <div key={category.name}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-border-custom flex-grow" />
                <h3 className="text-2xl font-black text-navy uppercase tracking-widest flex items-center gap-3">
                  {category.name}
                </h3>
                <div className="h-px bg-border-custom flex-grow" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 bg-secondary-bg rounded-[24px] border border-border-custom hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                  >
                    {service.badge && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter z-10">
                        {service.badge}
                      </div>
                    )}
                    
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <service.icon size={28} />
                    </div>
                    
                    <h4 className="text-xl font-bold text-navy mb-4 leading-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    
                    <p className="text-secondary-text text-sm leading-relaxed mb-6 flex-grow">
                      {service.desc}
                    </p>
                    
                    <div className="pt-4 border-t border-border-custom/50 mt-auto flex items-center gap-2 text-primary">
                      <CheckCircle2 size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Outcome Driven
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 bg-navy rounded-[32px] text-center relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue blur-[120px] rounded-full" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
                Ready to stabilize your financial foundation?
            </h3>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <a
                    href="https://wa.me/923155130326"
                    target="_blank"
                    className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-white hover:text-navy transition-all shadow-lg"
                >
                    Message Us on WhatsApp
                </a>
                <button 
                    onClick={() => setIsOpen(true)}
                    className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10"
                >
                    View Our Process
                </button>
            </div>
        </motion.div>
      </div>

      <VideoModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        videoSrc="/video/intro.mp4" 
      />
    </section>
  );
};

export default Services;
