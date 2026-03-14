import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "React Developer",
    ],
    loop: 0,
  });

  return <span>{text}</span>;
};

export default TypeWriter;
