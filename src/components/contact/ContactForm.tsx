"use client";

import { useState, type FormEvent } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { SERVICES } from "@/lib/services";

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
  const [form, setForm] = useState(INITIAL_FORM);
  const [prepared, setPrepared] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setPrepared(false);
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Project inquiry${form.service ? `: ${form.service}` : ""} — ${form.company || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service: ${form.service || "Not sure yet"}`,
      "",
      "Project details:",
      form.message,
    ].join("\n");

    setPrepared(true);
    window.location.href = `mailto:hello@themarkgent.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass =
    "mt-2 min-h-11 w-full min-w-0 rounded-[12px] border border-line-strong bg-cream/45 px-4 py-3.5 text-[15px] text-ink outline-none transition focus:border-accent focus:bg-paper focus:ring-3 focus:ring-accent/10";

  return (
    <form onSubmit={submit} className="min-w-0 rounded-[22px] border border-line bg-paper p-5 shadow-[0_28px_70px_-42px_rgba(6,45,42,0.38)] sm:p-8 xl:rounded-[28px] xl:p-10">
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

      <label className="mt-5 block text-sm font-medium text-ink">
        Service of interest
        <select value={form.service} onChange={(event) => update("service", event.target.value)} className={fieldClass}>
          <option value="">Not sure yet</option>
          {SERVICES.map((service) => <option key={service.slug} value={service.name}>{service.name}</option>)}
        </select>
      </label>

      <label className="mt-5 block text-sm font-medium text-ink">
        Tell us about your project <span className="text-accent">*</span>
        <textarea required rows={6} value={form.message} onChange={(event) => update("message", event.target.value)} className={`${fieldClass} resize-y`} placeholder="What do you sell, where do you sell it, and what would you like to improve?" />
      </label>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[390px] text-xs leading-[1.6] text-muted">
          Your details are placed into an email to The Markgent LLC. Do not include passwords, payment card information, or other sensitive data.
        </p>
        <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-ink-soft">
          Send inquiry
          <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>

      {prepared && (
        <div role="status" className="mt-5 flex items-center gap-2 rounded-[12px] bg-accent/8 px-4 py-3 text-sm text-ink">
          <FiCheck className="h-4 w-4 text-accent" />
          Your email app should now contain the prepared inquiry.
        </div>
      )}
    </form>
  );
}
