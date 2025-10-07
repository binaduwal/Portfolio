import React from 'react'
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <section className="mx-auto container mt-10 scroll-mt-24" id='project'>
      <h1 className="font-bold text-4xl text-center dark:text-white mb-10">
        My <span className="text-pink-700">Projects</span>
      </h1>
      <ProjectCard />
    </section>
  );
}

export default Project
