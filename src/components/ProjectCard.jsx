import React from "react";
import { projects, skillsData } from "../constants";
import { FaGithub } from "react-icons/fa";
const ProjectCard = () => {
  return (
    <section className="mx-auto container pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white ">
        {projects.map((item) => (
          <div
            key={item.id}
            className="shadow-xl p-4 rounded-2xl"
            style={{ backgroundColor: "#262612" }}
          >
            <img src={item.image} className="rounded-2xl" alt={item.title} />
            <div className="flex items-center justify-between">
              <p className="font-bold text-md mt-5">{item.title}</p>

              <a
                href={item.githubLink}
                target="_blank"
                className="mt-5 hover:text-pink-700 transition-all duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
            <p>{item.description}</p>
            <div className="flex gap-2 mt-3">
              {item.skills.map((skill) => (
                <img
                  key={skill}
                  src={skillsData[skill]}
                  alt={skill}
                  title={skill}
                  className="w-8 h-8 object-contain"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
