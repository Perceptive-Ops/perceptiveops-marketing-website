import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

interface CinematicSliderProps {
  items: any[];
  onActiveIndexChange?: (index: number) => void;
  renderItem: (item: any, isActive: boolean, index: number) => React.ReactNode;
}

export const CinematicSlider: React.FC<CinematicSliderProps> = ({ 
  items, 
  onActiveIndexChange,
  renderItem 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Drag constraints and logic
  const DRAG_BUFFER = 50;
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const handleDragEnd = () => {
    const currentX = x.get();
    const width = containerRef.current?.offsetWidth || 0;
    const cardWidth = width * 0.8; // Assuming 80% width per card
    const gap = 24;
    
    // Calculate which index we've dragged to
    const indexThreshold = (cardWidth + gap) / 2;
    const dragOffset = Math.round(currentX / (cardWidth + gap));
    const newIndex = Math.max(0, Math.min(items.length - 1, Math.abs(dragOffset)));
    
    setActiveIndex(newIndex);
    x.set(-newIndex * (cardWidth + gap));
    onActiveIndexChange?.(newIndex);
  };

  useEffect(() => {
    // Initial position
    const width = containerRef.current?.offsetWidth || 0;
    const cardWidth = width * 0.8;
    const gap = 24;
    x.set(-activeIndex * (cardWidth + gap));
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing px-[10%]">
      <motion.div
        drag="x"
        style={{ x: springX }}
        dragConstraints={{
          left: -((items.length - 1) * (window.innerWidth * 0.8 + 24)),
          right: 0,
        }}
        onDragEnd={handleDragEnd}
        className="flex gap-6 items-center py-10"
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="w-[80vw] md:w-[60vw] lg:w-[50vw] shrink-0"
          >
            {renderItem(item, index === activeIndex, index)}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
