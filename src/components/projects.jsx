import React from "react";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import Section, { Reveal } from "./Section";
import { moreProjects, projects } from "../data/content";

const ProjectCard = ({ title, context, period, badge, image, description, tags, links }) => (
  <article className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-white/[0.14]">
    <div className="relative aspect-[16/9] overflow-hidden bg-white">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      {badge && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink-900/85 px-3 py-1 text-xs font-semibold text-amber-200 ring-1 ring-amber-200/30 backdrop-blur">
          <FiAward /> {badge}
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <p className="font-mono text-xs text-slate-500">{period}</p>
      <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-1 text-sm text-accent-300/90">{context}</p>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-400">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-5 border-t border-white/[0.06] pt-4">
        {links.map(({ label, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-link">
            {label} <FiArrowUpRight />
          </a>
        ))}
      </div>
    </div>
  </article>
);

const Projects = () => (
  <Section
    id="projects"
    eyebrow="Projects"
    title="Selected projects"
    intro="Research and competition work from IIT Kanpur, spanning multimodal learning, reinforcement learning, robotics and classical ML."
  >
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, i) => (
        <Reveal key={project.title} delay={(i % 2) * 80}>
          <ProjectCard {...project} />
        </Reveal>
      ))}
    </div>

    <Reveal className="mt-14">
      <h3 className="font-display text-lg font-semibold text-white">More projects</h3>
      <ul className="mt-4 divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {moreProjects.map(({ title, description, period, href }) => (
          <li key={title}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1 py-4 sm:grid-cols-[220px_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-medium text-slate-100 transition group-hover:text-accent-300">{title}</span>
              <span className="text-sm leading-relaxed text-slate-400">{description}</span>
              <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
                {period}
                <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  </Section>
);

export default Projects;
