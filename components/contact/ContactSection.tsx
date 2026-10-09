"use client";

import { useState } from "react";
import type { ComponentType, FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import SiInstagram from "@icons-pack/react-simple-icons/icons/SiInstagram";
import SiTiktok from "@icons-pack/react-simple-icons/icons/SiTiktok";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/portfolioData";
import type { SocialKey } from "@/types/portfolio";

type Status = "idle" | "sending" | "success" | "error";

const SOCIAL_ICONS: Record<SocialKey, ComponentType<{ size?: number }>> = {
  github: SiGithub,
  instagram: SiInstagram,
  tiktok: SiTiktok,
  linkedin: SiGithub,
  email: Mail,
};

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: keyof typeof form, value: string) =>
    setForm((previous) => ({ ...previous, [field]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    if (!endpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
      window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("message", form.message);
      await fetch(endpoint, { method: "POST", body: data, mode: "no-cors" });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            description="Have a project, an opportunity, or just want to say hi? Drop a message and I'll get back to you as soon as I can."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="right">
            <div className="flex h-full flex-col gap-6 rounded-3xl border-2 border-ink bg-ink p-6 text-sand-50 shadow-brutal sm:p-8">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-ocean-soft">
                  Reach me directly
                </p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="mt-2 block break-all font-display text-lg font-bold underline decoration-ocean underline-offset-4"
                >
                  {profileData.email}
                </a>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-sand-50/70">
                  <MapPin size={16} className="text-ocean-soft" />
                  {profileData.location}
                </p>
              </div>

              <ul className="grid gap-2">
                {profileData.socials
                  .filter((social) => social.key !== "email")
                  .map((social) => {
                    const Icon = SOCIAL_ICONS[social.key];
                    return (
                      <li key={social.key}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-xl border-2 border-sand-50/25 px-4 py-3 text-sm font-semibold transition-colors hover:border-ocean hover:bg-ink"
                        >
                          <span className="grid h-8 w-8 place-items-center rounded-lg border-2 border-sand-50/30">
                            <Icon size={16} />
                          </span>
                          <span>{social.label}</span>
                          <span className="ml-auto font-mono text-xs text-sand-50/60">
                            {social.handle}
                          </span>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-5 rounded-3xl border-2 border-ink bg-sand-50 p-6 shadow-brutal-lg sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Your name
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    placeholder="Jane Doe"
                    className="rounded-xl border-2 border-ink bg-sand-100 px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-ink/40 focus:bg-sand-50"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Your email
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    placeholder="jane@example.com"
                    className="rounded-xl border-2 border-ink bg-sand-100 px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-ink/40 focus:bg-sand-50"
                  />
                </label>
              </div>

              <label className="grid flex-1 gap-2 text-sm font-semibold">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="Tell me about your project or idea..."
                  className="min-h-32 flex-1 resize-y rounded-xl border-2 border-ink bg-sand-100 px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-ink/40 focus:bg-sand-50"
                />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-ocean px-5 py-3 text-sm font-bold text-white shadow-brutal-sm transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                  <Send size={16} />
                </button>

                {status === "success" ? (
                  <p className="text-sm font-semibold text-ocean-dark">
                    Thanks! Your message has been sent.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm font-semibold text-red-600">
                    Something went wrong. Please email me directly.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
