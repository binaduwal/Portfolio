import { Github, Linkedin, Mail } from "lucide-react";
import { data } from "../data";

export const Footer = () => {
  return (
    <footer className="py-20 px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-2xl font-black tracking-tighter text-white">
              BD<span className="text-emerald-500">.</span>
            </h3>
            <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} Bina Duwal. All rights reserved.
            </p>
          </div>
          <div className="flex gap-10">
            <a href="https://github.com/binaduwal" target="_blank" className="text-white/20 hover:text-white transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bina-duwal/" target="_blank" className="text-white/20 hover:text-white transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${data.basics.email}`} className="text-white/20 hover:text-white transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
  );
};

