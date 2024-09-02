import CustomTypeWriter from "@/Components/typeWriter/TypeWriter";
import Image from "next/image";


import { FaGithub,FaLinkedin,FaDownload  } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { motion } from 'framer-motion';
import GitHubButton from "./GitHubButton";
import LinkedinButton from "./LinkedInButton";
import DownloadResumeButton from "./DownloadResumeButton";
import ViewResumeButton from "./ViewResumeButton";


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
          <GitHubButton/>
          <LinkedinButton/>
        </div>
        <DownloadResumeButton/>
        <ViewResumeButton/>
      </div>
      
    </div>
    <h2 className="text-center mt-[50px] text-gray-400">This site is built using Next.js 14 and Tailwind Css</h2>
    </div>
  );
}
