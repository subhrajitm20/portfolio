import React from "react";

const Patents = () => {
  const items = [
    {
      title: "Methods and system for AI-based pixel-block prediction for video codec",
      description:
        "Developed a unified, low-complex neural network architecture for intra prediction, which leverages neighboring reference lines to predict coding units (CUs) and is optimized for efficient hardware implementation.",
    },
    {
      title:
        "Inverted-L-Scan Method for AI-based Intra-frame prediction in video codec",
      description:
        "Developed a pre- and post-processing method utilizing an inverted L-scan order to prepare neighboring pixels for a unified AI-based intra prediction model within a post-VVC codec, resulting in enhanced coding efficiency.",
    },
    {
      title:
        "Neural network Filtering of ITU-T specified reference pixels prior to Intra prediction",
      description:
        "Developed a novel neural network–based filtering and mixing of available input pixels prior to Intra prediction, resulting in better prediction of pixels, thus improving compression rates.",
    },
    {
      title: "Content-based neural network loop filter for advanced enhancement",
      description:
        "Created a content-based switching of ultra-low-complex neural network architectures to focus on improving specific content-based artifacts, reducing generalization by a single neural network.",
    },
  ];

  return (
    <div
      name="Patents"
      className="w-full min-h-screen bg-gradient-to-b from-blue-900 to-black text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col">
        {/* Heading */}
        <div className="pb-6">
          <p className="text-4xl font-bold inline">Patents</p>
        </div>

        {/* Sub-heading */}
        <p className="text-lg text-gray-300 mb-10">
          These patents have been filed in affiliation with Samsung Research.
        </p>

        {/* Patent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg 
                         transition-transform duration-300 hover:scale-[1.03] cursor-default"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patents;
