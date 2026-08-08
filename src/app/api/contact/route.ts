import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactHtml,
  buildContactText,
  type ContactSubmission,
} from "@/lib/contact-email";

// Always run on demand; this route sends mail and must never be prerendered.
export const dynamic = "force-dynamic";

const MAX_LENGTHS: Record<keyof ContactSubmission, number> = {
  name: 120,
  email: 200,
  company: 160,
  phone: 40,
  service: 120,
  message: 5000,
};

/**
 * Small in-memory throttle. Enough to blunt casual abuse on a single instance;
 * it resets on redeploy and is not shared between serverless instances.
 */
const RATE_LIMIT = { windowMs: 60_000, max: 4 };
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
}

const asString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact route misconfigured: missing Resend env vars.");
    return NextResponse.json(
      { error: "Email is not configured. Please email us directly." },
      { status: 500 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill hidden fields that humans never see.
  if (asString(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const data: ContactSubmission = {
    name: asString(payload.name),
    email: asString(payload.email),
    company: asString(payload.company),
    phone: asString(payload.phone),
    service: asString(payload.service),
    message: asString(payload.message),
  };

  const errors: string[] = [];
  if (!data.name) errors.push("Name is required.");
  if (!data.email) errors.push("Email is required.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email))
    errors.push("Enter a valid email address.");
  if (!data.message) errors.push("Please tell us about your project.");

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    if (data[field as keyof ContactSubmission].length > limit) {
      errors.push(`${field} is too long.`);
    }
  }

  // Header injection guard: newlines must never reach an email header.
  if (/[\r\n]/.test(data.email) || /[\r\n]/.test(data.name)) {
    errors.push("Invalid characters in name or email.");
  }

  if (errors.length) {
    return NextResponse.json({ error: errors[0], errors }, { status: 422 });
  }

  try {
    const resend = new Resend(apiKey);
    const subject = `New inquiry${data.service ? ` — ${data.service}` : ""} from ${data.company || data.name}`;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      replyTo: data.email,
      text: buildContactText(data),
      html: buildContactHtml(data),
    });

    if (error) {
      console.error("Resend send failed:", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (cause) {
    console.error("Contact route error:", cause);
    return NextResponse.json(
      { error: "Something went wrong. Please email us directly." },
      { status: 500 },
    );
  }
}
