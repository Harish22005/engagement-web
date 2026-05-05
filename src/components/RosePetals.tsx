import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface PetalProps {
  id: number;
  startX: number;
  endX: number;
  duration: number;
  delay: number;
  scale: number;
  rotation: number;
  rotationX: number;
  rotationY: number;
  color: string;
}

export function RosePetals() {
  const [petals, setPetals] = useState<PetalProps[]>([]);

  useEffect(() => {
    // Beautiful rose petal colors from light pink to deeper pink/rose
    const colors = ['#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d'];
    
    // Generate petals of varying sizes and speeds for depth effect
    const generatePetals = () => {
      const newPetals = Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        startX: Math.random() * 140 - 20, // Slightly off-screen start
        endX: Math.random() * 140 - 20,
        duration: Math.random() * 12 + 12, // Slow, elegant fall (12-24s)
        delay: Math.random() * 20,
        scale: Math.random() * 1.5 + 0.5, // Mixed sizes
        rotation: Math.random() * 360,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[2]" style={{ perspective: '800px' }}>
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-50px]"
          initial={{ 
            x: `${p.startX}vw`, 
            y: -100, 
            scale: p.scale, 
            rotateZ: p.rotation,
            rotateX: p.rotationX,
            rotateY: p.rotationY,
            opacity: 0,
            filter: p.scale > 1.5 ? "blur(2px)" : "blur(0px)" // Depth of field effect
          }}
          animate={{
            y: "110vh",
            x: [`${p.startX}vw`, `${p.startX + (p.endX - p.startX)*0.4}vw`, `${p.endX}vw`],
            rotateZ: [p.rotation, p.rotation + 180, p.rotation + 360],
            rotateX: [p.rotationX, p.rotationX + 180, p.rotationX + 360],
            rotateY: [p.rotationY, p.rotationY + 180, p.rotationY + 360],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{ 
            transformStyle: 'preserve-3d',
            willChange: 'transform, opacity' // Smooth rendering
          }}
        >
          {/* Rose Petal Graphic */}
           <svg 
            width="28" 
            height="28" 
            viewBox="0 0 30 30" 
            fill={p.color} 
            className="drop-shadow-lg opacity-80"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Elegant curved petal shape */}
            <path d="M15,0C22.6,3.6,29,11.3,29,19.3c0,8-9.8,11.5-14.7,10.6C8.8,28.9,0,23.4,0,14.6C0,5.8,7.3-3.6,15,0z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
