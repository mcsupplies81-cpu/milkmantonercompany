"use client";

import { useState } from "react";

const serviceOptions = [
  "Copier Rental",
  "Copier Lease",
  "Managed Print Services",
  "Toner Delivery",
  "Printer Repair",
  "IT Support",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (submitted) {
    return (
      <div className="border-[1.5px] border-brand-black p-8 text-center">
        <h3 className="font-heading text-lg text-brand-black mb-2">
          Thank you!
        </h3>
        <p className="text-[12px] text-[#555] leading-[1.65]">
          We&apos;ve received your request and will be in touch within one
          business day. For immediate assistance, call us at (916) 253-9804.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send. Please call (916) 253-9804."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-medium text-brand-black mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border-[1.5px] border-brand-black px-3 py-2.5 text-[12px] text-brand-black bg-white focus:outline-none focus:border-brand-mid"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium text-brand-black mb-1">
            Company
          </label>
          <input
            type="text"
            name="company"
            className="w-full border-[1.5px] border-brand-black px-3 py-2.5 text-[12px] text-brand-black bg-white focus:outline-none focus:border-brand-mid"
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-medium text-brand-black mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border-[1.5px] border-brand-black px-3 py-2.5 text-[12px] text-brand-black bg-white focus:outline-none focus:border-brand-mid"
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label className="block text-[11px] font-medium text-brand-black mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border-[1.5px] border-brand-black px-3 py-2.5 text-[12px] text-brand-black bg-white focus:outline-none focus:border-brand-mid"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-medium text-brand-black mb-1">
          Service needed
        </label>
        <select
          name="service"
          className="w-full border-[1.5px] border-brand-black px-3 py-2.5 text-[12px] text-brand-black bg-white focus:outline-none focus:border-brand-mid"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[11px] font-medium text-brand-black mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full border-[1.5px] border-brand-black px-3 py-2.5 text-[12px] text-brand-black bg-white focus:outline-none focus:border-brand-mid resize-none"
          placeholder="Tell us about your office needs..."
        />
      </div>

      {error && (
        <p className="text-[12px] text-red-600 border border-red-200 bg-red-50 px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-black text-white text-[12px] py-3 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Submit request"}
      </button>

      <p className="text-[10px] text-[#999] text-center">
        We&apos;ll respond within one business day. No spam, no pressure.
      </p>
    </form>
  );
}
