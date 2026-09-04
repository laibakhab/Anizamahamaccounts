"use client";

import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const officeAddress = "67 West St, Brooklyn, NY 11222";

  return (
    <section id="contact" className="bg-secondary-bg py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-16 lg:flex-row">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-2/5">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">Get in touch</span>
            <h2 className="mb-8 text-4xl font-black leading-tight text-navy md:text-5xl">Let&apos;s discuss your financial goals</h2>
            <p className="mb-10 text-lg leading-relaxed text-secondary-text">Ready to organize your business finances? Start with our short intake form or choose another way to connect.</p>
            <div className="space-y-4">
              <ContactLink href="https://wa.me/923155130326" icon={<Phone size={24} />} title="WhatsApp" detail="Quick chat" iconClass="bg-green-100 text-green-600" />
              <ContactLink href="https://mail.google.com/mail/?view=cm&fs=1&to=Bookkeepingbyaniza@gmail.com&su=Contact%20Inquiry" icon={<Mail size={24} />} title="Email" detail="Bookkeepingbyaniza@gmail.com" iconClass="bg-blue-100 text-primary" />
              <ContactLink href="https://www.linkedin.com/in/aniza-maham-86ba6041a/" icon={<span className="text-xl font-black">in</span>} title="LinkedIn" detail="Professional profile" iconClass="bg-blue-50 text-[#0077B5]" />
              <ContactLink href="https://maps.google.com/?q=67+West+St,+Brooklyn,+NY+11222" icon={<MapPin size={24} />} title="Office Address" detail={officeAddress} iconClass="bg-navy/5 text-navy" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-1 items-center rounded-[32px] bg-navy p-8 text-white shadow-2xl md:p-14">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">A better first conversation</p>
              <h3 className="mb-6 text-3xl font-black md:text-4xl">Tell us what your business needs next.</h3>
              <p className="mb-8 leading-relaxed text-white/70">Our Get Started form gathers only the practical details needed to understand your situation. Please do not submit passwords, bank details, or sensitive financial records.</p>
              <Link href="/get-started" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-white hover:text-navy">Open intake form <Send size={18} /></Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function ContactLink({ href, icon, title, detail, iconClass }: { href: string; icon: React.ReactNode; title: string; detail: string; iconClass: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-border-custom bg-white p-5 transition hover:border-primary hover:shadow-xl"><div className="flex items-center gap-4"><div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconClass}`}>{icon}</div><div><p className="font-bold text-navy">{title}</p><p className="text-sm font-medium text-secondary-text">{detail}</p></div></div><Send size={18} className="text-primary opacity-0 transition group-hover:opacity-100" /></a>;
}

export default Contact;
