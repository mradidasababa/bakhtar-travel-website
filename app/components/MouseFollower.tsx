"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [hover, setHover] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, {
    stiffness: 400,
    damping: 30,
    mass: 0.4,
  });

  const smoothY = useSpring(y, {
    stiffness: 400,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      document.querySelectorAll("a,button").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [x, y]);

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: hover ? 40 : 28,
          height: hover ? 40 : 28,
          opacity: hover ? 0.45 : 0.22,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-xl"
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: hover ? 1.8 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]"
      />
    </>
  );
}