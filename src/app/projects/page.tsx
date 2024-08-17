import React from "react";

const projects = [
  {
    title: "Project Management System",
    live: "https://capable-croissant-486a0f.netlify.app",
    links: { frontEnd: "https://github.com/masummim50/project-management-frontend", backEnd: "https://github.com/masummim50/project-management-backend" },
    technologies: {
      frontEnd: [
        "react",
        "typescript",
        "material-ui",
        "redux toolkit",
        "react router",
      ],
      backEnd: [
        "mongodb",
        "express",
        "node js",
        "mongoose",
        "typescript",
        "jwt-authentication",
        "firebase authentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "a simple todo list page",
      "drag and drop todo",
      "personal and group project",
      "search and add member to group project",
      "create task and subtask",
      "assign task and subtask to members for group projects",
      "start, pause and resume task",
      "track time spent on task and subtask",
      "an overview page for projects",
      "individual member overview for group projects",
      "mark as completed only when all task are complete",
      "re-open project",
      "a journal page bound to date, not editable once the day has passed",
      "an user dashboard page showing review of last 30 days: how many todo completed each day, how many task completed each day and how many words written in the journal each day",
    ],
  },
  {
    title: "Multi-vendor e-commerce Website",
    live: "https://best-buy-nu.vercel.app",
    links: { frontEnd: "https://github.com/masummim50/ecommerce-nextjs14-approuter", backEnd: "https://github.com/masummim50/ecommerce-backend-prisma" },
    technologies: {
      frontEnd: [
        "nextjs (app router)",
        "typescript",
        "tailwindcss + nextUi",
        "redux for client side state-management",
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "typescript",
        "postgresql with prisma orm",
        "jwt-authentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "homepage featuring popular, newest and discounted products",
      "product details page with related products section",
      "user and seller sign up and login",
      "search and pagination for products",
      "create store, add edit and delete products",
      "upload image when creating products (imgbb api used)",
      "orders page to view and update orders",
      "add to cart and buy now options",
      "seller dashboard page -- chart and information for how many products sold, incoming cash, cancellation rate, order stats, recent orders",
      "user cart page, increase, decrease quantity. select from cart to buy.",
      "cash on delivery and stripe payment gateway(mock card details provided).",
      "user orders page to view order stats and mark orders as 'received' ",
      "once order is marked as delivered able to write or update review for specific products",
      "light and dark mode",
    ],
  },
];

const fontEndProjects = [
  {
    name: "Gaming Dashboard",
    tech:'React',
    liveLink: "https://elaborate-piroshki-f91fe1.netlify.app/",
    code: "https://github.com/masummim50/dashboard-gaming",
  },
  {
    name: "Project Management Dashboard",
    tech:'React',
    liveLink: "https://wondrous-pasca-292302.netlify.app/",
    code: "https://github.com/masummim50/dashboard-project-management-frontend-only",
  },
  {
    name: "Travel landing Page",
    tech:'Nextjs',
    liveLink: "https://landing-page-voyage.vercel.app/",
    code: "https://github.com/masummim50/landing-page-travel-life",
  },
];

const ProjectsPage = () => {
  return (
    <div className="pb-20">
      <h2 className="text-3xl py-3">Projects:</h2>
      <div>
        <div className="text-center text-sky-600">FrontEnd Projects</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {fontEndProjects.map((project, i) => (
            <div
              key={i}
              className="mb-5 hover:shadow-[0px_1px_0px_white] shadow-[0px_5px_5px_-5px_white] transition-all rounded-md pb-5 backdrop-blur-sm bg-gray-600/20 p-3"
            >
              <div className="flex items-center flex-col gap-2">
                <h2>{project.name} <span className="text-sm text-sky-400">({project.tech})</span></h2>
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
          ))}
        </div>
      </div>
      <div className="text-center text-sky-600">Full Stack Projects</div>
      {projects.map((project, i) => (
        <div
          key={i}
          className="mb-5 border-b-2 rounded-md pb-5 backdrop-blur-sm -z-20 bg-gray-600/20 p-3"
        >
          <div className="flex justify-between">
            <h2>{project.title}</h2>
            <a
              href={project.live}
              target="_blank"
              className="text-sky-400 rounded-md  px-4 py-1 shadow-[inset_1px_1px_3px_black,inset_-1px_-1px_3px_#bae6fd]"
            >
              Live Site
            </a>
          </div>
          <div className="flex justify-end w-full gap-3 underline">
            {project.links.frontEnd && (
              <a href={project.links.frontEnd} target="_blank">
                FrontEnd Code
              </a>
            )}
            {project.links.backEnd && (
              <a href={project.links.backEnd} target="_blank">
                Backend Code
              </a>
            )}
          </div>
          <div>
            <h2>Technologies: </h2>
            {project.technologies.frontEnd.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.frontEnd.map((tech, i) => (
                  <span
                    key={i}
                    className=" border px-2 border-cyan-800 rounded-md  font-extralight"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.technologies.backEnd.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.backEnd.map((tech, i) => (
                  <span
                    key={i}
                    className=" border px-2 border-cyan-300 rounded-md  font-extralight"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          {project.importantInfo !== "" && (
            <h2 className="text-cyan-400 my-3">{project.importantInfo}</h2>
          )}
          <div>
            <h2>Features: </h2>
            <ul role="list" className="marker:text-cyan-400 list-disc pl-5">
              {project.features.map((feature, i) => (
                <li key={i} className="font-extralight">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
