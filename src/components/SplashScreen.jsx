import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 15);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Monogram */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, letterSpacing: '0.5em' }}
          animate={{ scale: 1, opacity: 1, letterSpacing: '0.1em' }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="mb-12 text-7xl font-black text-white relative"
        >
          BD
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-emerald-500 absolute -right-4 bottom-2 text-4xl"
          >
            _
          </motion.span>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="relative w-64 h-[1px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex items-center gap-3"
        >
          <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">
            System Synchronizing
          </p>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}
