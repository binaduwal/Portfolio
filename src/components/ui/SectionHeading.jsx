import { motion } from "framer-motion";

export const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-16">
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4"
    >
      {subtitle}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-7xl font-black tracking-tighter text-white"
    >
      {children}
    </motion.h2>
  </div>
);
