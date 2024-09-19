import React from "react";
import { FaDownload, FaHtml5,FaCss3Alt ,FaBootstrap ,FaReact ,FaNodeJs ,FaRegEye } from "react-icons/fa";
import { RiTailwindCssFill,RiNextjsFill,RiFirebaseFill   } from "react-icons/ri";
import { SiMui,SiTypescript ,SiExpress,SiMongodb ,SiPrisma,SiRedux ,SiJsonwebtokens ,SiMongoose    } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";
import SkillSets from "./SkillSets";




const familiar = [ "React Native", "php", "wordpress", "python"];

const ResumePage = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="container">
      <h1 className="text-cyan-500 text-5xl mb-5">My Resume</h1>
      <div className="flex gap-2 flex-wrap md:flex-nowrap">
        <div className="w-[100%] md:w-[60%]">
          <p>
            My expertise are in frontend technologies such as HTML5, CSS,
            BOOTSTRAP, JAVASCRIPT, TYPESCRIPT, REACT, NEXTJS, REDUX TOOLKIT, ZUSTAND, REACT QUERY. I am comfortable with backend
            technologies such as NODE, EXPRESS, MONGODB, FIREBASE, MONGOOSE, PRISMA ORM that allows me
            to work with a backend team efficiently.
            <br />
            <br />I am a solution-focused developer with the ability to develop
            interactive and responsive websites that satisfies a user’s
            experience.
          </p>
        </div>
        <div className="w-[100%] md:w-[40%]">
          <h3 className="underline text-2xl text-cyan-400">My Skillset:</h3>

          <SkillSets/>

          <h4 className="brand-text">Familiar with: </h4>
          {familiar.map((skill, i) => (
            <span key={i} className="lowskill mr-3 text-gray-400">
              {skill}
            </span>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1wSRTF4I_UwfEwRcA0va1-qWHGJqsromS"
          >
            <button className="flex items-center border border-cyan-500 hover:bg-cyan-500  px-4 py-1 gap-1 rounded-md mt-5">
              Download Resume{" "}
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <a
          target="_blank"
            href="https://drive.google.com/file/d/1wSRTF4I_UwfEwRcA0va1-qWHGJqsromS/view?usp=sharing"
          >
            <button className="border border-orange-500 hover:bg-orange-500 transition-all ease-in-out flex items-center gap-1 px-4 py-1 rounded-md mt-2">
              View Resume{" "}
              <span>
                <FaRegEye/>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
