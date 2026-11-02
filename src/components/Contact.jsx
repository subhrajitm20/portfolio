import React, { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiFileText, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import Section, { Reveal } from "./Section";
import { profile } from "../data/content";

const ContactLink = ({ icon: Icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="card group flex items-center gap-4 p-4 transition-colors hover:border-white/[0.16]"
  >
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-slate-300 group-hover:text-white">
      <Icon size={18} />
    </span>
    <span className="min-w-0 flex-1">
      <span className="block text-xs text-slate-500">{label}</span>
      <span className="block truncate text-sm font-medium text-slate-200">{value}</span>
    </span>
    <FiArrowUpRight className="text-slate-500 transition group-hover:text-accent-300" />
  </a>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk."
      intro="I'm open to conversations about roles in machine learning, computer vision and video or ML systems. Email is the fastest way to reach me."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="space-y-3">
          <div className="card flex items-center gap-4 border-accent-400/25 bg-accent-400/[0.05] p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300">
              <FiMail size={18} />
            </span>
            <a href={`mailto:${profile.email}`} className="min-w-0 flex-1">
              <span className="block text-xs text-slate-400">Email</span>
              <span className="block truncate font-medium text-white hover:text-accent-200">{profile.email}</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
              aria-live="polite"
            >
              {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <ContactLink icon={FiLinkedin} label="LinkedIn" value="in/subhrajit-mishra-a0b851210" href={profile.linkedin} />
          <ContactLink icon={FiGithub} label="GitHub" value="subhrajitm20" href={profile.github} />
          <ContactLink icon={FiFileText} label="Resume" value="One-page industry resume (PDF)" href={profile.resume} />
          <ContactLink icon={FiFileText} label="Full CV" value="Detailed academic CV (PDF)" href={profile.cv} />
        </Reveal>

        <Reveal delay={100}>
          <form action={profile.contactFormAction} method="POST" className="card space-y-4 p-6 sm:p-8">
            <p className="font-display text-lg font-semibold text-white">Send a message</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm text-slate-400">Name</span>
                <input type="text" name="name" autoComplete="name" required className="field" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-slate-400">Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="field"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm text-slate-400">Message</span>
              <textarea
                name="message"
                rows="6"
                required
                className="field resize-y"
                placeholder="What would you like to talk about?"
              />
            </label>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send message <FiSend />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
