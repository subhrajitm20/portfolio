import React from "react";

import dsa from "../assets/linux4.png"
import node from "../assets/git4.png";
import javascript from "../assets/python.png";
import rosimg from "../assets/rosjpeg_xl.jpg";
import matlab from "../assets/matlab.jpg";
import bash from "../assets/bash7.png";
import blockchain from "../assets/blockchain.jpg";
import cpp from "../assets/cpp.png"
import sql from "../assets/sql.png"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: cpp,
      title: "CPP",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: javascript,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: dsa,
      title: "Linux",
      style: "shadow-orange-400",
    },
    {
      id: 4,
      src: rosimg,
      title: "Robot Operating System",
      style: "shadow-black",
      imgStyle: "w-20 h-20 sm:w-100 sm:h-24", // <-- larger image for rosimg
    },
    {
      id: 5,
      src: node,
      title: "Git",
      style: "shadow-red-400",
    },
    {
      id: 6,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: blockchain,
      title: "Blockchain",
      style: "shadow-blue-600",
    },

    {
      id: 8,
      src: matlab,
      title: "Matlab",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: bash,
      title: "Bash",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-blue-900 to-black w-full h-screen mobile-gap"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>   
          <br/><br/> 
          <p className="text-4xl font-bold">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center h-36 sm:h-40 p-4 rounded-lg shadow-md hover:scale-105 duration-500 ${style}`}
            >
              <img src={src} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
              <p className="mt-3 text-sm sm:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
