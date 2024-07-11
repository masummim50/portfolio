import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdInformationCircle } from "react-icons/io";
import { BsFilePdfFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

import NavLink from "./NavLink";

const links = [
  { title: "Home", src: "/", icon: <FaHome /> },
  { title: "Projects", src: "/projects", icon: <GrProjects /> },
  { title: "About", src: "/about-me", icon: <IoMdInformationCircle /> },
  { title: "Resume", src: "/resume", icon: <BsFilePdfFill /> },
  { title: "Contact", src: "/contact", icon: <FaEnvelope /> },
];

const NewHeader = () => {
  return (
    <div className=" p-2 w-full fixed top-0 backdrop-blur-md z-[1000]">
      <ul className="flex justify-start sm:justify-end">
        {links.map((link, i) => {
          return (
            <li key={i} className="inline-block gap-1 sm:mr-1 mr-0 ml-1 sm:ml-0">
              <NavLink link={link}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewHeader;
