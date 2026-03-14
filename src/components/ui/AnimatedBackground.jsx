import { motion } from "framer-motion";
import { useMemo } from "react";

const icons = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

export default function AnimatedBackground() {

    const positions = useMemo(
    () =>
      icons.map(() => ({
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 md:w-16 md:h-16"
          style={{
            left: positions[i].x,
            top: positions[i].y,
          }}
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 40, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img
            src={icon.url}
            alt={icon.name}
            className="w-full h-full object-contain filter grayscale invert brightness-200"
          />
        </motion.div>
      ))}
    </div>
  );
}