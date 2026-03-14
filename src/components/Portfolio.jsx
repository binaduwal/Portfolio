import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import {
  Award,
  Download,
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  Database,
  Zap,
  Shield,
  ArrowUpRight,
  CheckCircle,
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import SkillCard from './SkillCard.jsx';
import AnimatedBackground from './AnimatedBackground.jsx';
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { GlassCard } from "./ui/GlassCard.jsx";
import { SectionHeading } from "./ui/SectionHeading.jsx";
import { data } from "../data/index.js";
import { Footer } from "./Footer.jsx";
import ContactSection from "./ContactSection.jsx";



export default function Portfolio() {
  const [expandedExp, setExpandedExp] = useState(0);

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-8 pt-20 relative overflow-hidden">
        <AnimatedBackground />

        <div className="mx-auto max-w-7xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-8"
            >
              <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
              Available for new projects
            </motion.div>

            <h1 className="text-3xl md:text-[10rem] font-black tracking-tighter text-white leading-[0.85] mb-8">
              {data.basics.name.split(' ')[0].split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">
                {data.basics.name.split(' ')[1].split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-medium text-white/60 tracking-tight mb-8">
                  <Typewriter
                    words={data.basics.titles}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h2>
                <p className="text-lg text-white/30 leading-relaxed mb-12 font-medium">
                  {data.basics.summary}
                </p>

                <div className="flex flex-wrap gap-6">
                  <motion.a
                    href="#experience"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-emerald-400 transition-all duration-300 shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex items-center gap-3"
                  >
                    View Experience
                    <ArrowRight size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
                  >
                    <Download size={20} />
                    Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading subtitle="Career Journey">Experience</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              {data.experience.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setExpandedExp(i)}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl transition-all duration-500 border",
                    expandedExp === i
                      ? "bg-white/10 border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                      : "bg-transparent border-transparent text-white/40 hover:text-white/60"
                  )}
                >
                  <p className="text-[9px] font-mono uppercase tracking-widest mb-1 opacity-60">{exp.dates}</p>
                  <h3 className="text-lg font-bold tracking-tight">{exp.company}</h3>
                  <p className="text-xs font-medium opacity-60">{exp.role}</p>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={expandedExp}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                >
                  <GlassCard className="min-h-[350px]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">
                          {data.experience[expandedExp].role}
                        </h3>
                        <p className="text-emerald-500 font-mono text-xs tracking-widest">
                          {data.experience[expandedExp].company} • {data.experience[expandedExp].location}
                        </p>
                      </div>

                    </div>

                    <ul className="space-y-4">
                      {data.experience[expandedExp].bullets.map((bullet, j) => {
                        const icons = [Terminal, Cpu, Globe, Database, Zap, Shield];
                        const Icon = icons[j % icons.length];
                        return (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: j * 0.1 }}
                            className="flex gap-4 text-white/40 leading-relaxed text-base items-start"
                          >
                            <div className="mt-1 p-1.5 bg-emerald-500/10 rounded-lg text-emerald-500 shrink-0">
                              <Icon size={14} />
                            </div>
                            {bullet}
                          </motion.li>
                        );
                      })}
                    </ul>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading subtitle="Capabilities">Skills</SectionHeading>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {data.skills[0].items.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#050505]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading subtitle="Portfolio">Selected Works</SectionHeading>

          <div className="-mt-16 space-y-50">
            {data.projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="w-full lg:w-[60%] relative group">
                  <div className="absolute -inset-10 bg-emerald-500/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  <div className="relative z-10 overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/10 p-2 md:p-4 transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-emerald-500/30">
                    <Link
                      to={project.demo}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-xl shadow-2xl transition-all duration-700"
                        style={{ maxHeight: '70vh', objectFit: 'contain' }}
                        referrerPolicy="no-referrer"
                      />
                    </Link>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[40%] space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-emerald-500 font-mono text-sm tracking-[0.4em] font-bold">
                        0{i + 1}
                      </span>
                      <span className="h-[1px] w-12 bg-zinc-800" />
                      <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">{project.stack[0]}</span>
                    </div>

                    <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>

                  <ul className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg list-disc pl-5 space-y-2">
                    {project.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech, index) => (
                      <span key={index} className="text-[10px] text-zinc-600 border border-zinc-800/50 px-2 py-1 rounded uppercase tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="group/link flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white"
                    >
                      <span>View live Website</span>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-emerald-500 group-hover/link:text-black group-hover/link:border-emerald-500 transition-all duration-500">
                        <ArrowUpRight size={20} />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Education & Certs */}
      <section id="education" className="py-20 px-8 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <SectionHeading subtitle="Background">Education</SectionHeading>
            <div className="space-y-12">
              {data.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-12 border-l-2 border-white/5"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-black border-2 border-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest mb-3 block">{edu.dates}</span>
                  <h3 className="text-2xl font-black text-white mb-2">{edu.degree}</h3>
                  <p className="text-white/60 font-medium">{edu.institution}</p>
                  <p className="text-white/30 text-sm mt-2">{edu.location}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading subtitle="Validation">Certifications</SectionHeading>
            <div className="grid grid-cols-1 gap-6">
              {data.basics.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard glow className="flex items-center gap-6 py-6 px-8">
                    <div className="w-14 h-14 flex items-center justify-center bg-emerald-500/10 rounded-2xl text-emerald-500 border border-emerald-500/20">
                      <Award size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight">{cert.name}</h4>
                      <p className="text-sm text-white/30 font-medium">{cert.issuer}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
