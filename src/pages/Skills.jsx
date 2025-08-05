import React from "react";
import SkillsIcons from "../components/SkillsIcons";

const Skills = () => {
  return (
    <section className="mx-auto container mt-10">
      <div>
        <p className="text-4xl font-bold text-center dark:text-white"> Skills</p>
       <SkillsIcons/>
      </div>  
    </section>
  );
};

export default Skills;
