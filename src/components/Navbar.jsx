import React, { useEffect, useState } from "react";
import { navbar } from "../constants";
import Logo from "./Logo";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Navbar = ({ theme, toggleTheme }) => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
 <section
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-900 flex justify-between p-4 transition-shadow duration-300 ${
        shadow ? "shadow-lg" : ""
      }`}
    >      <Logo />
      <div className="hidden md:flex gap-10 font-bold text-lg  ">
        {navbar.map((item) => (
          <a
            href={item.link}
            key={item.name}
            className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:w-full after:origin-bottom after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] after:bg-pink-700 hover:text-pink-700 hover:after:origin-bottom hover:after:scale-x-100 dark:text-white"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex">
        <button
          onClick={toggleTheme}
          className="text-3xl text-gray-700 dark:text-gray-300 hover:text-pink-700 dark:hover:text-pink-700 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </section>
  );
};

export default Navbar;
