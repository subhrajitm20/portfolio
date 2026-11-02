import React from "react";
import { FiBookOpen, FiMapPin } from "react-icons/fi";
import Section, { Reveal } from "./Section";
import { education } from "../data/content";

const Education = () => (
  <Section
    id="education"
    eyebrow="Education"
    title="UC San Diego and IIT Kanpur"
    intro="Electrical engineering foundations with a machine-learning minor, now extended with graduate computer science."
  >
    <div className="grid gap-6 lg:grid-cols-2">
      {education.map((school, i) => (
        <Reveal key={school.school} delay={i * 80} as="article" className="card flex flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-400/10 text-accent-300 ring-1 ring-accent-400/20">
              <FiBookOpen size={20} />
            </span>
            <span className="text-right font-mono text-[13px] text-slate-400">{school.period}</span>
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-white">{school.school}</h3>
          <p className="mt-1 text-slate-200">{school.degree}</p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
            <FiMapPin size={13} /> {school.location}
          </p>

          {school.highlights.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {school.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-accent-400/25 bg-accent-400/[0.07] px-3 py-1 text-sm text-accent-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          {school.focus && (
            <div className="mt-6 border-t border-white/[0.06] pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Focus areas</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {school.focus.map((area) => (
                  <li key={area} className="rounded-full border border-accent-400/25 bg-accent-400/[0.07] px-2.5 py-1 text-xs font-medium text-accent-200">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 border-t border-white/[0.06] pt-5">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">{school.coursesLabel}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {school.courses.map((course) => (
                <li key={course} className="chip">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Education;
