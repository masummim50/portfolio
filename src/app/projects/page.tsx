import React from "react";
import FrontEndProjectCard from "./FrontEndProjectCard";
import Technologies from "./FrTechnologies";
import SystemVideo from "./SystemVideo";

const projects = [
  {
    title: "Project Management System",
    live: "https://capable-croissant-486a0f.netlify.app",
    links: {
      frontEnd: "https://github.com/masummim50/project-management-frontend",
      backEnd: "https://github.com/masummim50/project-management-backend",
    },
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
    links: {
      frontEnd: "https://github.com/masummim50/ecommerce-nextjs14-approuter",
      backEnd: "https://github.com/masummim50/ecommerce-backend-prisma",
    },
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

const ProjectsPage = () => {
  return (
    <div className="pb-20">
      <div className="text-center text-sky-400 text-xl font-semibold">
        Full Stack Projects
      </div>
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
          <div className="flex flex-col gap-2">
            <h2>Technologies: </h2>
            {project.technologies.frontEnd.length > 0 && (
              <Technologies techs={project.technologies.frontEnd} />
            )}
            {project.technologies.backEnd.length > 0 && (
              <Technologies
                techs={project.technologies.backEnd}
                stagger={0.3}
                delay={0.2}
              />
            )}
          </div>
          {project.importantInfo !== "" && (
            <h2 className="text-sky-400 my-3 animate-pulse">
              {project.importantInfo}
            </h2>
          )}
          <div>
            <h2>Features: </h2>
            <div className="flex flex-col lg:flex-row">
              <ul
                role="list"
                className="marker:text-cyan-400 list-disc pl-5 w-full lg:w-[55%]"
              >
                {project.features.map((feature, i) => (
                  <li key={i} className="font-extralight">
                    {feature}
                  </li>
                ))}
              </ul>
              {i === 0 && <SystemVideo />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
