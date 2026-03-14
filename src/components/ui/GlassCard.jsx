import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const GlassCard = ({ children, className, glow = false }) => (
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
