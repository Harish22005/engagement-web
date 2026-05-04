import { motion } from "motion/react";
import { Circle } from "lucide-react";

export function Hero({ lang }: { lang: any }) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518218698305-bdcd1d960d7c?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="z-10 flex flex-col items-center justify-center text-center px-4 w-full pt-20">
        
        {/* Ring Animation */}
        <div className="flex items-center justify-center mb-8 h-24">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 10, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="text-gold"
          >
            {/* SVG placeholder for ring 1 */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 4l2 -2l2 2" strokeWidth="2" stroke="var(--color-champagne)"></path>
            </svg>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: -10, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="text-gold"
          >
            {/* SVG placeholder for ring 2 */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2l2 2l-2 2" strokeWidth="2" stroke="var(--color-champagne)"></path>
            </svg>
          </motion.div>
        </div>

        {/* Names */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-champagne drop-shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-4xl md:text-7xl font-script tracking-wide">
            <div className="flex flex-col items-center">
              <span>{lang.nameAnusha}</span>
              <span className="text-sm md:text-lg font-sans font-medium opacity-80 mt-2">{lang.degreeAnusha}</span>
            </div>
            <span className="text-rosegold mx-4 animate-pulse">❤️</span>
            <div className="flex flex-col items-center">
              <span>{lang.nameHarish}</span>
              <span className="text-sm md:text-lg font-sans font-medium opacity-80 mt-2">{lang.degreeHarish}</span>
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="mt-12"
        >
          <p className="font-serif text-xl md:text-3xl text-white/90 drop-shadow-md">
            {lang.subtitle}
          </p>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-champagne/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-champagne/70 to-transparent mx-auto mt-2" />
      </motion.div>
    </section>
  );
}
