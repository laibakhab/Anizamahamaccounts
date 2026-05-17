"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ExternalLink 
} from "lucide-react";

// Custom Social Icons to avoid Lucide import errors
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/in/aniza-maham-005a66409/" },
    { name: "Email", icon: MailIcon, href: "mailto:Aniza@ledgerly247.com?subject=Contact%20Inquiry" },
  ];

  const quickLinks = [
    { name: "Services", href: "/#services" },
    { name: "About Founder", href: "/#about" },
    { name: "Software", href: "/#software" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQs", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-border-custom">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-8 block">
              <img src="/images/Led_logo.png" alt="Aniza Accounting Logo" className="h-24 md:h-28 w-auto object-contain" />
            </Link>
            <p className="text-secondary-text leading-relaxed mb-8 max-w-xs">
              Certified accountant providing premium, cost-effective bookkeeping and accounting services to businesses worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border-custom flex items-center justify-center text-navy hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-black text-navy text-lg mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-secondary-text hover:text-primary transition-colors font-medium flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Professional Standards */}
          <div>
            <h4 className="font-black text-navy text-lg mb-8 uppercase tracking-widest text-sm">Compliance</h4>
            <ul className="space-y-4 text-secondary-text font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                IFRS Standards
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                IASB Regulations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                FASB Certified
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                IFAC Compliance
              </li>
            </ul>
          </div>

          {/* Column 4: Consultation */}
          <div>
            <h4 className="font-black text-navy text-lg mb-8 uppercase tracking-widest text-sm">Consultation</h4>
            <div className="bg-secondary-bg p-6 rounded-[24px] border border-border-custom">
              <p className="text-navy font-bold mb-4">Book a Strategy Call</p>
              <p className="text-secondary-text text-sm mb-6 leading-relaxed">
                Schedule your free 30-minute complementary consultation to discuss your business.
              </p>
              <Link
                href="https://calendly.com/ledgerly247/30min"
                target="_blank"
                className="inline-flex items-center gap-2 bg-navy text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-primary transition-all shadow-lg"
              >
                Book Session
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-custom flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-secondary-text text-sm font-medium">
            © {currentYear} Aniza Maham Accounting. Developed for Excellence.
          </p>
          <div className="flex gap-8 text-sm font-medium text-secondary-text">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
