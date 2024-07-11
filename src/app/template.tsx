"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const HomePageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ scale:0.4, opacity: 0 }}
      animate={{ scale:1, opacity: 100 }}
      transition={{ ease: "easeInOut", duration: 0.30 }}
    >
      {children}
    </motion.div>
  );
};

export default HomePageTransition;
