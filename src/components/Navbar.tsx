"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Calendar, MessageCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCallDropdown, setShowCallDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCallDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Experience", href: "/#about" },
    { name: "Software", href: "/#software" },
    { name: "Contact", href: "/#contact" },
  ];

  const callOptions = [
    {
      name: "Book a Free Discovery Call",
      href: "https://calendly.com/ledgerly247/30min",
      icon: <Calendar size={18} />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      name: "Reach out on WhatsApp",
      href: "https://wa.me/923155130326",
      icon: <MessageCircle size={18} />,
      color: "bg-green-50 text-green-600",
    },
    {
      name: "Send an Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=aniza@ledgerly247.com&su=Contact%20Inquiry",
      icon: <Mail size={18} />,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-0" : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/images/Led_logo.png" alt="Ledgerly 24/7 Logo" className="h-28 md:h-32 w-auto object-contain" />
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
          
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={() => setShowCallDropdown(true)}
            onMouseLeave={() => setShowCallDropdown(false)}
          >
            <button
              onClick={() => setShowCallDropdown(!showCallDropdown)}
              className="bg-primary text-white px-6 py-2.5 rounded-[20px] font-semibold hover:bg-navy transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
            >
              Book a Free Call
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-300 ${showCallDropdown ? "rotate-180" : ""}`} 
              />
            </button>

            <AnimatePresence>
              {showCallDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-border-custom overflow-hidden py-2"
                >
                  {callOptions.map((option) => (
                    <a
                      key={option.name}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                      onClick={() => setShowCallDropdown(false)}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${option.color}`}>
                        {option.icon}
                      </div>
                      <span className="text-navy font-semibold text-sm">
                        {option.name}
                      </span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
              
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Quick Contact</p>
                {callOptions.map((option) => (
                  <a
                    key={option.name}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl border border-border-custom hover:border-primary transition-all`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${option.color}`}>
                      {option.icon}
                    </div>
                    <span className="text-navy font-bold text-sm">
                      {option.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

