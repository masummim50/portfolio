"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const ProjectPageLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  console.log("pathname: ", pathname);
  return (
    <div className="">
      <h2 className="text-3xl py-3">Projects:</h2>
      <div className="flex justify-center items-center mb-10">
        <Link
          className={`${
            pathname === "/projects" && "bg-slate-700 hover:bg-slate-700"
          } border border-slate-700 px-5 py-2 rounded-tl-md rounded-bl-md  hover:bg-slate-800`}
          href="/projects"
        >
          Full stack projects
        </Link>
        <Link
          className={`${
            pathname === "/projects/frontend" &&
            "bg-slate-700 hover:bg-slate-700"
          } border border-slate-700 px-5 py-2 rounded-tr-md rounded-br-md hover:bg-slate-800 `}
          href="/projects/frontend"
        >
          Frontend projects
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProjectPageLayout;
