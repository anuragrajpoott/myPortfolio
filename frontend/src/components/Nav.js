import React, { useState } from "react";
import logo from "../assets/logo.png";

const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skill", label: "Skills", href: "#skill" },
  { id: "project", label: "Projects", href: "#project" },
  { id: "contact", label: "Contact Me", href: "#contact" },
];

const Nav = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="sticky top-0 bg-black z-50 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Anurag Rajpoot Logo" className="h-12 w-12 rounded-full" />
          <span className="text-white font-semibold text-lg select-none">Anurag Rajpoot</span>
        </div>

        <ul className="flex items-center gap-8 text-white font-medium">
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => setActive(id)}
                className={`relative px-2 py-1 transition-colors duration-300 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded ${
                  active === id ? "text-pink-500 font-bold" : "text-white"
                }`}
                aria-current={active === id ? "page" : undefined}
              >
                {label}
                {active === id && (
                  <span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 rounded"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
