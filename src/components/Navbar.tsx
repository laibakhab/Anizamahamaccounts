"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Experience", href: "/#about" },
    { name: "Software", href: "/#software" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-0" : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/images/Led_logo.png" alt="Aniza Accounting Logo" className="h-28 md:h-32 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-secondary-text hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://calendly.com/ledgerly247/30min"
            target="_blank"
            className="bg-primary text-white px-6 py-2.5 rounded-[20px] font-semibold hover:bg-navy transition-all shadow-lg shadow-primary/20 flex items-center"
          >
            Book a Free Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border-custom overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-secondary-text text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 py-2 border-t border-border-custom pt-4 mt-2">
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=Aniza@ledgerly247.com" 
                    target="_blank"
                    className="text-secondary-text hover:text-primary transition-colors text-sm font-bold"
                  >
                    Aniza@ledgerly247.com
                  </a>
              </div>
              <Link
                href="https://calendly.com/ledgerly247/30min"
                target="_blank"
                className="bg-primary text-white text-center py-3 rounded-[20px] font-semibold flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                Book a Free Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
