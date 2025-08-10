import React from "react";
import { skillsData } from "../constants";

const Skills = ({ skills }) => {
  const skillsToShow = skills ? skills : Object.keys(skillsData);

  return (
    <section className="mx-auto container p-4 md:p-6 dark:text-white ">

    <h1 className="text-2xl md:text-4xl font-bold p-2 text-center pb-10">My <span className="text-pink-700">Skills</span></h1>
    <ul className="flex flex-wrap justify-center gap-6">
      {skillsToShow.map((skill) => (
        <li
          key={skill}
          className="w-16 h-16 hover:scale-110 transition-transform"
        >
          <img
            src={skillsData[skill]}
            alt={skill}
            className="w-full h-full object-contain"
          />
        </li>
      ))}
    </ul>
    </section>
  );
};

export default Skills;
