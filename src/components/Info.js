import React from "react";
import profile from "../img/profile.jpg";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

const Info = () => {
  return (
    <div className="w-full">
      <img
        className="mb-3 w-[400px] rounded-lg"
        src={profile}
        alt="jieun exploring nature"
      />

      <h3 className="text-white font-bold text-2xl text-center">Jieun Chung</h3>
      <h5 className="text-white text-md text-center">Frontend Developer</h5>
      <a
        className="text-[#6a80a5] text-sm text-center block"
        href="https://chungjieun.com"
        target="_blank"
        rel="noreferrer"
      >
        chungjieun.com
      </a>

      {/* buttons */}
      <div className="flex items-center justify-center my-3">
        <a
          className="border-2 bg-white px-4 py-1 border-white rounded-lg mx-2 text-sm"
          href="mailto:jieunchung2@gmail.com"
          rel="noreferrer"
        >
          <AiOutlineMail className="inline mr-1 text-lg" />
          Email
        </a>

        <a
          className="border-2 bg-blue-400 px-4 py-1 border-blue-400 rounded-lg text-white mx-2 text-sm"
          href="https://www.linkedin.com/in/jieun-chung-82155924b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin className="inline mr-1 text-xl" />
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Info;
