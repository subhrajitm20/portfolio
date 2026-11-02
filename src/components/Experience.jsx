import React from "react";
import { FiArrowUpRight, FiAward, FiMapPin } from "react-icons/fi";
import Section, { Reveal } from "./Section";
import { experience } from "../data/content";

const Tags = ({ items }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.map((tag) => (
      <li key={tag} className="chip">
        {tag}
      </li>
    ))}
  </ul>
);

const Links = ({ items }) => (
  <div className="flex flex-wrap gap-x-5 gap-y-2">
    {items.map(({ label, href }) => (
      <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-link">
        {label} <FiArrowUpRight />
      </a>
    ))}
  </div>
);

const Workstream = ({ title, metric, description, tags, links }) => (
  <div className="flex flex-col rounded-xl border border-white/[0.06] bg-ink-800/70 p-5 transition hover:border-white/[0.12] sm:p-6">
    <h4 className="font-display text-lg font-semibold text-white">{title}</h4>
    <p className="mt-1.5 font-mono text-[13px] text-accent-300">{metric}</p>
    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-400">{description}</p>
    <div className="mt-5">
      <Tags items={tags} />
    </div>
    {links && (
      <div className="mt-4">
        <Links items={links} />
      </div>
    )}
  </div>
);

const Job = ({ job }) => (
  <article className="card overflow-hidden">
    <div className="flex flex-col gap-5 border-b border-white/[0.06] p-6 sm:p-8 md:flex-row md:items-start md:justify-between">
      <div className="flex items-start gap-5">
        <div
          className={`flex h-14 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10 ${job.logoClass}`}
        >
          <img src={job.logo} alt={`${job.company} logo`} className="max-h-full w-full object-contain" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">{job.company}</h3>
          <p className="mt-1 text-slate-200">
            {job.role} <span className="text-slate-500">·</span> {job.team}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px] text-slate-400 md:flex-col md:items-end md:gap-1.5">
        <span className="text-slate-200">{job.period}</span>
        <span className="flex items-center gap-1.5">
          <FiMapPin size={13} /> {job.location}
        </span>
        <span className="chip md:mt-1">{job.type}</span>
      </div>
    </div>

    <div className="p-6 sm:p-8">
      <p className="max-w-3xl leading-relaxed text-slate-300 sm:text-lg">{job.summary}</p>

      {job.workstreams && (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {job.workstreams.map((ws) => (
            <Workstream key={ws.title} {...ws} />
          ))}
        </div>
      )}

      {job.bullets && (
        <ul className="mt-6 max-w-3xl space-y-3">
          {job.bullets.map((text) => (
            <li key={text} className="flex gap-3 leading-relaxed text-slate-400">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
              {text}
            </li>
          ))}
        </ul>
      )}

      {job.recognition && (
        <div className="mt-8 rounded-xl border border-amber-300/15 bg-amber-300/[0.04] p-5">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-amber-200/80">
            <FiAward /> Recognition
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {job.recognition.map((item) => (
              <li
                key={item}
                className="rounded-full border border-amber-200/15 bg-amber-200/[0.06] px-3 py-1 text-sm text-amber-50/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(job.tags || job.links) && (
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {job.tags && <Tags items={job.tags} />}
          {job.links && <Links items={job.links} />}
        </div>
      )}
    </div>
  </article>
);

const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="From neural-network research to production codec engineering"
    intro="Most of my industry work has been at Samsung Research, building compression tools that have to be both state-of-the-art and cheap enough to run in hardware."
  >
    <div className="space-y-8">
      {experience.map((job) => (
        <Reveal key={job.company}>
          <Job job={job} />
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Experience;
