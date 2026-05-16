"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do you provide ongoing bookkeeping services?",
    answer: "Yes, we provide comprehensive ongoing bookkeeping services tailored to your needs. These are available on a monthly, quarterly, or yearly basis to ensure your financials are always up-to-date and accurate."
  },
  {
    question: "Which accounting software do you use?",
    answer: "We are proficient in the industry's leading tools, including QuickBooks Online (Advanced ProAdvisor level), Xero, MS Excel, Zoho Books, and Wave Accounting. We can work with your existing setup or help you choose the best one for your business."
  },
  {
    question: "Can you clean up messy books?",
    answer: "Absolutely! Catch-up and clean-up bookkeeping is one of our specialties. We'll organize your historical data, categorize transactions correctly, and ensure your books are 100% accurate and audit-ready, no matter how behind they are."
  },
  {
    question: "Do you prepare financial statements?",
    answer: "Yes, we prepare a full suite of financial statements including Profit & Loss, Balance Sheets, and Cash Flow statements. These reports provide clear insights into your business's financial health and are prepared following international standards like IFRS."
  },
  {
    question: "Are your reports tax-ready?",
    answer: "Yes. Our goal is to ensure your bookkeeping is accurate throughout the year so that tax season is stress-free. All our reports are meticulously prepared to be tax-ready and comply with relevant regulations (IASB, FASB, IFAC)."
  },
  {
    question: "How quickly can you deliver?",
    answer: "Delivery time depends on the complexity and volume of the project. However, we are known for our fast turnaround times without compromising quality. For ongoing monthly bookkeeping, we provide regular updates based on our agreed-upon schedule."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Header */}
          <div className="lg:w-1/3">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Information</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-text mb-10 leading-relaxed">
              Find answers to the most common questions about our bookkeeping and accounting services.
            </p>
            <div className="p-6 bg-secondary-bg rounded-[24px] border border-border-custom">
                <div className="flex items-center gap-3 text-primary mb-3">
                    <HelpCircle size={20} />
                    <span className="font-bold">Have more questions?</span>
                </div>
                <p className="text-sm text-secondary-text leading-relaxed">
                    Feel free to reach out to us directly on Calendly, Whatsapp or via the contact form for a custom consultation regarding your specific business needs.
                </p>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`border rounded-[24px] transition-all duration-300 ${
                    isOpen ? "border-primary bg-accent-blue/5 shadow-lg shadow-primary/5" : "border-border-custom bg-white hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                  >
                    <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-primary" : "text-navy"}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-primary text-white rotate-180" : "bg-secondary-bg text-navy"}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 text-secondary-text text-lg leading-relaxed border-t border-border-custom pt-6 mx-6 md:mx-8">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
