"use client";
import React, { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";

const Technologies = (props: { techs: string[] , stagger?:number, delay?:number}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: props.stagger || 0.2,
        delay: props.delay || 0, // Stagger duration
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, },
    

  };
  return (
    <motion.div
    ref={ref}
      variants={containerVariants}
      initial="hidden"
      
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-wrap gap-2 overflow-x-hidden"
    >
      {props.techs.map((tech, i) => (
        <motion.span
          variants={childVariants}
          key={i}
          className=" border px-2 border-cyan-800 rounded-md  font-extralight"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Technologies;
