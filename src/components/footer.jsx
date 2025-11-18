import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaGraduationCap } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer id="more" className="bg-gradient-to-b from-blue-900 to-black text-white py-8">
      <div className="flex justify-center items-center mb-6">
        <a
          href="https://www.linkedin.com/in/subhrajit-mishra-a0b851210/"
          className="mr-4"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/subhrajitm20"
          className="mr-4"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a href="mailto:2003subhrajit@gmail.com" className="mr-4">
          <HiOutlineMail size={30} />
        </a>
        <a
          href="https://www.instagram.com/subhrajit_._mishra/"
          className="mr-4"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://drive.google.com/drive/home"
          className="mr-4"
          target="_blank"
          rel="noreferrer"
        >
          <FaGraduationCap size={30} />
        </a>
      </div>
      <div className="text-center">
        <p className="text-sm">
          &copy; 2023-2024 &nbsp; कुछ तो लोग कहेंगे, लोगों का काम है कहना 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
