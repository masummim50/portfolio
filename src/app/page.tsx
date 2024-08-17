import CustomTypeWriter from "@/Components/typeWriter/TypeWriter";
import Image from "next/image";


import { FaGithub,FaLinkedin,FaDownload  } from "react-icons/fa";


export default function Home() {
  return (
    <div>
    <div className="flex items-start justify-center" style={{  marginTop: "20px"  }}>
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="text-5xl">Hi,</h1>
        <h1 className="text-5xl">I Am Masum, a</h1>
        <h1 className="text-6xl">
          <span className="text-cyan-500 text-center">
            <CustomTypeWriter />
          </span>
        </h1>
        <div className="mt-3 flex gap-2">
          <button className="bg-gray-900  px-3 py-1 rounded-md ">
            <a className="flex items-center gap-1" target="_blank" href="https://github.com/masummim50">
              Github <span className="inline-block"><FaGithub/></span>
            </a>
          </button>
          <button className="bg-blue-500  px-3 py-1 rounded-md ">
            <a className="flex items-center gap-1"
              target="_blank"
              href="https://www.linkedin.com/in/masum-billah-65709a146/"
            >
              Linkedin <span className="inline-block"><FaLinkedin/></span>
            </a>
          </button>
        </div>
        <a className="flex items-center bg-cyan-500 rounded-md mt-3 px-3 py-1"
          target="_blank"
          href="https://drive.google.com/u/0/uc?id=1Iog7pdvkCA3HFp0iDyczZ5wP5zd2G-3q&export=download"
        >
          <button className="btn brand-btn">
            Download Resume <span className="inline-block"><FaDownload /></span>
          </button>
        </a>
      </div>
      
    </div>
    <h2 className="text-center mt-[50px] text-gray-400">This site is built using Next.js 14 and Tailwind Css</h2>
    </div>
  );
}
