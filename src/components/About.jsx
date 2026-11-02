import React from "react";
import Section, { Reveal } from "./Section";
import { about } from "../data/content";

const About = () => (
  <Section id="about" eyebrow="About" title={about.tagline}>
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <Reveal className="space-y-5 text-lg leading-relaxed text-slate-300">
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </Reveal>

      <Reveal delay={120} className="card self-start p-6 sm:p-7">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">At a glance</p>
        <dl className="mt-4 divide-y divide-white/[0.06]">
          {about.facts.map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[96px_1fr] gap-4 py-3.5 text-sm">
              <dt className="text-slate-500">{label}</dt>
              <dd className="text-slate-200">{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </Section>
);

export default About;
