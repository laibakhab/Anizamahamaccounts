import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

type IntakePayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  businessName?: unknown;
  businessType?: unknown;
  website?: unknown;
  bookkeepingSoftware?: unknown;
  currentBookkeepingStatus?: unknown;
  bookkeepingChallenges?: unknown;
  booksUpToDate?: unknown;
  servicesNeeded?: unknown;
  communicationPreference?: unknown;
  additionalNotes?: unknown;
};

type IntakeSubmission = {
  full_name: string;
  email: string;
  phone: string;
  business_name: string;
  business_type: string;
  website: string | null;
  bookkeeping_software: string;
  current_bookkeeping_status: string;
  bookkeeping_challenges: string;
  books_up_to_date: string;
  services_needed: string[];
  communication_preference: string;
  additional_notes: string | null;
};

const MAX_TEXT_LENGTH = 500;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function textValue(value: unknown, field: string, required = true) {
  if (typeof value !== "string") {
    throw new Error(`${field} must be text`);
  }

  const normalized = value.trim();
  if (required && !normalized) {
    throw new Error(`${field} is required`);
  }
  if (normalized.length > MAX_TEXT_LENGTH) {
    throw new Error(`${field} is too long`);
  }
  return normalized;
}

function validatePayload(payload: IntakePayload): IntakeSubmission {
  const fullName = textValue(payload.fullName, "Full name");
  const email = textValue(payload.email, "Email");
  if (!emailPattern.test(email)) throw new Error("Please enter a valid email");

  const services = payload.servicesNeeded;
  if (!Array.isArray(services) || services.length === 0 || services.some((item) => typeof item !== "string")) {
    throw new Error("Select at least one service");
  }

  return {
    full_name: fullName,
    email: email.toLowerCase(),
    phone: textValue(payload.phone, "Phone or WhatsApp"),
    business_name: textValue(payload.businessName, "Business name"),
    business_type: textValue(payload.businessType, "Business type"),
    website: textValue(payload.website, "Website", false) || null,
    bookkeeping_software: textValue(payload.bookkeepingSoftware, "Bookkeeping software"),
    current_bookkeeping_status: textValue(payload.currentBookkeepingStatus, "Bookkeeping status"),
    bookkeeping_challenges: textValue(payload.bookkeepingChallenges, "Bookkeeping challenges"),
    books_up_to_date: textValue(payload.booksUpToDate, "Books status"),
    services_needed: services.map((item) => item.trim()).filter(Boolean).slice(0, 10),
    communication_preference: textValue(payload.communicationPreference, "Communication preference"),
    additional_notes: textValue(payload.additionalNotes, "Additional notes", false) || null,
  };
}

async function sendNotification(submission: IntakeSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;
  if (!apiKey || !from || !to) return;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New intake submission from ${submission.full_name}`,
      text: `Name: ${submission.full_name}\nEmail: ${submission.email}\nPhone: ${submission.phone}\nBusiness: ${submission.business_name}\nServices: ${submission.services_needed.join(", ")}`,
    }),
  });

  if (!response.ok) console.error("Intake notification failed", await response.text());
}

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Intake service is not configured" }, { status: 503 });
    }

    const payload = (await request.json()) as IntakePayload;
    const submission = validatePayload(payload);
    const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });
    const { error } = await supabase.from("intake_submissions").insert(submission);

    if (error) {
      console.error("Supabase intake insert failed", error);
      return NextResponse.json({ error: "Unable to save your submission" }, { status: 500 });
    }

    await sendNotification(submission);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid submission";
    const isValidationError = message.includes("required") || message.includes("valid") || message.includes("Select") || message.includes("too long");
    return NextResponse.json({ error: isValidationError ? message : "Please check your details and try again" }, { status: isValidationError ? 400 : 500 });
  }
}
