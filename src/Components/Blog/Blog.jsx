import { motion } from 'framer-motion';
import React from 'react';

import Typewriter from 'typewriter-effect';

const Blog = () => {
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      <div style={{minHeight:'100vh', marginTop:'-56px'}} className="container d-flex align-items-center justify-content-center">
        <h2 className="brand-text">
        <Typewriter
              options={{
              strings: ['Coming Soon...'],
              autoStart: true,
              pauseFor:500000,
              loop:true
              }}
            />
        </h2>
      </div>


    </motion.div>
  );
};

export default Blog;