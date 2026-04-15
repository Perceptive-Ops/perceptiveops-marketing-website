import { useEffect, useState } from "react";

/**
 * Animates a number from 0 to `end` once `trigger` becomes true.
 * Uses an easeOutExpo curve. Duration in ms.
 */
export const useCountUp = (end: number, trigger: boolean, duration = 1800) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    let frame = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(end * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, trigger, duration]);

  return value;
};

/**
 * Parses a metric string like "200+", "$50M+", "98%", "50K+", "4.2x"
 * into a numeric core + prefix + suffix we can reassemble during count-up.
 * Returns null if no numeric content exists (for pure word metrics).
 */
export const parseMetric = (
  raw: string,
): { prefix: string; number: number; suffix: string; decimals: number } | null => {
  const match = raw.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, number: Number(num), suffix, decimals };
};
