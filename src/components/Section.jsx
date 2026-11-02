import React, { useEffect, useRef, useState } from "react";

// Fades its children in the first time they scroll into view.
export const Reveal = ({ as: Tag = "div", className = "", delay = 0, children, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

const Section = ({ id, eyebrow, title, intro, className = "", children }) => (
  <section id={id} className={`scroll-mt-16 py-20 sm:py-28 ${className}`}>
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal className="max-w-3xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-400">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{intro}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </div>
  </section>
);

export default Section;
