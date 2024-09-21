"use client";
import React, { useState, useEffect } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

const BottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale:0 }}
          animate={{ opacity: 1, scale: 1}}
          exit={{ opacity: 0,scale:0 }}
          transition={{ duration: 0.3 }}
          onClick={handleScrollToTop}
          className="fixed bottom-5 right-5"
        >
          <FaCircleArrowUp className='text-orange-500' size={46} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BottomButton;
