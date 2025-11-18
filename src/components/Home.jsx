import React from "react";
import HeroImage from "../assets/cropped_sjm.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-blue-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Subhrajit Mishra
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          B.Tech Electrical Engineering, IIT Kanpur '24 <br></br>
          AI Visual processing | Samsung Research <br></br>
          {/* Enthusiast of Computer Vision, Robotics, Video Compression<br></br> */}
          {/* Co-ordinator <a href="https://aryanraj4049.github.io/club-website-master-2/" target="Blank">@IITK Aeromodelling Club</a>, Team Member <a href="https://www.iitk.ac.in/ame/sae/" target="Blank" >@IITK Motorsports</a>, Interned <a href="https://en.wikipedia.org/wiki/JSW_Steel" target="Blank">@JSW Steel.</a>  */}
          </p>

          <div>
            <Link
              to="Experience"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-900 to-black cursor-pointer"
            >
              Experience
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img 
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-3/4 transform -translate-y-20 md:translate-y-0" // Changed from w-2/3 md:w-full
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
