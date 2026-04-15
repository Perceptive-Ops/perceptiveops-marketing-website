import React from "react";
import { motion } from "framer-motion";

export const WorkflowMap: React.FC = () => {
  return (
    <div className="relative w-full h-24 flex items-center justify-center overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.05]">
      <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
        <path d="M20 30H180" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="20" cy="30" r="4" fill="white" fillOpacity="0.2" />
        <circle cx="100" cy="30" r="6" fill="white" fillOpacity="0.3" />
        <circle cx="180" cy="30" r="4" fill="white" fillOpacity="0.2" />
        
        <motion.circle
          cx="20"
          cy="30"
          r="3"
          fill="#818cf8"
          animate={{
            cx: [20, 100, 180],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="20"
          cy="30"
          r="3"
          fill="#c084fc"
          animate={{
            cx: [20, 100, 180],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </svg>
    </div>
  );
};
