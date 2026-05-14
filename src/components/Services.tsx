"use client";

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
  LineChart 
} from "lucide-react";

const services = [
  {
    title: "Catch Up & Clean Up",
    desc: "Overdue books? I'll organize, categorize, and clean your historical data to perfection.",
    icon: Database,
  },
  {
    title: "Bank Reconciliation",
    desc: "Ensuring every transaction matches your bank and credit card statements perfectly.",
    icon: RefreshCcw,
  },
  {
    title: "A/P & A/R Management",
    desc: "Streamlined tracking of payables and receivables to keep your cash flow healthy.",
    icon: Receipt,
  },
  {
    title: "Payroll Processing",
    desc: "Accurate and timely payroll management for your employees following local regulations.",
    icon: Users,
  },
  {
    title: "Invoicing & Billing",
    desc: "Professional invoice creation and follow-ups to ensure you get paid on time.",
    icon: ClipboardCheck,
  },
  {
    title: "Financial Statements",
    desc: "Preparation of P&L, Balance Sheets, and Cash Flow statements for clear insights.",
    icon: FileText,
  },
  {
    title: "Tax Related Consulting",
    desc: "Expert guidance to ensure your bookkeeping aligns with tax filing requirements.",
    icon: Scale,
  },
  {
    title: "Monthly Bookkeeping",
    desc: "Consistent, ongoing support to keep your financials organized month after month.",
    icon: CalendarDays,
  },
  {
    title: "Year-End Closing",
    desc: "Comprehensive closing of books to make your year-end transition smooth and easy.",
    icon: LockKeyhole,
  },
  {
    title: "Budgeting & Forecasting",
    desc: "Data-driven projections and budgets to help you plan for future business growth.",
    icon: LineChart,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            My Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-navy mb-6"
          >
            Tailored Bookkeeping Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary-text leading-relaxed"
          >
            I provide cost-effective and high-quality bookkeeping solutions complying with 
            IFRS, IASB, FASB, and IFAC standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: index * 0.05 }}
              className="p-8 bg-white rounded-[20px] border border-border-custom hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-shadow duration-300 group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center mb-6 text-navy group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              <div className="pt-4 border-t border-border-custom mt-auto">
                <span className="text-xs font-bold text-navy uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
                  Expert Service
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
