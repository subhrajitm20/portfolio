import React from "react";
import { FiAward, FiUsers } from "react-icons/fi";
import Section, { Reveal } from "./Section";
import { honors, leadership } from "../data/content";

const ColumnHeading = ({ icon: Icon, children }) => (
  <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-white">
    <Icon className="text-accent-300" /> {children}
  </h3>
);

const Recognition = () => (
  <Section
    id="recognition"
    eyebrow="Recognition & leadership"
    title="Awards, leadership and mentoring"
    className="border-t border-white/[0.05] bg-ink-950/40"
  >
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <ColumnHeading icon={FiAward}>Honors & awards</ColumnHeading>
        <ul className="mt-6 space-y-1">
          {honors.map(({ title, meta }) => (
            <li key={title} className="flex gap-4 rounded-xl px-3 py-3 transition hover:bg-white/[0.03]">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300/80" />
              <span>
                <span className="block font-medium text-slate-100">{title}</span>
                <span className="mt-0.5 block text-sm text-slate-500">{meta}</span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={100}>
        <ColumnHeading icon={FiUsers}>Leadership & mentoring</ColumnHeading>
        <ol className="relative mt-6 space-y-7 border-l border-white/10 pl-6">
          {leadership.map(({ role, org, period, description }) => (
            <li key={role} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink-900 bg-accent-400"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-medium text-slate-100">{role}</p>
                <p className="font-mono text-xs text-slate-500">{period}</p>
              </div>
              <p className="text-sm text-accent-300/80">{org}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{description}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  </Section>
);

export default Recognition;
