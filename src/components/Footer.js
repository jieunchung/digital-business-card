import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiCode } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="text-white mt-14 py-4 bg-[#111319] border-[#111319] rounded-lg flex justify-center items-center gap-3 text-2xl">
      <a href="https://github.com/jieunchung" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        className="bg-white text-[#111319] rounded-full"
        href="https://github.com/jieunchung/digital-business-card"
        target="_blank"
        rel="noreferrer"
      >
        <TiCode />
      </a>
    </div>
  );
};

export default Footer;
