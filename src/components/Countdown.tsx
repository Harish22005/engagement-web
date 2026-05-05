import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Countdown({ lang }: { lang: any }) {
  const targetDate = new Date("2026-05-17T19:00:00+05:30").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: lang.days, value: timeLeft.days },
    { label: lang.hours, value: timeLeft.hours },
    { label: lang.mins, value: timeLeft.minutes },
    { label: lang.secs, value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4 bg-blush/80">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ 
              rotateZ: [0, 180, 180, 360, 360],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.4, 0.5, 0.9, 1] // Pause between flips
            }}
            className="relative w-20 h-28 flex items-center justify-center drop-shadow-[0_10px_20px_rgba(212,175,55,0.4)]"
          >
            {/* Hourglass Frame */}
            <svg viewBox="0 0 100 140" className="w-full h-full absolute inset-0 z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Top Base */}
              <rect x="15" y="5" width="70" height="10" rx="3" fill="#4a2c2a" />
              <rect x="10" y="15" width="80" height="8" rx="2" fill="#3a1c1a" />
              
              {/* Bottom Base */}
              <rect x="15" y="125" width="70" height="10" rx="3" fill="#4a2c2a" />
              <rect x="10" y="117" width="80" height="8" rx="2" fill="#3a1c1a" />

              {/* Pillars */}
              <rect x="15" y="15" width="6" height="110" rx="3" fill="#4a2c2a" />
              <rect x="79" y="15" width="6" height="110" rx="3" fill="#4a2c2a" />

              {/* Glass container */}
              <path d="M 25 23 C 25 23, 25 55, 45 65 C 48 68, 52 68, 55 65 C 75 55, 75 23, 75 23 Z" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
              <path d="M 45 75 C 25 85, 25 117, 25 117 L 75 117 C 75 117, 75 85, 55 75 C 52 72, 48 72, 45 75 Z" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
              
              {/* Reflection */}
               <path d="M 30 30 C 30 30, 30 50, 42 58" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" fill="none" />
               <path d="M 30 110 C 30 110, 30 90, 42 82" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>

            {/* Sand Top */}
            <motion.div 
               className="absolute top-[24px] w-[50px] h-[40px] bg-[#dc143c] overflow-hidden"
               style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)', transformOrigin: 'bottom center' }}
               animate={{
                 scaleY: [1, 0, 0, 1, 1],
                 y: [0, 20, 20, 0, 0]
               }}
               transition={{
                 duration: 6,
                 repeat: Infinity,
                 ease: "linear",
                 times: [0, 0.4, 0.5, 0.9, 1]
               }}
            >
              {/* Inner gradient/sparkle for sand */}
              <div className="w-full h-full bg-gradient-to-br from-[#ff3366] to-[#aa0022] opacity-90 blur-[1px]"></div>
            </motion.div>

            {/* Sand Stream (Falling) */}
            <motion.div
               className="absolute top-[65px] left-[50%] ml-[-2px] w-[3px] h-[30px] bg-[#ff3366] blur-[0.5px]"
               animate={{
                 opacity: [0, 1, 1, 0, 0],
                 scaleY: [0, 1, 1, 0, 0]
               }}
               style={{ transformOrigin: 'top center' }}
               transition={{
                 duration: 6,
                 repeat: Infinity,
                 ease: "linear",
                 times: [0, 0.1, 0.35, 0.4, 1]
               }}
            />

            {/* Sand Bottom */}
            <motion.div 
               className="absolute bottom-[24px] w-[50px] h-[40px] bg-[#dc143c] overflow-hidden"
               style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)', transformOrigin: 'bottom center' }}
               animate={{
                 scaleY: [0, 1, 1, 0, 0],
               }}
               transition={{
                 duration: 6,
                 repeat: Infinity,
                 ease: "linear",
                 times: [0, 0.4, 0.5, 0.9, 1]
               }}
            >
              <div className="w-full h-full bg-gradient-to-tr from-[#880011] to-[#ff3366] opacity-90 blur-[1px] transform translate-y-[10px]"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-script text-rosegold mb-10"
        >
          {lang.countdownTitle}
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-4 md:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full border border-rosegold/30 hover:border-rosegold shadow-xl group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent rounded-full opacity-50 pointer-events-none" />
              <span className="text-4xl md:text-5xl font-serif text-gold font-light tabular-nums drop-shadow-sm group-hover:scale-110 transition-transform duration-500">
                {unit.value.toString().padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm font-sans tracking-widest uppercase text-rosegold/80 font-medium mt-2">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
