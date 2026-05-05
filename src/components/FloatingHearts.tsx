import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

interface ParticleProps {
  id: number;
  x: number;
  scale: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'heart' | 'sparkle' | 'bird';
  color: string;
}

export function FloatingHearts() {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    const colors = ['text-rosegold/50', 'text-gold/50', 'text-white/70', 'text-blush/80'];
    const generateParticles = () => {
      const newParticles = Array.from({ length: 40 }).map((_, i) => {
        const rand = Math.random();
        let type: ParticleProps['type'] = 'heart';
        if (rand > 0.8) type = 'sparkle';
        else if (rand > 0.6) type = 'bird';

        return {
          id: i,
          x: Math.random() * 100, 
          scale: Math.random() * 0.6 + 0.3, 
          duration: Math.random() * 20 + 15, 
          delay: Math.random() * 10, 
          opacity: Math.random() * 0.5 + 0.2, 
          type,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute bottom-[-50px] ${p.color} drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]`}
          initial={{ x: `${p.x}vw`, y: 0, scale: p.scale, opacity: 0, filter: "blur(1px)", rotate: 0 }}
          animate={{
            y: "-120vh",
            x: [`${p.x}vw`, `${p.x + (Math.random() * 15 - 7.5)}vw`, `${p.x - (Math.random() * 15 - 7.5)}vw`, `${p.x}vw`],
            opacity: [0, p.opacity, p.opacity, 0],
            rotate: p.type === 'bird' ? [0, Math.random() * 10 - 5, Math.random() * -10 + 5, 0] : [0, 180, 360]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {p.type === 'heart' ? (
            <Heart fill="currentColor" stroke="none" />
          ) : p.type === 'sparkle' ? (
            <Sparkles fill="currentColor" stroke="none" />
          ) : (
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="drop-shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22,12 c-2.4-1.2-5.7-0.7-7.4,1.1c-0.2-1.9-1.9-3.4-3.6-4.2C9.5,8.1,7.2,8.8,5.9,10.2C4,12.2,2,11.2,2,11.2 c0,0,0.6,2.3,3.1,3.4c2.5,1.1,5.2-1.4,7.4-0.1C14.7,15.8,19,16,22,12z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
