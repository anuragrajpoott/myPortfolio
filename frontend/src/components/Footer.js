import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-6 md:px-12 bg-black text-white text-sm gap-4 md:gap-0 border-t border-gray-700">
      
      <div className="flex items-center gap-2 text-gray-400">
        <p>© 2024 All Rights Reserved</p>
        <span className="mx-2">|</span>
        <div className="flex items-center gap-1 text-pink-500">
          <p>Made with</p>
          <FaHeart aria-label="heart" />
          <p>
            by{" "}
            <a
              href="https://github.com/anuragrajpoott"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-400"
            >
              @anuragrajpoot
            </a>
          </p>
        </div>
      </div>

      <nav className="flex gap-6 text-gray-400">
        <a href="#terms" className="hover:text-pink-500 underline">
          Terms
        </a>
        <a href="#privacy" className="hover:text-pink-500 underline">
          Privacy
        </a>
        <a href="#compliances" className="hover:text-pink-500 underline">
          Compliances
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
