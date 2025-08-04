import React from "react";
import { FiLinkedin, FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";

const socialLinks = [
  { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/bina-duwal/", name: "LinkedIn" },
  { icon: <FiGithub />, url: "https://github.com/binaduwal", name: "GitHub" },
  { icon: <FiInstagram />, url: "https://www.instagram.com/beenaduwal/", name: "Instagram" },
  { icon: <FiFacebook />, url: "https://www.facebook.com/bee.na.50115", name: "Facebook" },
];

const SocialMediaIcons = () => {
  return (
    <section className="flex gap-5 text-2xl text-gray-700 dark:text-white">

      {socialLinks.map(({ icon, url, name }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          className="hover:text-pink-600 transition-colors  duration-300 p-3 hover:scale-120 hover:-translate-y-2 shadow-md hover:shadow-pink-800 rounded-full"
        >
          {icon}
        </a>
      ))}
    </section>
  );
};

export default SocialMediaIcons;
