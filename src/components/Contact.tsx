"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  ExternalLink, 
  Phone,
  CheckCircle2,
  Loader2
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    // Uses the key from .env.local file
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError("Something went wrong. Please try again or use direct email.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Info & Quick CTAs */}
          <div className="lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight">
                Let's Discuss Your Financial Goals
              </h2>
              <p className="text-lg text-secondary-text mb-12 leading-relaxed">
                Ready to organize your business finances? Choose your preferred way to connect with me.
              </p>

              <div className="space-y-4">
                <Link
                  href="https://www.fiverr.com/s/pdKEdLR"
                  target="_blank"
                  className="flex items-center justify-between p-6 bg-white rounded-[24px] border border-border-custom hover:border-primary hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                      <ExternalLink size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-navy">Hire on Fiverr</p>
                      <p className="text-xs text-secondary-text font-medium uppercase tracking-widest">Secure Platform</p>
                    </div>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Send size={20} />
                  </div>
                </Link>

                <Link
                  href="https://wa.me/923155130326"
                  target="_blank"
                  className="flex items-center justify-between p-6 bg-white rounded-[24px] border border-border-custom hover:border-primary hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-navy">WhatsApp</p>
                      <p className="text-xs text-secondary-text font-medium uppercase tracking-widest">Quick Chat</p>
                    </div>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Send size={20} />
                  </div>
                </Link>

                <Link
                  href="mailto:Ledgerly247@gmail.com"
                  className="flex items-center justify-between p-6 bg-white rounded-[24px] border border-border-custom hover:border-primary hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-navy">Email</p>
                      <p className="text-sm font-bold text-secondary-text">Ledgerly247@gmail.com</p>
                    </div>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Send size={20} />
                  </div>
                </Link>
                
                {/* LinkedIn Card in Contact Section */}
                <Link
                  href="https://www.linkedin.com/in/aniza-maham-005a66409/"
                  target="_blank"
                  className="flex items-center justify-between p-6 bg-white rounded-[24px] border border-border-custom hover:border-primary hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-[#0077B5] rounded-full flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </div>
                    <div>
                      <p className="font-bold text-navy">LinkedIn</p>
                      <p className="text-xs text-secondary-text font-medium uppercase tracking-widest">Professional Profile</p>
                    </div>
                  </div>
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Send size={20} />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-border-custom relative overflow-hidden"
            >
              {isSuccess ? (
                <div className="text-center py-12 flex flex-col items-center justify-center space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-navy">Message Sent!</h3>
                  <p className="text-secondary-text text-lg">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy uppercase tracking-widest ml-1">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required 
                        placeholder="Your Full Name"
                        className="w-full px-6 py-4 bg-secondary-bg border border-border-custom rounded-[20px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy uppercase tracking-widest ml-1">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        placeholder="Your Email Address"
                        className="w-full px-6 py-4 bg-secondary-bg border border-border-custom rounded-[20px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      name="message"
                      required 
                      rows={5}
                      placeholder="Tell me about your bookkeeping needs..."
                      className="w-full px-6 py-4 bg-secondary-bg border border-border-custom rounded-[20px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none"
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-medium">{error}</p>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-5 rounded-[20px] font-black text-xl hover:bg-navy transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>
                        Send Message
                        <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
