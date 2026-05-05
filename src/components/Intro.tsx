import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { useState } from "react";
import { Sparkles, Mail } from "lucide-react";
import { Butterflies } from "./Butterflies";

interface IntroProps {
  onEnter: () => void;
  lang: any;
  key?: string;
}

export function Intro({ onEnter, lang }: IntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    setIsOpening(true);
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.5 },
      colors: ['#fae6e9', '#b76e79', '#f7e7ce', '#d4af37', '#ffffff']
    });
    
    setTimeout(() => {
      onEnter();
    }, 2200); 
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1718] to-[#2c2022]">
      
      {/* Background layer outside the card fades out slightly when open */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        initial={{ scale: 1.1 }}
        animate={{ scale: isOpening ? 1.2 : 1, opacity: isOpening ? 0 : 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518218698305-bdcd1d960d7c?q=80&w=2000&auto=format&fit=crop')" }}
      />
      
      {!isOpening && <Butterflies />}

      <AnimatePresence>
        {isOpening && (
          <motion.div 
            className="absolute inset-0 z-[110] flex items-center justify-center overflow-hidden bg-black pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Tunnel effect */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.01, opacity: 0 }}
                animate={{ scale: 25, opacity: [0, 1, 0] }}
                transition={{ duration: 1.6, delay: i * 0.15, ease: "easeIn" }}
                className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
              >
                 <div className="w-full h-full border-[12px] border-[#8c4654] bg-[#8c4654]/10 shadow-[inset_0_0_50px_rgba(0,0,0,0.8),0_0_60px_rgba(212,175,55,0.4)] md:border-[16px] backdrop-blur-sm" />
              </motion.div>
            ))}
            
            {/* Final white flash that transitions to the next screen */}
            <motion.div 
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 100 }}
               transition={{ duration: 1.2, delay: 1, ease: "easeIn" }}
               className="absolute w-20 h-20 bg-[#fae6e9] rounded-full z-20 blur-[2px]"
            />
          </motion.div>
        )}
        
        {!isOpening && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
              exit: { opacity: 0, scale: 1.2, filter: "blur(20px)", transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="relative w-full max-w-sm md:max-w-md mx-auto aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#e6c1c5] to-[#f4d8dc] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
          >
            {/* Background layer */}
            <motion.div 
              variants={{
                hidden: { scale: 1.2, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
              }}
              className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548502624-9dfbeb079075?q=80&w=2000&auto=format&fit=crop')" }}
            />
            
            {/* Mid Layer (Bottom Hills/Flowers) */}
            <motion.div
              variants={{
                hidden: { y: "50%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#612c36]/90 to-transparent z-10"
            />

            {/* Foreground Base Shapes */}
            <motion.div
              variants={{
                hidden: { y: "100%", opacity: 0, scale: 0.8 },
                visible: { y: "15%", opacity: 1, scale: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 } }
              }}
              className="absolute bottom-0 left-0 w-full flex justify-center z-20 opacity-90"
            >
              <svg viewBox="0 0 200 100" className="w-[150%] h-auto drop-shadow-2xl fill-[#8c4654]">
                <path d="M0,100 C30,70 70,50 100,50 C130,50 170,70 200,100 L0,100 Z" />
                <path d="M-20,100 C20,60 60,80 100,40 C140,80 180,60 220,100 L-20,100 Z" className="fill-[#612c36] opacity-80" />
              </svg>
            </motion.div>

            {/* Foreground Left (Trees/Leaves) */}
            <motion.div
              variants={{
                hidden: { x: "-50%", opacity: 0 },
                visible: { x: "0%", opacity: 1, transition: { duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.6 } }
              }}
              className="absolute bottom-0 -left-6 z-30 w-32 md:w-40 h-64 md:h-80"
            >
              <svg viewBox="0 0 100 200" className="w-full h-full fill-[#3a181f] drop-shadow-2xl">
                <path d="M0,200 Q20,100 50,0 Q60,30 30,80 Q70,70 40,140 Q80,120 50,200 Z" />
                <path d="M0,200 Q10,120 30,40 Q40,60 20,100 Q50,90 25,160 Q60,150 40,200 Z" className="fill-[#4a222a]" />
              </svg>
            </motion.div>

            {/* Foreground Right (Trees/Leaves) */}
            <motion.div
              variants={{
                hidden: { x: "50%", opacity: 0 },
                visible: { x: "0%", opacity: 1, transition: { duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.8 } }
              }}
              className="absolute bottom-0 -right-4 z-30 w-28 md:w-36 h-56 md:h-72"
            >
              <svg viewBox="0 0 100 200" className="w-full h-full fill-[#3a181f] drop-shadow-2xl translate-x-[-10px]">
                <path d="M100,200 Q80,100 50,0 Q40,30 70,80 Q30,70 60,140 Q20,120 50,200 Z" />
                <path d="M100,200 Q90,120 70,40 Q60,60 80,100 Q50,90 75,160 Q40,150 60,200 Z" className="fill-[#4a222a]" />
              </svg>
            </motion.div>

            {/* Content Text */}
            <motion.div 
              variants={{
                hidden: { y: 20, opacity: 0, scale: 0.95 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 1, delay: 1.2, ease: "easeOut" } }
              }}
              className="absolute inset-x-0 top-0 z-40 flex flex-col items-center justify-start pt-16 md:pt-20 px-6 text-center"
            >
              <span className="text-xs font-sans tracking-[0.4em] text-[#84454f] uppercase mb-4 opacity-90 font-bold drop-shadow-md">
                Discover
              </span>
              <h3 className="text-5xl md:text-6xl font-script text-white drop-shadow-xl mb-4 leading-tight">
                {lang.nameAnusha} <br/> <span className="text-3xl text-rosegold">&amp;</span> <br/> {lang.nameHarish}
              </h3>
              
              <div className="flex gap-2 items-center mb-8">
                <Sparkles className="w-4 h-4 text-gold/80" />
                <p className="text-sm font-sans tracking-widest uppercase text-white/90 drop-shadow-sm font-medium">
                  Love Story
                </p>
                <Sparkles className="w-4 h-4 text-gold/80" />
              </div>
            </motion.div>

            {/* Start Button */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 2, ease: "easeOut" } }
              }}
              className="absolute inset-x-0 bottom-12 z-50 flex justify-center"
            >
              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center rounded-full bg-black/50 backdrop-blur-md p-1 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden group"
              >
                <motion.div 
                  className="bg-gradient-to-br from-[#8c4654] to-rosegold p-3 md:p-4 rounded-full z-10 relative flex items-center justify-center shadow-lg group-hover:shadow-[0_0_15px_rgba(183,110,121,0.6)] transition-shadow duration-300"
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
                <motion.div 
                  initial={{ width: 0, opacity: 0, x: -20 }}
                  animate={{ width: "auto", opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm pl-4 pr-6 flex items-center h-full pt-0.5">
                    {lang.openBtn.replace('💌', '').trim()}
                  </span>
                </motion.div>
              </motion.button>
            </motion.div>
            
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#3a181f]/40 z-30 pointer-events-none mix-blend-multiply" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
