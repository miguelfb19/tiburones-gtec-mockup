"use client";

import { useEffect, useState } from "react";

type Shadow = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
};

const COLOR = "#2bc2fe";

const createShadow = (id: number): Shadow => ({
  id,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 140 + Math.random() * 180,
  duration: 3, // debe coincidir con el keyframe
});

export default function FloatingShadowsPreview() {
  const [shadows, setShadows] = useState<Shadow[]>([]);

  useEffect(() => {
    // eslint-disable-next-line
    setShadows(Array.from({ length: 10 }, (_, i) => createShadow(i)));
  }, []);

  const regenerateShadow = (id: number) => {
    setShadows((prev) =>
      prev.map((s) => (s.id === id ? createShadow(id) : s))
    );
  };

  return (
    <>
      {shadows.map((shadow) => (
        <div
          key={shadow.id}
          onAnimationIteration={() => regenerateShadow(shadow.id)}
          className="absolute rounded-full animate-linearFade pointer-events-none"
          style={{
            left: `${shadow.x}%`,
            top: `${shadow.y}%`,
            width: shadow.size,
            height: shadow.size,
            background: COLOR,
            filter: `blur(60px) drop-shadow(0 0 120px ${COLOR})`,
            animationDuration: `${shadow.duration}s`,
            willChange: "opacity",
            opacity: 0.8,
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}
