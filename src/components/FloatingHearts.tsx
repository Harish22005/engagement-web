import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface HeartProps {
  id: number;
  x: number;
  scale: number;
  duration: number;
  delay: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    // Generate initial hearts
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // random start horizontal %
        scale: Math.random() * 0.8 + 0.4, // size variation
        duration: Math.random() * 10 + 15, // float duration
        delay: Math.random() * 5, // random start delay
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute bottom-[-50px] text-rosegold/30"
          initial={{ x: `${h.x}vw`, y: 0, scale: h.scale, opacity: 0 }}
          animate={{
            y: "-120vh",
            x: [`${h.x}vw`, `${h.x + 5}vw`, `${h.x - 5}vw`, `${h.x}vw`],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Heart fill="currentColor" stroke="none" />
        </motion.div>
      ))}
    </div>
  );
}
