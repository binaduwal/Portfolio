import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { data } from '../data.js';
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Award,
  Code2,
  Layers,
  Download,
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  Database,
  Zap,
  Shield,
  MessageSquare,
  Send,
  ArrowUpRight,
  Plus,
  ArrowDown,
  Activity
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import SkillCard from './SkillCard.jsx';
import AnimatedBackground from './AnimatedBackground.jsx';
import { Typewriter } from "react-simple-typewriter";

const SectionHeading = ({ children, subtitle }) => (
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

const GlassCard = ({ children, className, glow = false }) => (
  <div className={cn(
    "relative group bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl rounded-3xl p-8 transition-all duration-500 overflow-hidden",
    glow && "hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]",
    className
  )}>
    {/* Subtle inner glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

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
                      <div className="flex flex-wrap gap-2">
                        {data.experience[expandedExp].metrics.map((metric, j) => (
                          <span key={j} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[8px] uppercase tracking-wider text-emerald-500 font-bold">
                            {metric}
                          </span>
                        ))}
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
     <section id="projects" className="py-40 bg-[#020202] text-white relative overflow-hidden selection:bg-emerald-500/30">
  {/* Subtle Technical Grid Background */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98103_1px,transparent_1px),linear-gradient(to_bottom,#10b98103_1px,transparent_1px)] bg-[size:64px_64px]" />
  
  {/* Ambient Light Orbs */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* Refined Minimalist Header */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-48 gap-8 border-b border-white/5 pb-12">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-emerald-500">Inventory_2024</span>
        </div>
        <h2 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase">
          Featured <br /> <span className="text-zinc-800">Outputs</span>
        </h2>
      </div>
      <div className="text-right hidden lg:block">
        <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">
          Based in London / Working Worldwide <br />
          Focus: High-Performance Systems <br />
          Availability: Q3 2024
        </p>
      </div>
    </div>

    {/* Projects: Minimalist Dossier Style */}
    <div className="space-y-64">
      {data.projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center group`}
        >
          
          {/* Visual Canvas: The "Viewport" */}
          <div className="w-full lg:w-3/5 perspective-[2000px]">
            <motion.div 
              whileHover={{ rotateY: i % 2 === 0 ? -8 : 8, rotateX: 4, scale: 1.02 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[16/9] bg-zinc-950 overflow-hidden border border-white/10 group-hover:border-emerald-500/30 transition-colors duration-700 shadow-2xl"
            >
              {/* Image Layer */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-[1.5s] ease-out grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 opacity-40 group-hover:opacity-100"
              />
              
              {/* Blue-Print UI Overlay (appears on hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                 {/* Internal HUD Elements */}
                 <div className="absolute top-4 left-4 font-mono text-[8px] text-emerald-500 px-2 py-1 bg-black/60 border border-emerald-500/20 uppercase tracking-widest">
                   Status: Live_Execution
                 </div>
                 <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="w-8 h-[1px] bg-emerald-500/50 mt-2" />
                    <span className="font-mono text-[8px] text-emerald-500 uppercase">SYS_REF: 0x{i+1}FF</span>
                 </div>
              </div>

              {/* Sophisticated Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-1/2 w-full -top-full group-hover:animate-scan-slow pointer-events-none" />
            </motion.div>
          </div>

          {/* Narrative Side: The "Dossier" */}
          <div className="w-full lg:w-2/5 flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <span className="font-mono text-emerald-500/40 text-sm">/ 0{i + 1}</span>
                <div className="h-[1px] flex-grow bg-zinc-900 group-hover:bg-emerald-500/20 transition-colors" />
              </div>
              
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none group-hover:italic transition-all duration-500">
                {project.title}
              </h3>
            </div>

            <div className="space-y-6">
               <p className="text-zinc-400 text-lg font-light leading-relaxed">
                 {project.bullets[0]}
               </p>
               
               {/* Metadata Pills */}
               <div className="flex flex-wrap gap-2">
                 {project.stack.map((tag, idx) => (
                   <span key={idx} className="text-[10px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 uppercase tracking-tighter hover:border-emerald-500/40 hover:text-emerald-400 transition-all cursor-default">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>

            <div className="pt-8">
              <a 
                href={project.demo} 
                className="group/btn relative inline-flex items-center gap-12"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover/btn:border-emerald-500 transition-all duration-500">
                    <ArrowUpRight size={20} className="text-zinc-400 group-hover/btn:text-emerald-500 group-hover/btn:rotate-45 transition-all" />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">View Production</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover/btn:text-emerald-500 transition-colors">Launch Project</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Section Footer */}
    <footer className="mt-64 flex flex-col items-center">
       <div className="w-[1px] h-32 bg-gradient-to-b from-zinc-800 to-transparent mb-16" />
       
       <button className="group relative px-20 py-8 border border-zinc-900 overflow-hidden">
          <span className="relative z-10 font-mono text-[10px] uppercase tracking-[1em] text-zinc-500 group-hover:text-black transition-colors duration-500">
            Access Full Archive
          </span>
          <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
       </button>
       
       <span className="mt-12 font-mono text-[8px] text-zinc-800 uppercase tracking-[0.8em]">
         Last Updated: May 2024 // System Status: 100%
       </span>
    </footer>
  </div>

  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes scan-slow {
      0% { top: -100%; opacity: 0; }
      50% { opacity: 1; }
      100% { top: 150%; opacity: 0; }
    }
    .group:hover .group-hover\\:animate-scan-slow {
      animation: scan-slow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  `}} />
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
              {data.certifications.map((cert, i) => (
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
      <section id="contact" className="py-20 px-8 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl relative">
          <SectionHeading subtitle="Get In Touch">Contact</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-white leading-tight">
                  Let's create something <span className="text-emerald-500">extraordinary</span> together.
                </h3>
                <p className="text-white/40 text-lg max-w-md">
                  I'm currently available for freelance work and full-time positions. If you have a project in mind, feel free to reach out.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Mail, label: 'Email', value: data.basics.email, href: `mailto:${data.basics.email}` },
                  { icon: Phone, label: 'Phone', value: data.basics.phone, href: `tel:${data.basics.phone}` },
                  { icon: MapPin, label: 'Location', value: data.basics.location, href: '#' },
                  { icon: MessageSquare, label: 'Status', value: 'Available for Work', href: '#' }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl group transition-all hover:bg-white/[0.05] hover:border-emerald-500/30"
                  >
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{item.value}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 md:p-12">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Inquiry"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-[0.2em] text-xs py-5 rounded-xl transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
