import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Continuous floating animation
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2 // Stagger the floating start
      }}
      // Hover 3D tilt and scale
      whileHover={{
        scale: 1.05,
        rotateY: 15,
        rotateX: -10,
        z: 50,
      }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: skill.color }}
      />

      {/* Main Card */}
      <div className="relative bg-white/3 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center gap-4 w-36 h-36 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/6">
        {/* Icon Container */}
        <div className="relative flex items-center justify-center">
          <motion.img
            src={skill.icon}
            alt={skill.name}
            className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
            animate={isHovered ? {
              filter: "grayscale(0%) drop-shadow(0 0 8px " + skill.color + "80)",
            } : {
                    filter:
                      skill.name === "Express"
                        ? `brightness(0) invert(1)`
                        : `grayscale(100%)`,
                 
            }}
          />
        </div>

        {/* Name */}
        <h3 className="text-sm font-bold tracking-[0.2em] text-center uppercase text-white/40 group-hover:text-white transition-colors duration-300">
          {skill.name}
        </h3>

        {/* Dynamic Underline */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ 
            width: isHovered ? "40%" : "0%",
            backgroundColor: skill.color
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
