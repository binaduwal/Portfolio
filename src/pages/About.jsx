import React from "react";

const About = () => {
  return (
    <section className="mx-auto container p-4 md:p-6 dark:text-white ">
      <div className="flex gap-10 flex-col md:flex-row">
        <img
          src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/414724172_1921154431615969_8293608548026001814_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YdYfMyu_2zUQ7kNvwFFQ1kH&_nc_oc=AdkVQhIHsLA3Ov9qQ-1BISDJxZ41LFGmWRe2Ij80qjBxYlNT2yzPWES9sKnRdoX10FHy-jZAarjWs5euG6_BDTjI&_nc_zt=23&_nc_ht=scontent.fktm21-1.fna&_nc_gid=23kSrZVK1eGo4LBYz9VkZQ&oh=00_AfWnRxi7IhqZCwx7Pwh3rS1ZWeu-VESOo946Uw6vqD6Yxg&oe=68968A70"
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
