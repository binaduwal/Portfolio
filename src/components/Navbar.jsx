import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'bg-black/20 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent py-4'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter text-white group flex items-center gap-1"
          >
            BINA<span className="text-emerald-500 group-hover:animate-pulse">DUWAL</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-emerald-400 transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://github.com/binaduwal" target="_blank" className="text-white/30 hover:text-white transition-all duration-300 hover:scale-110">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/bina-duwal/" target="_blank" className="text-white/30 hover:text-white transition-all duration-300 hover:scale-110">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 origin-left shadow-[0_0_10px_rgba(16,185,129,0.5)]"
          style={{ scaleX }}
        />
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, scale: isMobileMenuOpen ? 1 : 1.1 }}
        className={cn(
          'fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center space-y-10',
          !isMobileMenuOpen && 'pointer-events-none'
        )}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-bold text-white/60 hover:text-emerald-500 transition-all duration-300 tracking-tighter"
          >
            {link.name}
          </motion.a>
        ))}
        <div className="flex space-x-8 pt-10">
          <a href="https://github.com/binaduwal" target="_blank" className="text-white/40 hover:text-white transition-transform hover:scale-125">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/bina-duwal/" target="_blank" className="text-white/40 hover:text-white transition-transform hover:scale-125">
            <Linkedin size={28} />
          </a>
          <a href="mailto:duwalbina2@gmail.com" className="text-white/40 hover:text-white transition-transform hover:scale-125">
            <Mail size={28} />
          </a>
        </div>
      </motion.div>
    </>
  );
}
