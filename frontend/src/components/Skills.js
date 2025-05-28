import React from "react";
import python from "../assets/python.webp";
import cpp from "../assets/cpp.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import express from "../assets/express-js.png";
import mdb from "../assets/mdb.png";
import node from "../assets/node.png";
import sql from "../assets/sql.png";
import linux from "../assets/linux.png";
import pm from "../assets/postman.webp";
import docker from "../assets/docker.jpg";
import gh from "../assets/gh.png";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const languages = [
  { title: "HTML", path: html },
  { title: "CSS", path: css },
  { title: "JavaScript", path: js },
  { title: "React", path: react },
  { title: "Express JS", path: express },
  { title: "Node Js", path: node },
  { title: "Mongo DB", path: mdb },
  { title: "Python", path: python },
  { title: "C++", path: cpp },
  { title: "SQL", path: sql },
];

const tools = [
  { title: "Postman", path: pm },
  { title: "Git", path: gh },
  { title: "Linux", path: linux },
  { title: "Docker", path: docker },
];

const Skills = () => {
  const percentage = 85;

  return (
    <section
      id="skill"
      className="flex flex-col justify-center items-center gap-20 p-10 bg-black text-white"
    >
      <h2 className="text-5xl font-bold">My Skills</h2>

      {/* Languages Section */}
      <div className="flex items-center gap-10 w-full max-w-6xl">
        <p className="text-5xl font-semibold -rotate-90 whitespace-nowrap select-none">
          LANGUAGES
        </p>

        <div className="grid grid-cols-5 grid-rows-2 gap-5 flex-grow">
          {languages.map(({ title, path }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2.5 bg-gray-900 rounded-md p-5 hover:bg-orange-400 transition-colors cursor-pointer"
              aria-label={title}
              role="img"
            >
              <img src={path} alt={`${title} logo`} className="h-20" />
              <p className="text-center mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack Progress Bars */}
      <div className="flex items-center gap-20">
        <CircularProgressbar
          value={percentage}
          text={`MERN ${percentage}%`}
          styles={{
            text: { fill: "#FFA500", fontSize: "16px", fontWeight: "bold" },
            path: { stroke: "#FFA500" },
            trail: { stroke: "#444" },
          }}
        />
        <CircularProgressbar
          value={percentage}
          text={`DSA ${percentage}%`}
          styles={{
            text: { fill: "#FFA500", fontSize: "16px", fontWeight: "bold" },
            path: { stroke: "#FFA500" },
            trail: { stroke: "#444" },
          }}
        />
        <p className="text-5xl font-semibold rotate-90 select-none whitespace-nowrap">
          STACK
        </p>
      </div>

      {/* Tools Section */}
      <div className="flex items-center gap-10 w-full max-w-6xl">
        <p className="text-5xl font-semibold -rotate-90 select-none whitespace-nowrap">
          Tools
        </p>

        <div className="grid grid-cols-4 gap-10 flex-grow">
          {tools.map(({ title, path }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2.5 bg-gray-900 rounded-md p-5 hover:bg-orange-400 transition-colors cursor-pointer"
              aria-label={title}
              role="img"
            >
              <img src={path} alt={`${title} logo`} className="h-20" />
              <p className="text-center mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
