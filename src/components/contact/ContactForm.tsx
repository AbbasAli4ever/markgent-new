"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { FiAlertCircle, FiArrowUpRight, FiLoader } from "react-icons/fi";
import { SERVICES } from "@/lib/services";
import ServiceSelect from "./ServiceSelect";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "sending">("idle");
  const [error, setError] = useState<string | null>(null);
  // Hidden honeypot: real users leave it empty, bots tend to fill it.
  const [website, setWebsite] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setError(null);
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(result.error ?? "We couldn't send your message. Please try again.");
        setStatus("idle");
        return;
      }

      router.push("/contact/success");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  };

  const sending = status === "sending";

  const fieldClass =
    "mt-2 min-h-11 w-full min-w-0 rounded-[12px] border border-line-strong bg-cream/45 px-4 py-3.5 text-[15px] text-ink outline-none transition focus:border-accent focus:bg-paper focus:ring-3 focus:ring-accent/10";

  return (
    <form onSubmit={submit} className="relative min-w-0 rounded-[22px] border border-line bg-paper p-5 shadow-[0_28px_70px_-42px_rgba(6,45,42,0.38)] sm:p-8 xl:rounded-[28px] xl:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Name <span className="text-accent">*</span>
          <input required autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} className={fieldClass} placeholder="Your name" />
        </label>
        <label className="text-sm font-medium text-ink">
          Business email <span className="text-accent">*</span>
          <input required type="email" autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} className={fieldClass} placeholder="you@company.com" />
        </label>
        <label className="text-sm font-medium text-ink">
          Company
          <input autoComplete="organization" value={form.company} onChange={(event) => update("company", event.target.value)} className={fieldClass} placeholder="Company or store name" />
        </label>
        <label className="text-sm font-medium text-ink">
          Phone number
          <input type="tel" autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} className={fieldClass} placeholder="Optional" />
        </label>
      </div>

      <ServiceSelect
        label="Service of interest"
        value={form.service}
        onChange={(next) => update("service", next)}
        placeholder="Not sure yet"
        options={[
          { value: "", label: "Not sure yet" },
          ...SERVICES.map((service) => ({ value: service.name, label: service.name })),
        ]}
      />

      <label className="mt-5 block text-sm font-medium text-ink">
        Tell us about your project <span className="text-accent">*</span>
        <textarea required rows={6} value={form.message} onChange={(event) => update("message", event.target.value)} className={`${fieldClass} resize-y`} placeholder="What do you sell, where do you sell it, and what would you like to improve?" />
      </label>

      {/* Honeypot — visually hidden, never announced, ignored by autofill. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
        </label>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[390px] text-xs leading-[1.6] text-muted">
          Your details are sent securely to The Markgent LLC. Do not include passwords, payment card information, or other sensitive data.
        </p>
        <button
          type="submit"
          disabled={sending}
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? "Sending…" : "Send inquiry"}
          {sending ? (
            <FiLoader className="h-4 w-4 motion-safe:animate-spin" />
          ) : (
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          )}
        </button>
      </div>

      {error && (
        <div role="alert" className="mt-5 flex items-start gap-2 rounded-[12px] bg-red-50 px-4 py-3 text-sm text-red-800 ring-1 ring-red-200">
          <FiAlertCircle className="mt-0.5 h-4 w-4 flex-none" />
          <span>{error}</span>
        </div>
      )}
    </form>
  );
}
