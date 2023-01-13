import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div >
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]">Hüseyin</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I`m developing full-stack projects with react and node. I also have
            knowledge about NoSQL database (Mongo DB). <p> I love doing hobby
            projects and learning new technologies.</p>
                  </p>
                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                          <FaLinkedinIn/>
                      </div>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                          <FaGithub/>
                      </div><div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                          <FaTwitter/> 
                      </div><div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                          <AiOutlineMail/>
                      </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
