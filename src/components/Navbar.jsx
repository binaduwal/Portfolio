import React from "react";
import { navbar } from "../constants";
import Logo from "./Logo";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <section className="flex justify-between mb-20">
      <Logo />
      <div className="hidden md:flex gap-10 font-bold text-lg ">
        {navbar.map((item) => (
          <p
            key={item.name}
            className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:w-full after:origin-bottom after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] after:bg-pink-700 hover:text-pink-700 hover:after:origin-bottom hover:after:scale-x-100 dark:text-white"
          >
            {item.name}
          </p>
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
