'use client';

import { motion } from 'framer-motion';
import React from 'react';

export function AnimatedBackground() {
  const bubbles = React.useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 10 + 5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: `${b.size}rem`,
            height: `${b.size}rem`,
            left: b.x,
            top: b.y,
          }}
          animate={{
            x: [b.x, `${Math.random() * 100}%`, b.x],
            y: [b.y, `${Math.random() * 100}%`, b.y],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
