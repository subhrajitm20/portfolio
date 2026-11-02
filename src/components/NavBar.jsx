import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/content";

const Logo = () => (
  <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="#151b28" />
    <g fill="#4fd2f0">
      <rect x="11" y="11" width="20" height="20" rx="3" fillOpacity="0.95" />
      <rect x="33" y="11" width="9" height="9" rx="2" fillOpacity="0.3" />
      <rect x="44" y="11" width="9" height="9" rx="2" fill="#fff" />
      <rect x="33" y="22" width="9" height="9" rx="2" fillOpacity="0.55" />
      <rect x="44" y="22" width="9" height="9" rx="2" fillOpacity="0.3" />
      <rect x="11" y="33" width="20" height="20" rx="3" fillOpacity="0.35" />
      <rect x="33" y="33" width="20" height="20" rx="3" fillOpacity="0.65" />
    </g>
  </svg>
);

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for whichever section sits in the middle of the viewport.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-white/[0.06] bg-ink-900/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo />
          <span className="font-display text-[15px] font-semibold tracking-tight text-white">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                active === id ? "bg-white/[0.06] text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost ml-3 py-2">
            Resume <FiArrowUpRight />
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 text-slate-300 hover:text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/[0.06] px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/[0.05] py-3.5 font-display text-lg text-slate-200 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 w-full"
          >
            View resume <FiArrowUpRight />
          </a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
