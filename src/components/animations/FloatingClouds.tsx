"use client";

import { useEffect, useState } from "react";

type Shadow = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

const COLOR = "#2bc2fe";

export default function FloatingShadowsPreview() {
  const [shadows, setShadows] = useState<Shadow[]>([]);

  useEffect(() => {
    const createShadow = (): Shadow => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 140 + Math.random() * 180,
      duration: 3.5 + Math.random() * 1.5,
      delay: Math.random() * 2,
    });

    // eslint-disable-next-line
    setShadows(Array.from({ length: 8 }, createShadow));
  }, []);

  return (
    <>
      {shadows.map((shadow) => (
        <div
          key={shadow.id}
          className="absolute rounded-full"
          style={{
            left: `${shadow.x}%`,
            top: `${shadow.y}%`,
            width: shadow.size,
            height: shadow.size,
            background: COLOR,
            filter: `blur(100px) drop-shadow(0 0 120px ${COLOR})`,
            animation: `linearFade ${shadow.duration}s linear infinite`,
            animationDelay: `${shadow.delay}s`,
            willChange: "opacity",
          }}
        />
      ))}
    </>
  );
}
