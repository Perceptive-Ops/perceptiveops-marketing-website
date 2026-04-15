import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type StackedDeckSliderProps<T> = {
  items: T[];
  renderCard: (
    item: T,
    state: { isActive: boolean; index: number; position: number },
  ) => ReactNode;
  onActiveIndexChange?: (i: number) => void;
  className?: string;
  cardClassName?: string;
  /** When true, suppresses the dots/arrows UI (for compact embeds). */
  minimal?: boolean;
};

export function StackedDeckSlider<T>({
  items,
  renderCard,
  onActiveIndexChange,
  className,
  cardClassName,
  minimal = false,
}: StackedDeckSliderProps<T>) {
  const [active, setActive] = useState(0);
  const dragDistanceRef = useRef(0);

  // Notify parent when active changes
  useEffect(() => {
    onActiveIndexChange?.(active);
  }, [active, onActiveIndexChange]);

  const advance = () => setActive((i) => (i + 1) % items.length);
  const retreat = () => setActive((i) => (i - 1 + items.length) % items.length);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") advance();
      if (e.key === "ArrowLeft") retreat();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const handleDragEnd = (_e: unknown, info: PanInfo) => {
    dragDistanceRef.current = Math.abs(info.offset.x);
    if (info.offset.x < -80 || info.velocity.x < -500) advance();
    else if (info.offset.x > 80 || info.velocity.x > 500) retreat();
    // reset after a tick so click handlers can check it
    setTimeout(() => (dragDistanceRef.current = 0), 50);
  };

  const suppressClickIfDragging: React.MouseEventHandler = (e) => {
    if (dragDistanceRef.current > 5) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Ambient shadow beneath the deck */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 bottom-2 h-14 rounded-[100%] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(19,27,46,0.35), transparent 70%)",
        }}
      />

      <div className="relative w-full" style={{ perspective: 1800 }}>
        <div
          className="relative mx-auto w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {items.map((item, idx) => {
            // position: 0 = active, 1 = next, 2 = next+1, etc.
            const raw = idx - active;
            const position =
              raw < 0 ? raw + items.length : raw; // wrap positive
            const isActive = position === 0;

            // styling by stack position
            let y = 0;
            let scale = 1;
            let rotate = 0;
            let opacity = 1;
            let z = items.length;

            if (position === 1) {
              y = 26;
              scale = 0.94;
              rotate = -2.2;
              opacity = 0.9;
              z = items.length - 1;
            } else if (position === 2) {
              y = 52;
              scale = 0.88;
              rotate = 3;
              opacity = 0.7;
              z = items.length - 2;
            } else if (position > 2) {
              y = 70;
              scale = 0.84;
              rotate = 0;
              opacity = 0;
              z = 0;
            }

            return (
              <motion.div
                key={idx}
                className={cn(
                  "absolute inset-x-0 top-0 will-change-transform",
                  cardClassName,
                )}
                style={{ zIndex: z }}
                initial={false}
                animate={{ y, scale, rotate, opacity }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 32,
                  mass: 0.9,
                }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.55}
                onDragEnd={handleDragEnd}
                onClickCapture={suppressClickIfDragging}
              >
                {renderCard(item, { isActive, index: idx, position })}
              </motion.div>
            );
          })}

          {/* Spacer to give container height (clone of first card, invisible) */}
          <div aria-hidden className="invisible">
            {renderCard(items[0], { isActive: true, index: 0, position: 0 })}
          </div>
        </div>
      </div>

      {!minimal && (
        <div className="relative z-10 mt-12 flex items-center justify-between gap-6">
          <button
            type="button"
            onClick={retreat}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/70 backdrop-blur-sm text-slate-700 transition hover:-translate-x-0.5 hover:border-slate-900 hover:text-slate-900"
            aria-label="Previous case study"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-3">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to card ${i + 1}`}
                className="relative h-[3px] w-10 overflow-hidden rounded-full bg-slate-200"
              >
                <span
                  className={cn(
                    "absolute inset-y-0 left-0 origin-left bg-slate-900 transition-transform duration-500",
                    i === active ? "w-full" : "w-0",
                  )}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={advance}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white transition hover:translate-x-0.5 hover:bg-[#131b2e]"
            aria-label="Next case study"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

export default StackedDeckSlider;
