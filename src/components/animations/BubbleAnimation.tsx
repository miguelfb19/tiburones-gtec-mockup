import { JSX, useEffect, useState } from "react";

// Tipado de una burbuja
interface BubblePoint {
  id: number;
  x: number;
  y: number;
}

// Demo component: animated bubbles following the cursor (TypeScript)
export const BubbleAnimation = (): JSX.Element => {
  const [points, setPoints] = useState<BubblePoint[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent): void => {
      setPoints((prev) => {
        const next: BubblePoint[] = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: Math.random() },
        ];

        // Limitamos el número de burbujas por performance
        return next.slice(-25);
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>

      {points.map((p, index) => (
        <span
          key={p.id}
          className="fixed pointer-events-none rounded-full animate-bubble"
          style={{
            left: p.x,
            top: p.y,
            width: 20 + index * 0.6,
            height: 20 + index * 0.6,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 12%, rgba(43,194,254,0.55) 35%, rgba(43,194,254,0.35) 55%, rgba(43,194,254,0.15) 70%, rgba(43,194,254,0.05) 100%)",
            boxShadow:
              "inset -4px -6px 10px rgba(0,0,0,0.25), inset 4px 4px 8px rgba(255,255,255,0.6), 0 8px 20px rgba(43,194,254,0.35)",
            transform: "translate(-50%, -50%)",
            animationDelay: `${index * 0.02}s`,
          }}
        />
      ))}
    </>
  );
}
