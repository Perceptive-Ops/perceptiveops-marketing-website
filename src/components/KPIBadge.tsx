import React from "react";
import { motion } from "framer-motion";

interface KPIBadgeProps {
  value: string;
  label: string;
  className?: string;
}

export const KPIBadge: React.FC<KPIBadgeProps> = ({ value, label, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`flex flex-col items-center justify-center p-4 rounded-2xl glass-card glass-card-edge ${className}`}
    >
      <span className="text-3xl font-black gradient-text tracking-tighter mb-1">
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
        {label}
      </span>
    </motion.div>
  );
};
