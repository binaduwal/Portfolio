import React from "react";

export default function InputField({
  label,
  type = "text",
  placeholder,
  textarea = false,
  rows = 4,
  ...props
}) {
  const baseStyles =
    "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500/50 transition-all";

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          className={`${baseStyles} resize-none`}
          {...props}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={baseStyles}
          {...props}
        />
      )}
    </div>
  );
}