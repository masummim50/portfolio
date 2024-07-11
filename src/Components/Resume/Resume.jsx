import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';

const Resume = () => {
  const frontendskills = ['HTML5', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT.JS', 'REACT ROUTER']
  const backendskills = ['NODE.JS', 'EXPRESS', 'MONGODB', 'FIREBASE', 'HEROKU'];
  const familiar = ['REACT NATIVE', 'PHP', 'WORDPRESS', 'NEXT.JS', 'REDUX']
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      
    </motion.div>
  );
};

export default Resume;