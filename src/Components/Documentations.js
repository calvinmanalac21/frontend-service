import React from "react";
import Article from "./Utils/Article";
import { motion } from "framer-motion";
const articles = [
  {
    name: "The Disease of More",
    description:
      "Hedonic treadmills, baselines of happiness, constant dissatisfaction, it’s the disease of more. And we’re all afflicted.",
  },
  {
    name: "7 Strange Questions that Help You Find Your Life Purpose",
    description:
      "The best place to start if you’re questioning what you’re meant to be doing in this world.",
  },
  {
    name: "The Most Important Question of Your Life ",
    description:
      "What is the most important question to be asking yourself? I would argue it’s this.",
  },
  {
    name: "Screw Finding Your Passion ",
    description:
      " Everyone wants to find their passion these days, but what does that really mean?",
  },
  {
    name: "The Disease of More",
    description:
      "Hedonic treadmills, baselines of happiness, constant dissatisfaction, it’s the disease of more. And we’re all afflicted.",
  },
  {
    name: "7 Strange Questions that Help You Find Your Life Purpose",
    description:
      "The best place to start if you’re questioning what you’re meant to be doing in this world.",
  },
  {
    name: "The Most Important Question of Your Life ",
    description:
      "What is the most important question to be asking yourself? I would argue it’s this.",
  },
  {
    name: "Screw Finding Your Passion ",
    description:
      " Everyone wants to find their passion these days, but what does that really mean?",
  },
];
const Documentations = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className={`flex relative space-y-5 flex-col min-h-[750px] min-h-[${window.innerHeight}px]`}
      >
        <h1 className="mx-auto text-teal-600 my-10 hover:cursor-pointer text-[1.8rem] md:text-[2rem] font-bold md:tracking-[1rem]  ">
          {" "}
          DOCUMENTATIONS
        </h1>

        <div className=" flex flex-wrap align-center justify-center ">
          {articles.map((item, index) => {
            return (
              <Article
                key={index}
                value={{
                  title: item.name,
                  description: item.description,
                }}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Documentations;
