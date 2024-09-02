"use client";
import { motion } from "framer-motion";
const Mern = () => {
  // const icon = {
  //   hidden: {
  //     pathLength: 0,
  //     fill: "rgba(255, 255, 255, 0)",
  //   },
  //   visible: {
  //     pathLength: 8,
  //     fill: "rgba(255, 255, 255, 1)",
  //     transition: {
  //       duration: 2
  //     }
  //   },
  // };

  const icon = {
    hidden: {
      strokeDasharray: "0 100%",
      strokeDashoffset: 0,
    },
    visible: {
      strokeDasharray: "100% 0",
      strokeDashoffset: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="mt-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="100" height="100">
  <motion.path
    d="M 3 14 L 3 7 L 5 7 L 7 10 L 9 7 L 11 7 L 11 14 L 9 14 L 10 8 L 7 11 L 4 8 L 5 14 M 5 14 L 3 14 M 3 7"
    variants={icon}
    initial="hidden"
    animate="visible"
    stroke="white"
    strokeWidth="0.1"
    fill="none"
  />
</svg>

    </div>
  );
};

export default Mern;
