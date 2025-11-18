import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-blue-900 to-black text-white mobile-gap"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline">
            About
          </p>

          {/* Tagline */}
          <div className="mt-2 mb-6">
            <p className="text-2xl italic text-gray-300">
              “Turning pixels into intelligence.”
            </p>
          </div>
        </div>

        <p className="text-xl mt-2">
          Hello, I'm Subhrajit Mishra - an AI and systems engineer passionate about
          building intelligent, high-performance visual systems. I completed my Bachelor's 
          in Electrical Engineering from IIT Kanpur in 2024 and currently work at Samsung 
          Research, where I focus on Neural network based video compression
          and low-latency compression pipelines.
        </p>

        <br />

        <p className="text-xl">
          I completed my schooling at DAV Public School, Bhubaneswar, Odisha after which I moved to Kota, 
          Rajasthan for my high schooling
          and preparing for one of the toughest exams, the JEE Advanced. I got an admit in the prestigious 
          Indian Institute of Technology, Kanpur in 2020 and began the most exciting phase of my life.
        </p>

        <br />

        <p className="text-xl">
          During my undergraduate, I got an opportunity to join the Aerial robotics team of IIT Kanpur. That was the first time I used 
          computer vision for autonomous drones. Since then, I’ve explored Artificial Intelligence, shaping
          a unique blend of deep learning and real-time automation usecases.
        </p>

        <br />

        <p className="text-xl">
          By now, I’ve engineered and optimized video processing pipelines, integrated
          experimental codecs with FFmpeg, designed neural loop filters & neural Intra prediction, and
          built models that push efficiency and visual quality forward.
          I aim to further build systems that are fast, intelligent, and accessible.
          Whether it’s efficient systems or the next era of 
          machine perception, I love working at the edge of innovation.
        </p>

      </div>
    </div>
  );
};

export default About;
