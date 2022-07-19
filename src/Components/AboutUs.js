import React from "react";
import user from "./Utils/Team";
import { motion } from "framer-motion";
import ProfileHelper from "./Utils/ProfileHelper";
const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full mx-auto flex flex-col md:flex-row min-h-[750px]"
    >
      <div className="mx-auto lg:mx-[10rem] flex flex-col  max-w-[25rem] ">
        <h1 className="m-5 text-[4rem] text-teal-800 font-bold text-center">
          MEET OUR TEAM
        </h1>
        <p className="m-4 text-justify italic text-2 indent-7">
          In any industry where the people behind a company are as important as
          the company itself, you’re likely to find a kind of expanded “about”
          page that includes information on individual employees. “Meet the
          Team” pages are popular among web design and other creative firms, but
          are also found on sites within various other industries. These pages
          are a valuable addition to any site where human contact is an
          important part of the industry. It adds a personal touch to the
          company and can lend trust to visitors.{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-wrap lg:flex-row  lg:space-x-10 overflow-hidden">
        {user.map((item, index) => (
          <ProfileHelper
            key={index}
            class=" w-[20rem] h-[10rem] "
            value={item}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AboutUs;
