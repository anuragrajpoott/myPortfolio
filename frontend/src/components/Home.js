import React from "react";
import Hero from "../assets/Hero.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto min-h-screen"
      aria-label="Introduction section"
    >
      {/* Left content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-6xl font-extrabold text-gradient bg-clip-text text-transparent">
          Hey, I’m Anurag
        </h1>

        <h2 className="text-4xl font-semibold text-pink-500 min-h-[48px]">
          <Typewriter
            words={["A Web Developer", "A Problem Solver", "A Tech Enthusiast"]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
          I specialize in building fast, responsive, and accessible websites that
          delight users. Passionate about clean code and modern design,
          I help bring your digital ideas to life. Explore my portfolio to see my
          latest work and how I can help you.
        </p>

        <div className="flex space-x-6 mt-8">
          <a
            href="#contact"
            className="bg-pink-600 hover:bg-pink-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-pink-500/50"
            aria-label="Contact me"
          >
            Contact Me
          </a>
          <a
            href="#project"
            className="border-2 border-pink-600 hover:border-pink-700 transition text-pink-600 hover:text-pink-700 font-semibold px-6 py-3 rounded-lg shadow-md"
            aria-label="Latest projects"
          >
            Latest Projects
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <img
          src={Hero}
          alt="Anurag standing in front of a computer screen"
          className="w-full max-w-md rounded-lg shadow-2xl"
          loading="lazy"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Home;
