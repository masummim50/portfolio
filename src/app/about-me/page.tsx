import React from "react";
import { FaDownload } from "react-icons/fa";


const services = [
  {
    title: "FrontEnd Development",
    description: "I can develop fully responsive landing page with custom or tailwindcss or any css library. I can integrate provided api in the frontend to create read and update data."
  },
  {
    title: "Rest Api Development",
    description: "I can build fully functional rest api with authentication using tools such as nodejs, express, mongodb, jwt, mongoose etc."
  },
  {
    title: "Full stack Development",
    description: "I can develop fully functional web application with both backend and frontend. See my projects for examples."
  },
]


const AboutMePage = () => {
  return (
    <div className="pb-5">
      <div className="">
        <h1 className="text-cyan-500 mb-5 text-5xl">About Me</h1>
        <div className="flex flex-col md:flex-row gap-2">
            
        <div className="w-[100%] md:w-[70%]">
          <h2 className="text-white mb-3 text-3xl">MERN stack Developer</h2>
          <p className="text-white">
            Hard working professional with proven critical thinking, good
            communication and multitasking skills. Aiming to leverage my
            abilities to successfully deliver your desired product. Developer
            with knowledge about backend technology that allows me to create
            dynamic and a fully functional website. <br />
            <br />
            I am able to do front end work such as PSD to HTML, Sketch to html
            with proper responsiveness. Backend work such as developing a fully functional rest api to fetch create or update data from database.<br />
            <br />
            I love learning new technology and can pick up new related technology fast and use them for my work.
          </p>
        </div>
        <div className="w-[100%] md:w-[30%]">
          <h4 className="mb-4 text-cyan-400 text-xl">Personal Information</h4>
          <p>
            <span className="text-cyan-400">Name: </span>Md. Masum Billah
          </p>
          
          <p>
            <span className="text-cyan-400">Email: </span>masummim50@gmail.com
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/u/0/uc?id=1Iog7pdvkCA3HFp0iDyczZ5wP5zd2G-3q&export=download"
          >
            <button className="border border-cyan-500 hover:bg-cyan-500 transition-all ease-in-out flex items-center gap-1 p-2 rounded-md mt-5">
              Download Resume{" "}
              <span>
                <FaDownload/>
              </span>
            </button>
          </a>
        </div>
        
        </div>
      </div>
      <h3 className="text-center text-cyan-500 text-5xl mt-5">Services</h3>
      <div className="flex flex-wrap md:flex-nowrap gap-2 mt-5 text-center mb-5">
        {
          services.map((service, i) => (
            <div key={i} className="w-[100%] md:w-[33%] bg-cyan-100/10 transition-all ease-linear cursor-pointer hover:bg-cyan-500 p-4 rounded-md group">
          <div className="service-box">
            <h4 className="text-2xl text-cyan-400 mb-4 group-hover:text-black">{service.title}</h4>
            <p>
              {service.description}
            </p>
          </div> 
        </div>
          ))
        }
        
        {/* <div className="w-[100%] md:w-[33%] bg-cyan-100/10 transition-all ease-linear cursor-pointer hover:bg-cyan-500 p-4 rounded-md">
          <div className="service-box">
            icon
            <h4>Web Design</h4>
            <p>
              I can design any website, such as Portfolio website, Ecommerce,
              Blogs, Landing pages etc
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[33%] bg-cyan-100/10 transition-all ease-linear cursor-pointer hover:bg-cyan-500 p-4 rounded-md">
          <div className="service-box">
            icon
            <h4>Responsive Design</h4>
            <p>
              I can develop fully responsive websites that meets the
              satisfaction of users with various devices
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMePage;
