import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* @HERO CONTAINER */}
      {/* w-full min-h-[${window.innerHeight}px] xl:space-x-[10rem]  relative flex flex-col md:flex-row mx-auto text-gray-700 shadow-md overflow-hidden */}
      <div
        className={`w-full min-h-[${window.innerHeight}px]   relative flex flex-wrap  text-gray-700 shadow-md overflow-hidden`}
      >
        {/* @DESCRIPTION */}
        <div className="basis-[400px] max-w-[400px] mx-20 font-bold xl:ml-[20rem]">
          <h1 className="text-[6rem]">Web Design</h1>
          <p className="text-[1.5rem] tracking-[.7rem] font-bold">
            LANDING PAGE
          </p>

          <p className="mt-10 text-justify indent-3">
            Web design refers to the design of websites that are displayed on
            the internet. It usually refers to the user experience aspects of
            website development rather than software development. Web design
            used to be focused on designing websites for desktop browsers;
            however, since the mid-2010s, design for mobile and tablet browsers
            has become ever-increasingly important.
          </p>
          <div className="btn m-3 flex  justify-center align-center rounded-full bg-slate-800 max-w-[9rem] text-white p-2 hover:bg-slate-900 hover:cursor-pointer ">
            {" "}
            LEARN MORE{" "}
          </div>
          {/* SOCMED CONTAINER */}
          <div className="my-[2rem]  flex flex-row space-x-3">
            <FaFacebookF className="text-bg-slate-800 w-8 h-8 hover:h9 hover:w-9 hover:text-bg-slate-900 hover:cursor-pointer " />
            <FaTwitter className="text-bg-slate-800 w-8 h-8 hover:h9 hover:w-9 hover:text-bg-slate-900 hover:cursor-pointer" />
            <FaInstagram className="text-bg-slate-800 w-8 h-8 hover:h9 hover:w-9 hover:text-bg-slate-900 hover:cursor-pointer" />
          </div>
        </div>
        <div className="mx-auto">
          <img
            className="mt-[8rem] md:ml-[100px] m-auto min-w-[150px] w-auto max-w-[510px]"
            src="https://static.vecteezy.com/system/resources/previews/005/962/428/original/illustration-graphic-cartoon-character-of-system-update-vector.jpg"
            alt="woman with a computer"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
