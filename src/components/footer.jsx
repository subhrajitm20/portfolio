import React from "react";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/content";

const Footer = () => (
  <footer className="border-t border-white/[0.06]">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-10 text-sm text-slate-500 sm:flex-row sm:px-6">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
      <div className="flex items-center gap-5">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
          <FiGithub size={18} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
          <FiLinkedin size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-white">
          <FiMail size={18} />
        </a>
        <a href="#top" className="ml-2 flex items-center gap-1.5 transition hover:text-white">
          Back to top <FiArrowUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
