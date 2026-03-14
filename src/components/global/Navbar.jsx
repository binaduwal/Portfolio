import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Basic logic to track active section (can be expanded)
      const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Intro', href: '#home', id: 'home' },
    { name: 'Work', href: '#experience', id: 'experience' },
    { name: 'Expertise', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50  py-4 transition-all duration-700 ease-in-out",
        isScrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        
        {/* Minimalist Logo */}
        <a href="#home" className="text-white/90 group flex items-center gap-3">
          <div className="h-[1px] w-6 bg-white/20 group-hover:w-10 group-hover:bg-emerald-500 transition-all duration-500" />
          <span className="text-[13px] font-medium tracking-[0.3em] uppercase">
            Bina Duwal
          </span>
        </a>

        {/* Subtle Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group"
            >
              <span className={cn(
                "text-[10px] uppercase tracking-[0.25em] transition-colors duration-500",
                activeSection === link.id ? "text-emerald-400" : "text-white/40 group-hover:text-white"
              )}>
                {link.name}
              </span>
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeDot"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Side: Social & Toggle */}
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-6">
            <a href="https://github.com/binaduwal" className="text-white/30 hover:text-white transition-colors duration-500">
              <Github size={16} strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com/in/bina-duwal" className="text-white/30 hover:text-white transition-colors duration-500">
              <Linkedin size={16} strokeWidth={1.5} />
            </a>
          </div>

          {/* Minimalist Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 group"
          >
            <div className={cn("h-[1px] bg-white transition-all duration-300", isMenuOpen ? "w-6 rotate-45 translate-y-[4px]" : "w-6")} />
            <div className={cn("h-[1px] bg-white transition-all duration-300", isMenuOpen ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4 self-end")} />
          </button>
        </div>
      </div>

      {/* Ultra-thin scroll indicator at the very bottom of the nav */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
        <motion.div 
          className="h-full bg-emerald-500/50" 
          style={{ width: `${(navLinks.findIndex(l => l.id === activeSection) + 1) / navLinks.length * 100}%` }}
        />
      </div>

      {/* Subtle Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[-1] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/50 hover:text-white text-xl tracking-[0.2em] uppercase transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}