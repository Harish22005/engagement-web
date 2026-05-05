import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ButterflyProps {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  scale: number;
  color: string;
}

export function Butterflies() {
  const [butterflies, setButterflies] = useState<ButterflyProps[]>([]);

  useEffect(() => {
    const colors = [
      '#e11d48', '#be123c', '#9f1239', // Reds/Pinks
      '#ea580c', '#c2410c', '#9a3412', // Oranges
      '#ca8a04', '#a16207', '#854d0e', // Golds
      '#4338ca', '#3730a3', '#312e81', // Deep Blue
    ];
    
    const generateButterflies = () => {
      const newButterflies = Array.from({ length: 40 }).map((_, i) => {
        const startLeft = Math.random() > 0.5;
        const startX = startLeft ? -20 - Math.random() * 20 : 120 + Math.random() * 20;
        const startY = Math.random() * 80 + 10;
        const endX = startLeft ? 120 + Math.random() * 20 : -20 - Math.random() * 20;
        const endY = Math.random() * 100;
        return {
          id: i,
          startX,
          startY,
          endX,
          endY,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 15,
          scale: Math.random() * 0.5 + 0.3, 
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      });
      setButterflies(newButterflies);
    };

    generateButterflies();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]" style={{ perspective: '1000px' }}>
      {butterflies.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          initial={{ 
            x: `${b.startX}vw`, 
            y: `${b.startY}vh`, 
            scale: b.scale, 
            opacity: 0,
            rotateX: 60,
          }}
          animate={{
            x: [`${b.startX}vw`, `${(b.startX + b.endX)/2 + (Math.random()*20 - 10)}vw`, `${b.endX}vw`],
            y: [`${b.startY}vh`, `${(b.startY + b.endY)/2 + (Math.random()*40 - 20)}vh`, `${b.endY}vh`],
            opacity: [0, 1, 1, 0],
            rotateZ: b.startX < b.endX ? [10, Math.random()*40 + 10, 10] : [-10, Math.random()*-40 - 10, -10],
            rotateY: b.startX < b.endX ? 0 : 180,
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "linear",
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Group wrapper to add continuous fluttering rotation if needed */}
          <motion.div 
            style={{ transformStyle: 'preserve-3d', position: 'relative' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Wing Left - Path gives butterfly shape */}
            <motion.div
              className="absolute origin-right drop-shadow-md"
              style={{ width: '20px', height: '24px', left: '-20px' }}
              animate={{ rotateY: [0, 60, 0] }}
              transition={{ duration: 0.12 + Math.random() * 0.05, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: b.color }}>
                <path d="M100,0 C70,10 40,40 100,50 C40,60 80,90 100,100 C100,100 0,60 0,50 C0,40 100,0 100,0 Z" />
              </svg>
            </motion.div>
            
            {/* Wing Right */}
            <motion.div
              className="absolute origin-left drop-shadow-md"
              style={{ width: '20px', height: '24px', left: '0px' }}
              animate={{ rotateY: [0, -60, 0] }}
              transition={{ duration: 0.12 + Math.random() * 0.05, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: b.color }}>
                <path d="M0,0 C30,10 60,40 0,50 C60,60 20,90 0,100 C0,100 100,60 100,50 C100,40 0,0 0,0 Z" />
              </svg>
            </motion.div>
            
            {/* Body */}
            <div className="absolute top-[2px] left-[-2px] w-[4px] h-[20px] bg-black/80 rounded-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
