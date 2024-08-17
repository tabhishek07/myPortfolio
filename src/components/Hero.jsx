import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  initial: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border border-neutral-900 pb-0 lg:mb-35">
      <div className="flex   flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="initial"
              animate="visible"
              className="pb-10 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Abhishek Tiwari
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="initial"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl  tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="initial"
            animate="visible"
            className="my-2 max-w-xl py-6 tracking-tighter text-[14.5px]">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center">
            <motion.img
            initial={{x: 100, opacity: 0}}
            animate= {{x: 0, opacity: 1}}
            transition={{duration:1, delay:1.2}}

            src={profilePic} alt="profilePic " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
