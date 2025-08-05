import React from "react";

const SkillsIcons = () => {
  return (
    <section className="py-8">
      <ul className="flex flex-wrap justify-center gap-6">
        <li className="w-16 h-16 hover:scale-110 transition-transform">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-html-2752158-2284975.png?f=webp&w=256"
            alt="HTML"
            className="w-full h-full object-contain"
          />
        </li>
        <li className="w-16 h-16 hover:scale-110 transition-transform">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256"
            alt="CSS"
            className="w-full h-full object-contain"
          />
        </li>
        <li className="w-16 h-16 hover:scale-110 transition-transform">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-3521515-2945018.png?f=webp&w=256"
            alt="JavaScript"
            className="w-full h-full object-contain"
          />
        </li>

        <li className="w-16 h-16 hover:scale-110 transition-transform">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256"
            alt="React"
            className="w-full h-full object-contain"
          />
        </li>

        <li className="w-16 h-16 hover:scale-110 transition-transform">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256"
            alt="MongoDB"
            className="w-full h-full object-contain"
          />
        </li>
        <li className="w-16 h-16 hover:scale-110 transition-transform">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-3-1174937.png?f=webp&w=256"
            alt="Node.js"
            className="w-full h-full object-contain"
          />
        </li>
        <li className="w-16 h-16 hover:scale-110 transition-transform">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png?f=webp&w=256"
            alt="TypeScript"
            className="w-full h-full object-contain"
          />
        </li>
        <li className="w-16 h-16 hover:scale-110 transition-transform">
          <img
            src="https://images.icon-icons.com/2148/PNG/512/nextjs_icon_132160.png"
            alt="Next.js"
            className="w-full h-full object-contain"
          />
        </li>
      </ul>
    </section>
  );
};

export default SkillsIcons;
