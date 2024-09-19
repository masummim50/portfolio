"use client";
import React, { useState } from "react";
import {
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaRegEye,
} from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiFirebaseFill,
} from "react-icons/ri";
import {
  SiMui,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiJsonwebtokens,
  SiMongoose,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";
import { motion } from "framer-motion";
import { SiReactquery } from "react-icons/si";
import { TbLetterZ } from "react-icons/tb";

const frontendskills = [
  {
    title: "html5",
    icon: <FaHtml5 />,
  },
  {
    title: "css3",
    icon: <FaCss3Alt />,
  },
  {
    title: "bootstrap",
    icon: <FaBootstrap />,
  },
  {
    title: "tailwindcss",
    icon: <RiTailwindCssFill />,
  },
  {
    title: "react",
    icon: <FaReact />,
  },
  {
    title: "nextjs",
    icon: <RiNextjsFill />,
  },
  {
    title: "redux toolkit",
    icon: <SiRedux />,
  },
  {
    title: "javascript",
    icon: <IoLogoJavascript />,
  },
  {
    title: "typescript",
    icon: <SiTypescript />,
  },
  {
    title: "firebase authentication",
    icon: <RiFirebaseFill />,
  },
  {
    title: "React Query",
    icon: <SiReactquery />,
  },
  {
    title: "Zustand",
    icon: <TbLetterZ />,
  },
];
// const backendskills = ["NODE.JS", "EXPRESS", "MONGODB", "FIREBASE", "HEROKU"];
const backendskills = [
  {
    title: "nodejs",
    icon: <FaNodeJs />,
  },
  {
    title: "expressjs",
    icon: <SiExpress />,
  },
  {
    title: "mongodb",
    icon: <SiMongodb />,
  },
  {
    title: "mongoose",
    icon: <SiMongoose />,
  },
  {
    title: "prisma ORM",
    icon: <SiPrisma />,
  },
  {
    title: "jwt authentication",
    icon: <SiJsonwebtokens />,
  },
  {
    title: "graphql - apollo client",
    icon: <GrGraphQl />,
  },
];
const SkillSets = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger duration for children
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 2000 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };

  const [secondAnimation, setSecondAnimation] = useState(false);

  const handleFirstAnimationComplete = () => {
    setSecondAnimation(true); // Trigger second animation when the first set is done
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        onAnimationComplete={handleFirstAnimationComplete}
        className="mb-2 flex flex-wrap gap-1"
      >
        {frontendskills.map((skill, i) => (
          <motion.span
            variants={childVariants}
            key={i}
            className="flex gap-1 bg-cyan-800 rounded-md items-center px-2 text-lg font-extralight"
          >
            {skill.title} {skill.icon}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        initial="hidden"
        animate={secondAnimation ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-2 flex flex-wrap gap-1 mt-5"
      >
        {backendskills.map((skill, i) => (
          <motion.span
            variants={childVariants}
            key={i}
            className="flex gap-1 bg-cyan-800 rounded-md items-center px-2 text-lg font-extralight"
          >
            {skill.title} {skill.icon}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillSets;
