import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles } from "lucide-react";

export function Hero({ lang }: { lang: any }) {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518218698305-bdcd1d960d7c?q=80&w=2000&auto=format&fit=crop')",
          y: yBg
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 backdrop-blur-[2px]" />
      </motion.div>

      <motion.div 
        className="z-10 flex flex-col items-center justify-center text-center px-4 w-full mt-10"
        style={{ opacity: opacityText }}
      >
        
        {/* Ring Animation */}
        <div className="flex items-center justify-center mb-8 h-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/40 blur-[20px] w-32 h-32 bg-gold/30 rounded-full"
          />
          
          <motion.div
            initial={{ x: -60, opacity: 0, rotate: -20 }}
            animate={{ x: 10, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
          >
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 4l2 -2l2 2" strokeWidth="2" stroke="var(--color-champagne)"></path>
            </svg>
          </motion.div>
          
          <motion.div
            initial={{ x: 60, opacity: 0, rotate: 20 }}
            animate={{ x: -10, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
          >
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2l2 2l-2 2" strokeWidth="2" stroke="var(--color-champagne)"></path>
            </svg>
          </motion.div>
        </div>

        {/* Names */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-champagne drop-shadow-2xl relative"
        >
          <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-2xl rounded-full" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-5xl md:text-8xl font-script tracking-wide relative z-10 w-full overflow-visible">
            <div className="flex flex-col items-center group">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] group-hover:text-gold transition-colors duration-500 p-4">{lang.nameAnusha}</span>
              <span className="text-sm md:text-lg font-sans font-medium text-white/80 tracking-widest uppercase">{lang.degreeAnusha}</span>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-rosegold mx-6 text-3xl md:text-5xl"
            >
              ❤️
            </motion.div>
            <div className="flex flex-col items-center group">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] group-hover:text-gold transition-colors duration-500 p-4">{lang.nameHarish}</span>
              <span className="text-sm md:text-lg font-sans font-medium text-white/80 tracking-widest uppercase">{lang.degreeHarish}</span>
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex items-center gap-4"
        >
          <Sparkles className="w-5 h-5 text-gold/60" />
          <p className="font-serif text-2xl md:text-4xl text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-light tracking-wide">
            {lang.subtitle}
          </p>
          <Sparkles className="w-5 h-5 text-gold/60" />
        </motion.div>

      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-white/50 text-xs font-sans tracking-[0.2em] uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" 
        />
      </motion.div>
    </section>
  );
}
