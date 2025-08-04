import React from "react";
import TypeWriter from "./TypeWriter";
import SocialMediaIcons from "./SocialMediaIcons";

const Banner = () => {
  return (
    <section className="mx-auto container pt-10 flex justify-center dark:text-white mb-10">
      <div className="w-[700px] flex flex-col space-y-5">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-pink-700">Bina</span> Duwal
        </h1>
        <span className="text-3xl md:text-4xl font-bold ">
          I'm a &lt; <TypeWriter /> /&gt;
        </span>
        <p className="text-gray-600 font-medium dark:text-white">
          I'm a Full stack  developer, and this is my small portfolio website.
          Thank you for visiting, and I hope you enjoy exploring my portfolio.
        </p>
        <SocialMediaIcons />
        <div className="flex gap-5">
          <button
            type="button"
            className="text-white hover:text-white border border-pink-800 bg-pink-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:hover:text-white dark:focus:ring-black hover:scale-110 transition-all duration-200"
          >
            View Resume
          </button>
          <button
            type="button"
            className="text-black hover:text-white border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:text-white dark:hover:text-white  dark:focus:ring-gray-800 hover:scale-110 transition-all duration-200"
          >
            Get in Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
