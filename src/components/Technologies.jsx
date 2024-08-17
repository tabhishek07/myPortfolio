import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10},
  animate: {
    y:[10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },

})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
      whileInView={{opacity:1, y: 0}}
      initial={{y: -100, opacity: 0}}
      transition={{duration: 1.5}}
      className="my-16 text-center text-3xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1, x: 0}}
      initial={{x: -100, opacity: 1}}
      transition={{duration: 1.5}}

      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVarients(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaReact className="text-6xl text-cyan-500"/>
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <SiExpress  className="text-6xl" text-/>
        </motion.div>
        <motion.div
        variants={iconVarients(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaHtml5 className="text-6xl text-orange-700"  />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <FaCss3  className="text-6xl text-blue-500"/>
        </motion.div>
        <motion.div
        variants={iconVarients(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <RiTailwindCssFill  className="text-6xl text-cyan-400"/>
        </motion.div>
        <motion.div
        variants={iconVarients(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <RiJavascriptFill  className="text-6xl bg-yellow-500 rounded-md" />
        </motion.div>
        <motion.div
        variants={iconVarients(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <BiLogoMongodb  className="text-6xl text-green-400"/>
        </motion.div>
        <motion.div
        variants={iconVarients(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
          <SiMysql  className="text-6xl text-cyan-500"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
