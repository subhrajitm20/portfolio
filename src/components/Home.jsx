import React from "react";
import { FiArrowRight, FiArrowUpRight, FiAward, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import QuadtreeBackdrop from "./QuadtreeBackdrop";
import { profile, stats } from "../data/content";

const Portrait = () => (
  <div className="relative mx-auto w-52 sm:w-64 lg:w-full lg:max-w-[330px]">
    <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-accent-500/15 blur-3xl" />
    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#24324a] via-[#172133] to-[#0f1520] shadow-2xl shadow-black/50">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(79,210,240,0.28),transparent_62%)]"
      />
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        className="absolute bottom-0 left-1/2 w-[132%] max-w-none -translate-x-1/2"
      />
    </div>
    <div className="absolute -left-6 bottom-8 hidden items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/85 px-4 py-3 shadow-xl backdrop-blur-md sm:flex">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300">
        <FiAward size={18} />
      </span>
      <span>
        <span className="block font-display text-lg font-semibold leading-none text-white">8 patents</span>
        <span className="mt-1 block text-xs text-slate-400">filed at Samsung Research</span>
      </span>
    </div>
  </div>
);

const Home = () => (
  <section id="top" className="relative overflow-hidden">
    <QuadtreeBackdrop className="absolute inset-0" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-900"
    />

    <div className="relative mx-auto max-w-6xl px-4 pb-4 pt-28 sm:px-6 sm:pt-36 lg:pb-8 lg:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        <div className="order-last lg:order-first">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-accent-400/25 bg-accent-400/[0.07] px-3 py-1.5 font-mono text-xs text-accent-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            {profile.availability}
          </p>

          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-sm text-slate-400">{profile.eyebrow}</p>

          <p className="mt-6 max-w-2xl text-xl leading-snug text-slate-100 sm:text-2xl">{profile.headline}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate-400 sm:text-lg">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#experience" className="btn-primary group">
              See my work
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Resume <FiArrowUpRight />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white">
              <FiGithub size={17} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white">
              <FiLinkedin size={17} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition hover:text-white">
              <FiMail size={17} /> {profile.email}
            </a>
            <span className="flex items-center gap-2">
              <FiMapPin size={17} /> {profile.location}
            </span>
          </div>
        </div>

        <Portrait />
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:mt-20 lg:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col bg-ink-900/90 px-5 py-6 backdrop-blur sm:px-6">
            <dt className="order-2 mt-2 text-sm leading-snug text-slate-400">{label}</dt>
            <dd className="order-1 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Home;
