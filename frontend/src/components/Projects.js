import React, { useState } from "react";
import { GoFileDirectory } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { FcNext, FcPrevious } from "react-icons/fc";
import mern from "../assets/mern.png";

const projectsData = [
  {
    github: "https://github.com/anuragrajpoott/study-notion",
    live: "https://study-notion-nine-rho.vercel.app/",
    title: "Study-Notion",
    description:
      "Developed an EdTech platform using the MERN stack that provides learning and collaboration features for students and educators. Features include user authentication, real-time notifications, and dynamic content management.",
    stack: [mern],
  },
  {
    github: "https://github.com/anuragrajpoott/mindSpacePlus",
    live: "https://mind-space-plus.vercel.app/",
    title: "Mind Space +",
    description:
      "Created a responsive and interactive social media website for depressed peoples using the MERN stack to showcase my skills, projects, and technical knowledge. Integrated dynamic content display, emphasizing a clean user interface and smooth user experience.",
    stack: [mern],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = projectsData.length;

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const { github, live, title, description, stack } = projectsData[currentIndex];

  return (
    <section
      id="project"
      className="p-10 flex flex-col justify-center items-center gap-10 bg-black text-white min-h-screen"
    >
      <h2 className="text-5xl font-bold">My Projects</h2>

      <div className="flex items-center gap-8 max-w-4xl w-full">
        <button
          onClick={prevProject}
          aria-label="Previous project"
          className="text-5xl text-pink-500 hover:text-pink-700 transition-colors"
        >
          <FcPrevious />
        </button>

        <div className="flex flex-col gap-5 bg-gray-800 rounded-md p-8 shadow-lg w-full max-w-3xl">
          <div className="flex items-center justify-between mb-4 text-2xl">
            <a
              href="#"
              aria-label="Project folder icon"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <GoFileDirectory />
            </a>
            <div className="flex gap-6 text-pink-500">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="hover:text-pink-700"
              >
                <FaGithub />
              </a>
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live project site"
                className="hover:text-pink-700"
              >
                <CiShare1 />
              </a>
            </div>
          </div>

          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="text-gray-300">{description}</p>

          <div className="flex justify-end gap-4 mt-4">
            {stack.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Tech stack icon"
                className="h-10 w-auto"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextProject}
          aria-label="Next project"
          className="text-5xl text-pink-500 hover:text-pink-700 transition-colors"
        >
          <FcNext />
        </button>
      </div>
    </section>
  );
};

export default Projects;
