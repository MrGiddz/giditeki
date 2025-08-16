
'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

interface Bubble {
    id: number;
    x: string;
    y: string;
    size: number;
    duration: number;
    delay: number;
    animateX: string[];
    animateY: string[];
}

export function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Only run this effect on the client
    if (typeof window !== 'undefined') {
        const generateBubbles = () => Array.from({ length: 150 }).map((_, i) => {
            const x = `${Math.random() * 100}%`;
            const y = `${Math.random() * 100}%`;
            return {
                id: i,
                x: x,
                y: y,
                size: Math.random() * 8 + 4,
                duration: Math.random() * 15 + 15,
                delay: Math.random() * 8,
                animateX: [x, `${Math.random() * 100}%`, x],
                animateY: [y, `${Math.random() * 100}%`, y],
            }
        });
        setBubbles(generateBubbles());
    }
  }, []);

  // Return a placeholder on the server and during the initial client render
  if (bubbles.length === 0) {
    return <div className="absolute inset-0 -z-10 overflow-hidden bg-background"></div>;
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--accent)/0.2),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
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
            x: b.animateX,
            y: b.animateY,
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
