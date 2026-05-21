"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-border-custom shadow-2xl rounded-2xl md:rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-lg bg-white/95">
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-accent-blue p-3 rounded-xl hidden md:block">
                  <Cookie className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-lg mb-1 flex items-center gap-2">
                    <Cookie className="text-primary md:hidden" size={20} />
                    We value your privacy
                  </h3>
                  <p className="text-secondary-text text-sm md:text-base max-w-2xl leading-relaxed">
                    We use cookies to enhance your browsing experience and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                      Privacy Policy
                    </Link>{" "}
                    for more information.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleReject}
                  className="w-full sm:w-auto px-8 py-3 rounded-[20px] text-navy font-semibold border border-border-custom hover:bg-secondary-bg transition-all text-sm md:text-base"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAccept}
                  className="w-full sm:w-auto px-8 py-3 rounded-[20px] bg-primary text-white font-semibold hover:bg-navy transition-all shadow-lg shadow-primary/20 text-sm md:text-base"
                >
                  Accept All
                </button>
              </div>

              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-secondary-text hover:text-navy transition-colors md:hidden"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
