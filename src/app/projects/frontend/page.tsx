import React from "react";
import FrontEndProjectCard from "../FrontEndProjectCard";
const fontEndProjects = [
  {
    name: "Gaming Dashboard",
    tech: "React",
    liveLink: "https://elaborate-piroshki-f91fe1.netlify.app/",
    code: "https://github.com/masummim50/dashboard-gaming",
  },
  {
    name: "Project Management Dashboard",
    tech: "React",
    liveLink: "https://wondrous-pasca-292302.netlify.app/",
    code: "https://github.com/masummim50/dashboard-project-management-frontend-only",
  },
  {
    name: "Travel landing Page",
    tech: "Nextjs",
    liveLink: "https://landing-page-voyage.vercel.app/",
    code: "https://github.com/masummim50/landing-page-travel-life",
  },
];
const FrontEndProjectsPage = () => {
  return (
    <div>
      <div className="text-center text-sky-400 text-xl font-semibold">
        Frontend Projects
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {fontEndProjects.map((project, i) => (
          <FrontEndProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FrontEndProjectsPage;
