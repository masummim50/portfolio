"use client"
import React from "react";


const FrontEndProjectCard = ({
  project,
}: {
  project: { name: string; tech: string; liveLink: string; code: string };
}) => {
  return (
    <div  className="mb-5 hover:shadow-[0px_1px_0px_white] shadow-[0px_5px_5px_-5px_white] transition-all rounded-md pb-5 backdrop-blur-sm bg-gray-600/20 p-3">
      <div className="flex items-center flex-col gap-2">
        <h2>
          {project.name}{" "}
          <span className="text-sm text-sky-400">({project.tech})</span>
        </h2>
        <a
          href={project.liveLink}
          target="_blank"
          className="text-sky-400 cursor-pointer rounded-md shadow-[inset_1px_1px_3px_black,inset_-1px_-1px_3px_#bae6fd] px-6 py-2"
        >
          Live Site
        </a>
      </div>
      <div className="flex justify-center my-2 underline w-full">
        <a href={project.code} target="_blank">
          Code
        </a>
      </div>
    </div>
  );
};

export default FrontEndProjectCard;
