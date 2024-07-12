import React from "react";
import { FaDownload, FaHtml5,FaCss3Alt ,FaBootstrap ,FaReact ,FaNodeJs , } from "react-icons/fa";
import { RiTailwindCssFill,RiNextjsFill,RiFirebaseFill   } from "react-icons/ri";
import { SiMui,SiTypescript ,SiExpress,SiMongodb ,SiPrisma,SiRedux ,SiJsonwebtokens ,SiMongoose    } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";


const frontendskills = [
  {
    title:'html5',
    icon:<FaHtml5/>
  },
  {
    title:'css3',
    icon:<FaCss3Alt/>
  },
  {
    title:'bootstrap',
    icon:<FaBootstrap/>
  },
  {
    title:'tailwindcss',
    icon:<RiTailwindCssFill/>
  },
  {
    title:'react',
    icon:<FaReact/>
  },
  {
    title:'nextjs',
    icon:<RiNextjsFill/>
  },
  {
    title:'redux toolkit',
    icon:<SiRedux/>
  },
  {
    title:'javascript',
    icon:<IoLogoJavascript/>
  },
  {
    title:'typescript',
    icon:<SiTypescript/>
  },{
    title:'firebase authentication',
    icon:<RiFirebaseFill/>
  },
];
// const backendskills = ["NODE.JS", "EXPRESS", "MONGODB", "FIREBASE", "HEROKU"];
const backendskills = [{
    title:'nodejs',
    icon:<FaNodeJs/>
  },
  {
    title:'expressjs',
    icon:<SiExpress/>
  },
  {
    title:'mongodb',
    icon:<SiMongodb/>
  },
  {
    title:'mongoose',
    icon:<SiMongoose />
  },
  {
    title:'prisma ORM',
    icon:<SiPrisma/>
  },
  {
    title:'jwt authentication',
    icon:<SiJsonwebtokens/>
  },
  {
    title:'graphql - apollo client',
    icon:<GrGraphQl/>
  }];
const familiar = ["REACT NATIVE", "PHP", "WORDPRESS",];

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
          <div className="mb-2 flex flex-wrap gap-1">
            {frontendskills.map((skill, i) => (
              <span key={i} className="flex gap-1 bg-cyan-800 rounded-md items-center px-2 text-lg font-extralight">
                {skill.title} {skill.icon}
              </span>
            ))}
          </div>
          <div className="mb-2 flex flex-wrap gap-1 mt-5">
            {backendskills.map((skill, i) => (
              <span key={i} className="flex gap-1 bg-cyan-800 rounded-md items-center px-2 text-lg font-extralight">
                {skill.title} {skill.icon}
              </span>
            ))}
          </div>
          <h4 className="brand-text">Familiar with: </h4>
          {familiar.map((skill, i) => (
            <span key={i} className="lowskill">
              {skill}
            </span>
          ))}
          <a
            target="_blank"
            href="https://drive.google.com/u/0/uc?id=1Iog7pdvkCA3HFp0iDyczZ5wP5zd2G-3q&export=download"
          >
            <button className="flex items-center border border-cyan-500 hover:bg-cyan-500  px-4 py-1 gap-1 rounded-md mt-5">
              Download Resume{" "}
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
