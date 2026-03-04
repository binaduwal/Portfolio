import { motion } from 'framer-motion';

const icons = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {/* Floating Icons */}
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 md:w-16 md:h-16"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%'
            ],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img
            src={icon.url}
            alt={icon.name}
            className="w-full h-full object-contain filter grayscale invert brightness-200"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ))}

      {/* Animated Gradients */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[120px] rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-teal-500/10 blur-[120px] rounded-full"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
