import React from "react";
import eversana from "../assets/portfolio/eversana6.png";
import samsung from "../assets/portfolio/samsung.jpg";

const Experience = () => {
  const Experiences = [
    {
      id: 1,
      title: "Samsung Research",
      src: samsung,
      link: "https://research.samsung.com/sri-b",
      description:
        "Advanced Engineer in Visual Intelligence Team — Focused on next-generation video codecs, neural loop filters, Neural network based Intra prediction, FFmpeg integration, and low-latency video compression pipelines.",
      pptText: "REPORT",
      docText: "CODE",
      docLink:
        "https://github.com/AerialRobotics-IITK/inter_iit_uav_guided_ugv/blob/main/MP_DR_T10_MID.pdf",
      pptLink: "https://github.com/AerialRobotics-IITK/inter_iit_uav_guided_ugv",
    },
    {
      id: 2,
      title: "EVERSANA (Internship)",
      src: eversana,
      link: "https://www.eversana.com/",
      description:
        "Intern, Digital & Data Solutions — worked on data-driven tools and automation to support digital healthcare workflows. Contributed to analysis, tooling, and prototype implementations that improved operational workflows.",
      pptText: "PPT",
      docText: "TOOL",
      docLink:
        "https://docs.google.com/document/d/1DrWs7rwFmNBb0Nu4jLkKuYiSGhbo5dwDiSgskTSHohE/edit",
      pptLink: "https://github.com/subhrajitm20/EVERSANA_intern",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-black to-blue-900 w-full text-white md:h-screen mobile-gap"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">Experience</p>
        </div>

        <div className="flex flex-col gap-12">
          {Experiences.map((exp, idx) => {
            const isEven = idx % 2 === 1; // alternate layout
            return (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row ${
                  isEven ? "md:flex-row-reverse" : ""
                } items-center gap-6`}
              >
                {/* Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={exp.src}
                      alt={exp.title}
                      className="rounded-lg shadow-lg w-full h-48 md:h-44 object-contain bg-white/5 p-4
                                transform transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                </div>
                {/* Text */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray-200 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={exp.pptLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="px-5 py-2 rounded-md border border-white/20 hover:scale-105 duration-150">
                        {exp.pptText}
                      </button>
                    </a>

                    <a
                      href={exp.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="px-5 py-2 rounded-md border border-white/20 hover:scale-105 duration-150">
                        {exp.docText}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
