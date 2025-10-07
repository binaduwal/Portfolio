import React from "react";

const About = () => {
  return (
    <section className="mx-auto container p-4 md:p-6 dark:text-white scroll-mt-24" id="about">
      <div className="flex gap-10 flex-col lg:flex-row">
        <img
          src="/profile_picture.jpg"
          className="w-[500px] rounded-tr-[10rem] rounded-bl-[10rem] object-contain"
          alt="Bina Duwal Profile picture"
          
        />

        <div className="mt-10">
          <h1 className="text-2xl md:text-4xl font-bold p-2">About <span className="text-pink-700">Me</span></h1>
          <p className="font-medium p-2 text-gray-800 dark:text-white text-wrap text-lg">
            Namaste! I'm Bina Duwal, a passionate Full Stack Developer
            specializing in the MERN stack (MongoDB, Express.js, React, and
            Node.js). I build dynamic, scalable, and fully responsive web
            applications that prioritize both functionality and user experience.
            With a strong command over JavaScript, React, Node.js, and modern
            development tools, I thrive in creating seamless frontend interfaces
            and robust backend systems. I’m always exploring new technologies
            and staying updated with industry trends to deliver high-quality,
            maintainable code. Let’s build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
