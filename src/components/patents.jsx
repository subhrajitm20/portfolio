import React from "react";
import Section, { Reveal } from "./Section";
import { patentAreas, patents } from "../data/content";

const Patents = () => {
  const counts = patents.reduce((acc, { area }) => ({ ...acc, [area]: (acc[area] || 0) + 1 }), {});

  return (
    <Section
      id="patents"
      eyebrow="Patents"
      title={`${patents.length} filed patents in neural video coding`}
      intro="Filed with Samsung Research, two of them as first inventor. They cover the two coding tools I spent the most time on: intra prediction and in-loop filtering."
      className="border-t border-white/[0.05] bg-ink-950/40"
    >
      <Reveal className="mb-6 flex flex-wrap gap-2">
        {Object.entries(patentAreas).map(([key, { label, className }]) => (
          <span key={key} className={`rounded-full border px-3 py-1 text-xs font-medium ${className}`}>
            {label} · {counts[key] || 0}
          </span>
        ))}
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {patents.map((patent, i) => {
          const area = patentAreas[patent.area];
          return (
            <Reveal
              key={patent.title}
              as="article"
              delay={(i % 2) * 80}
              className="card flex flex-col p-6 transition-colors hover:border-white/[0.14]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${area.className}`}>
                  {area.label}
                </span>
                <span className="font-mono text-xs text-slate-500">
                  {String(i + 1).padStart(2, "0")} · Filed
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-white">{patent.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{patent.description}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Patents;
