import React from "react";
import { FiCode, FiCpu, FiLayers, FiTool } from "react-icons/fi";
import Section, { Reveal } from "./Section";
import { skills } from "../data/content";

const icons = {
  ml: FiLayers,
  perf: FiCpu,
  code: FiCode,
  tools: FiTool,
};

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title="Technical toolkit"
    intro="Comfortable across the stack: training models in Python, then making them run fast in C and C++."
    className="border-t border-white/[0.05] bg-ink-950/40"
  >
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map(({ group, icon, items }, i) => {
        const Icon = icons[icon];
        return (
          <Reveal key={group} delay={(i % 2) * 80} className="card p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-400/10 text-accent-300 ring-1 ring-accent-400/20">
                <Icon size={19} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{group}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Skills;
