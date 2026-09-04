"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from "lucide-react";
import Link from "next/link";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  website: string;
  bookkeepingSoftware: string;
  currentBookkeepingStatus: string;
  bookkeepingChallenges: string;
  booksUpToDate: string;
  servicesNeeded: string[];
  communicationPreference: string;
  additionalNotes: string;
};

const initialData: FormData = {
  fullName: "", email: "", phone: "", businessName: "", businessType: "", website: "",
  bookkeepingSoftware: "", currentBookkeepingStatus: "", bookkeepingChallenges: "",
  booksUpToDate: "", servicesNeeded: [], communicationPreference: "", additionalNotes: "",
};

const steps = ["About you", "Your books", "Your needs", "Contact", "Review"];
const inputClass = "w-full rounded-xl border border-border-custom bg-secondary-bg px-4 py-3.5 text-navy outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";
const radioOptions = (name: keyof FormData, options: string[], data: FormData, setData: (data: FormData) => void) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {options.map((option) => (
      <label key={option} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${data[name] === option ? "border-primary bg-accent-blue/50" : "border-border-custom bg-white hover:border-primary/40"}`}>
        <input type="radio" name={name} value={option} checked={data[name] === option} onChange={(event) => setData({ ...data, [name]: event.target.value })} className="h-4 w-4 accent-primary" />
        <span className="text-sm font-semibold text-navy">{option}</span>
      </label>
    ))}
  </div>
);

export default function GetStartedForm() {
  const [data, setData] = useState(initialData);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormData, value: string) => setData((current) => ({ ...current, [key]: value }));

  const validateStep = () => {
    if (step === 0 && (!data.fullName.trim() || !data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !data.phone.trim() || !data.businessName.trim() || !data.businessType)) return "Please complete your name, valid email, phone, business name, and business type.";
    if (step === 1 && (!data.bookkeepingSoftware || !data.currentBookkeepingStatus || !data.bookkeepingChallenges.trim() || !data.booksUpToDate)) return "Please answer each question about your current books.";
    if (step === 2 && data.servicesNeeded.length === 0) return "Please select at least one service.";
    if (step === 3 && !data.communicationPreference) return "Please choose how you would like us to contact you.";
    return "";
  };

  const next = () => {
    const validationError = validateStep();
    if (validationError) { setError(validationError); return; }
    setError("");
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/intake", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to submit your details");
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Unable to submit your details");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) return (
    <div className="rounded-[32px] border border-border-custom bg-white p-8 text-center shadow-xl md:p-16">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600"><CheckCircle2 size={34} /></div>
      <h2 className="mb-4 text-3xl font-black text-navy">Thank You!</h2>
      <p className="mx-auto mb-8 max-w-md text-secondary-text">Your information has been submitted successfully. We&apos;ll review your details and get back to you soon.</p>
      <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-navy">Return to Homepage <ArrowRight size={18} /></Link>
    </div>
  );

  return (
    <form onSubmit={submit} className="rounded-[32px] border border-border-custom bg-white p-6 shadow-xl md:p-10">
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between text-sm font-bold text-secondary-text"><span>Step {step + 1} of {steps.length}</span><span>{steps[step]}</span></div>
        <div className="flex gap-2" aria-label="Form progress">{steps.map((label, index) => <div key={label} className={`h-2 flex-1 rounded-full ${index <= step ? "bg-primary" : "bg-border-custom"}`} aria-label={`${label}: ${index <= step ? "complete" : "upcoming"}`} />)}</div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>
          {step === 0 && <div className="space-y-6"><StepHeading title="Tell us about you" text="A few details help us understand your business before we speak." /><div className="grid gap-5 md:grid-cols-2"><Field label="Full name" required><input className={inputClass} value={data.fullName} onChange={(event) => update("fullName", event.target.value)} autoComplete="name" /></Field><Field label="Email" required><input type="email" className={inputClass} value={data.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" /></Field><Field label="Phone / WhatsApp" required><input type="tel" className={inputClass} value={data.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" /></Field><Field label="Business name" required><input className={inputClass} value={data.businessName} onChange={(event) => update("businessName", event.target.value)} /></Field></div><Field label="Business type / industry" required><select className={inputClass} value={data.businessType} onChange={(event) => update("businessType", event.target.value)}><option value="">Select one</option>{["Construction", "Legal", "Real estate", "E-commerce", "Healthcare", "Creative / consulting", "Non-profit", "Other"].map((option) => <option key={option}>{option}</option>)}</select></Field><Field label="Website (optional)"><input className={inputClass} value={data.website} onChange={(event) => update("website", event.target.value)} placeholder="https://" /></Field></div>}
          {step === 1 && <div className="space-y-7"><StepHeading title="How are your books today?" text="This helps us understand where the most useful first step will be." /><Field label="Which software do you use?" required>{radioOptions("bookkeepingSoftware", ["QuickBooks", "Xero", "Excel", "Zoho Books", "Other / none"], data, setData)}</Field><Field label="How are your books currently maintained?" required>{radioOptions("currentBookkeepingStatus", ["I manage them myself", "Another bookkeeper manages them", "They are not maintained", "I am not sure"], data, setData)}</Field><Field label="Are your books up to date?" required>{radioOptions("booksUpToDate", ["Yes, up to date", "A few months behind", "More than a year behind", "I am not sure"], data, setData)}</Field><Field label="What is your biggest bookkeeping challenge?" required><textarea className={`${inputClass} min-h-28 resize-y`} value={data.bookkeepingChallenges} onChange={(event) => update("bookkeepingChallenges", event.target.value)} /></Field></div>}
          {step === 2 && <div className="space-y-7"><StepHeading title="What can we help with?" text="Select every service that matches your current needs." /><fieldset><legend className="mb-3 text-sm font-bold text-navy">Services needed <span className="text-primary">*</span></legend><div className="grid gap-3 sm:grid-cols-2">{["Monthly bookkeeping", "Catch-up / cleanup", "Payroll", "Financial reporting", "Tax preparation support", "Budgeting and forecasting", "Invoicing and billing", "Other"].map((service) => <label key={service} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border-custom p-4 hover:border-primary/40"><input type="checkbox" checked={data.servicesNeeded.includes(service)} onChange={(event) => setData((current) => ({ ...current, servicesNeeded: event.target.checked ? [...current.servicesNeeded, service] : current.servicesNeeded.filter((item) => item !== service) }))} className="h-4 w-4 accent-primary" /><span className="text-sm font-semibold text-navy">{service}</span></label>)}</div></fieldset><Field label="Anything else we should know? (optional)"><textarea className={`${inputClass} min-h-32 resize-y`} value={data.additionalNotes} onChange={(event) => update("additionalNotes", event.target.value)} /></Field></div>}
          {step === 3 && <div className="space-y-7"><StepHeading title="How should we reach you?" text="Choose your preferred way to continue the conversation." /><Field label="Preferred communication method" required>{radioOptions("communicationPreference", ["WhatsApp", "Email", "Phone call"], data, setData)}</Field><div className="rounded-2xl bg-secondary-bg p-5 text-sm leading-relaxed text-secondary-text">Please do not share bank account numbers, passwords, or other sensitive financial records in this form. We will discuss secure document sharing after connecting.</div></div>}
          {step === 4 && <div className="space-y-6"><StepHeading title="Review your details" text="Check your information before sending it to Ledgerly 24/7." /><div className="divide-y divide-border-custom rounded-2xl border border-border-custom">{[["Name", data.fullName], ["Email", data.email], ["Phone", data.phone], ["Business", `${data.businessName} (${data.businessType})`], ["Software", data.bookkeepingSoftware], ["Books", data.booksUpToDate], ["Services", data.servicesNeeded.join(", ")], ["Contact by", data.communicationPreference]].map(([label, value]) => <div key={label} className="grid gap-1 p-4 sm:grid-cols-[140px_1fr] sm:gap-4"><span className="text-xs font-bold uppercase tracking-wider text-secondary-text">{label}</span><span className="text-sm font-semibold text-navy">{value}</span></div>)}</div></div>}
        </motion.div>
      </AnimatePresence>

      {error && <p role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>}
      <div className="mt-10 flex flex-col-reverse gap-3 border-t border-border-custom pt-6 sm:flex-row sm:justify-between"><button type="button" onClick={() => { setError(""); setStep((current) => Math.max(current - 1, 0)); }} disabled={step === 0 || submitting} className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom px-5 py-3 font-bold text-navy transition hover:bg-secondary-bg disabled:invisible"><ArrowLeft size={18} /> Previous</button>{step < steps.length - 1 ? <button type="button" onClick={next} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-navy">Continue <ArrowRight size={18} /></button> : <button type="submit" disabled={submitting} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Submitting..." : "Get Started"} <Send size={18} /></button>}</div>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) { return <div className="space-y-2"><label className="text-sm font-bold text-navy">{label} {required && <span className="text-primary">*</span>}</label>{children}</div>; }
function StepHeading({ title, text }: { title: string; text: string }) { return <div><h2 className="text-3xl font-black text-navy">{title}</h2><p className="mt-2 text-secondary-text">{text}</p></div>; }
