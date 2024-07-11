import { faDesktop, faDownload, faEye, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import bg from '../images/bg.jpg'

const AboutMe = () => {
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
    <div className="container pb-5">
      <div className="row">
        <h1 className="brand-text mb-5">About Me</h1>
        <div className="col-md-8">
          <h2 className="text-white mb-3">Frontend Web Developer</h2>
          <p className="text-white">
            Hard working professional with proven critical thinking, good communication and
            multitasking skills. Aiming to leverage my abilities to successfully deliver your desired product. Developer with knowledge about backend technology that allows me to create dynamic and a fully functional website. <br/><br/>
            I am able to do front end work such as PSD to HTML, Sketch to html with proper responsiveness. <br/><br/>
            Focused on responsive design to improve user experience. Able to pick up new related technology and use them for my work. 
          </p>
        </div>
        <div className="col-md-4">
          <h4 className="mb-4">Personal Information</h4>
          <p><span className="brand-text">Name: </span>Md. Masum Billah</p>
          <p><span className="brand-text">Age: </span>24</p>
          <p><span className="brand-text">Address: </span>Jessore, Khulna, Bangladesh</p>
          <p><span className="brand-text">Email: </span>masummim50@gmail.com</p>
          <a target="_blank" href="https://drive.google.com/u/0/uc?id=1Iog7pdvkCA3HFp0iDyczZ5wP5zd2G-3q&export=download">
          <button className="btn brand-btn mt-5">Download Resume <span><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></span></button>
          </a>
        </div>
      </div>
        <h3 className="text-center mt-5">Services</h3>
      <div className="row mt-5 text-center mb-5">
        <div className="col-md-4">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faDesktop}></FontAwesomeIcon>
            <h4>Web Development</h4>
            <p>
              I can build fully functional dynamic and single page application with google authentication and database operations
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faMobile}></FontAwesomeIcon>
            <h4>Web Design</h4>
            <p>
              I can design any website, such as Portfolio website, Ecommerce, Blogs, Landing pages etc 
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faEye}></FontAwesomeIcon>
            <h4>Responsive Design</h4>
            <p>
              I can develop fully responsive websites that meets the satisfaction of users with various devices
            </p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default AboutMe;