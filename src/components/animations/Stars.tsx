"use client";

import { motion } from "framer-motion";

export const Stars = () => {
  /* eslint-disable react-hooks/purity */
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 2,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
  }));
  /* eslint-enable react-hooks/purity */
  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-[#5dd3ff]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `
                    0 0 ${star.size * 4}px rgba(93, 211, 255, 1),
                    0 0 ${star.size * 8}px rgba(93, 211, 255, 0.8),
                    0 0 ${star.size * 12}px rgba(93, 211, 255, 0.6),
                    0 0 ${star.size * 16}px rgba(93, 211, 255, 0.4),
                    0 0 ${star.size * 20}px rgba(93, 211, 255, 0.2)
                  `,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
