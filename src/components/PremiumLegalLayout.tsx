"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Breadcrumb } from "./Breadcrumb";
import { Clock, ShieldCheck, FileText, ChevronRight } from "lucide-react";

interface PremiumLegalLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  sections: { id: string; title: string }[];
  children: React.ReactNode;
}

const PremiumLegalLayout: React.FC<PremiumLegalLayoutProps> = ({ 
  title, 
  description,
  lastUpdated, 
  sections,
  children 
}) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <Breadcrumb items={[{ label: title }]} />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck size={14} />
                  Legal Documentation
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-navy mb-6 tracking-tight leading-tight">
                  {title}
                </h1>
                <p className="text-lg text-secondary-text leading-relaxed">
                  {description}
                </p>
              </div>
              
              <div className="flex items-center gap-3 text-sm font-medium text-secondary-text bg-white p-4 rounded-2xl border border-border-custom shadow-sm">
                <Clock size={18} className="text-primary" />
                <span>Last updated: <span className="text-navy">{lastUpdated}</span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
            
            {/* Desktop Sidebar Navigation */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h3 className="text-xs font-black text-navy uppercase tracking-widest mb-6 px-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                          activeSection === section.id 
                            ? "bg-primary text-white shadow-lg shadow-primary/20" 
                            : "text-secondary-text hover:bg-secondary-bg hover:text-navy"
                        }`}
                      >
                        <span className="truncate">{section.title}</span>
                        <ChevronRight 
                          size={14} 
                          className={`transition-transform duration-300 ${
                            activeSection === section.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`} 
                        />
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6 rounded-2xl bg-navy text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-bold mb-2">Need Help?</h4>
                    <p className="text-xs text-white/70 mb-4 leading-relaxed">
                      If you have questions about our legal terms, feel free to reach out.
                    </p>
                    <Link 
                      href="/#contact" 
                      className="inline-block w-full text-center py-2.5 bg-primary rounded-lg text-xs font-bold hover:bg-white hover:text-navy transition-all"
                    >
                      Contact Aniza
                    </Link>
                  </div>
                  <FileText className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 -rotate-12" />
                </div>
              </div>
            </aside>

            {/* Legal Content Body */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 max-w-3xl"
            >
              <div className="premium-legal-body 
                [&_h2]:text-3xl [&_h2]:font-black [&_h2]:text-navy [&_h2]:mb-8 [&_h2]:mt-20 [&_h2]:scroll-mt-32
                [&_h2:first-child]:mt-0
                [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-navy [&_h3]:mb-4 [&_h3]:mt-10
                [&_p]:text-secondary-text [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-[17px]
                [&_ul]:list-none [&_ul]:space-y-4 [&_ul]:mb-8 [&_ul]:mt-4
                [&_li]:relative [&_li]:pl-7 [&_li]:text-secondary-text [&_li]:text-[17px]
                [&_li:before]:content-[''] [&_li:before]:absolute [&_li:before]:left-0 [&_li:before]:top-[10px] [&_li:before]:w-2 [&_li:before]:h-2 [&_li:before]:rounded-full [&_li:before]:bg-primary
                [&_strong]:text-navy [&_strong]:font-bold
                [&_a]:text-primary [&_a]:font-bold [&_a]:underline-offset-4 [&_a]:hover:underline
                [&_section]:mb-16
              ">
                {children}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PremiumLegalLayout;
