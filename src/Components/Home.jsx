import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      
      <div style={{height:'100vh', marginTop:'-56px'}}>
        <div className="home-content-container h-100 d-flex flex-column align-items-center justify-content-center">
          <h1>Hi,</h1>
          <h1>I Am Masum, a</h1>
          <h1>
            <span className="brand-text">
            <Typewriter
              options={{
              strings: ['Web Developer', 'Web Designer', 'React Developer'],
              autoStart: true,
              loop: true,
              deleteSpeed:25,
              delay:50
              }}
            />
            </span>
          </h1>
          <div className="social-links mt-">
            <button className="btn btn-dark m-3"><a target="_blank" href="https://github.com/masummim50">Github <span><FontAwesomeIcon className="homeicon" icon={faGithub}></FontAwesomeIcon></span></a></button>
            <button className="btn btn-primary m-3"><a target="_blank" href="https://www.linkedin.com/in/masum-billah-65709a146/">Linkedin <span><FontAwesomeIcon className="homeicon" icon={faLinkedin}></FontAwesomeIcon></span></a></button>
          </div>
          <a target="_blank" href="https://drive.google.com/u/0/uc?id=1Iog7pdvkCA3HFp0iDyczZ5wP5zd2G-3q&export=download"><button className="btn brand-btn">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button></a>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Home;