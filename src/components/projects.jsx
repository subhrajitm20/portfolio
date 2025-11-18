import React from "react";
import multimodal from "../assets/portfolio/ugp2.png";
import aerial from "../assets/portfolio/drone3.png";
import rl from "../assets/portfolio/rl5.png";
import web3 from "../assets/portfolio/web3.jpg";
import cv2 from "../assets/portfolio/cv3.png";
import ml from "../assets/portfolio/ml4.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: multimodal,
      pptText: "PPT",
      docText: "TOOL",
      docLink: "https://docs.google.com/presentation/d/1w2MyJn9HPaaSV_WUI6EsZbESoax0solTMI4opp406LI/edit?slide=id.p#slide=id.p",
      pptLink: "https://github.com/subhrajitm20/Multimodal-Learning"
    },
    {
      id: 2,
      src: aerial,
      pptText: "REPORT" ,
      docText: "CODE",
      docLink: "https://github.com/AerialRobotics-IITK/inter_iit_uav_guided_ugv/blob/main/MP_DR_T10_MID.pdf",
      pptLink: "https://github.com/AerialRobotics-IITK/inter_iit_uav_guided_ugv"
    },
    {
      id: 3,
      src: rl,
      pptText: "REPORT",
      docText: "CODE",
      docLink: "https://github.com/subhrajitm20/EE675-Reinforcement_Learning",
      pptLink: "https://drive.google.com/drive/folders/1xa2A_B49D1-IBbBvnun66UW_GuToNvaF"
    },
    {
      id: 4,
      src: web3,
      pptText: "CODE",
      docText: "REPORT",
      docLink: "https://onedrive.live.com/edit.aspx?resid=8933FBCD5EEF8F58!539&ithint=file%2cdocx&wdo=2&authkey=!AJ2sWlSdvjLVrio",
      pptLink: "https://github.com/subhrajitm20/Web3.0"
    },
    {
      id: 5,
      src: cv2,
      pptText: "PPT",
      docText: "CODE",
      docLink: "https://github.com/subhrajitm20/EE604-Image-Processing",
      pptLink: "https://github.com/subhrajitm20/EE604-Image-Processing"
    },
    {
      id: 6,
      src: ml,
      pptText: "PPT",
      docText: "CODE",
      docLink: "https://github.com/subhrajitm20/CS771-Assignments",
      pptLink: "https://github.com/subhrajitm20/CS771-Assignments"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-blue-900 w-full text-white md:h-screen mobile-gap"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">
            Projects
          </p>
          {/* <p className="py-6">Check out some of my work right here</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {projects.map(({ id, src, pptText, docText,docLink,pptLink}) => (
          <div key={id} className="shadow-md shadow-white rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105 w-full h-48 object-contain"
            />
            <div className="flex items-center justify-center">
            <a href={pptLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {pptText}
                </button>
              </a>
              <a href={docLink} target="blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {docText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Project;
