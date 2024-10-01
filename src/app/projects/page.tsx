import React from "react";
import FrontEndProjectCard from "./FrontEndProjectCard";
import Technologies from "./FrTechnologies";
import SystemVideo from "./SystemVideo";
import BottomButton from "./BottomButton";

const projects = [
  {
    id:'blog',
    title: "Blogging application",
    live: "https://blog-frontend-orpin-eta.vercel.app/",
    links: {
      frontEnd: "https://github.com/masummim50/blog-frontend",
      backEnd: "https://github.com/masummim50/blog-backend",
    },
    technologies: {
      frontEnd: [
        "react",
        "typescript",
        "tailwindcss + framer motion",
        "react query",
        "zustand"
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "typescript",
        "mongoose",
        "jwt-authentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. Testing accounts are provided in the login page",
    features: [
      "homepage featuring posts with newest first, post card with details, like and share functionality",
      "create post with title description thumbnail and tags, option to select community/group to post in",
      "post details, comments like functionality",
      "user sign up and login",
      "view posts by tags",
      "create community, join and create post in them",
      "upload image while creating post, upload avatar and cover image, and feature image and cover image for communities. (imgbb api used)",
      "light and dark mode",
      "view own profile along with other users profile"
    ],
  },
  {
    id:'pm',
    title: "Project Management System",
    live: "https://project-management-light.vercel.app/",
    links: {
      frontEnd: "https://github.com/masummim50/project-management-frontend-light",
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
    id:'ec',
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
      <BottomButton/>
      <div className="text-center text-sky-400 text-xl font-semibold">
        Full Stack Projects
      </div>
      {/* <div className="flex items-center">
        <a href="#ec">MultiVendor e-commerce(nextjs)</a>
      </div> */}
      {projects.map((project, i) => (
        <div
        id={project.id}
          key={i}
          className="mb-5 border-b-2 rounded-md pb-5 backdrop-blur-sm -z-20 bg-gray-600/20 p-3"
        >
          <div className="flex justify-between">
            <h2 className="text-xl text-sky-500">{project.title}</h2>
            {/* <a
              href={project.live}
              target="_blank"
              className="text-sky-400 rounded-md  px-4 py-1 shadow-[inset_1px_1px_3px_black,inset_-1px_-1px_3px_#bae6fd]"
            >
              Live Site
            </a> */}
            <a
              href={project.live}
              target="_blank"
              className="bg-orange-500 rounded-md  px-4 py-1 hover:bg-orange-600 transition-all"
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
            <h2 className="text-orange-500 my-3">
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
