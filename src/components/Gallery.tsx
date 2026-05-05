import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery({ lang }: { lang: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    
    { 
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop", 
      caption: "Us 💕",
      quote: "Every moment with you is a beautiful memory 💖"
    },
    { 
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", 
      caption: "My Everything ❤️",
      quote: "You are my today and all of my tomorrows."
    },
    { 
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop", 
      caption: "Together ✨",
      quote: "A million times over, I will always choose you."
    },
    { 
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", 
      caption: "Soulmates 🥂",
      quote: "With you, I am home."
    },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-24 px-6 overflow-hidden bg-blush/30 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-script text-center text-rosegold mb-16 px-4 drop-shadow-sm"
        >
          {lang.galleryTitle}
        </motion.h2>

        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center -mx-4 md:mx-0">
          {images.map((img, index) => {
            let diff = index - currentIndex;

            // Optional wrap-around logic for smaller hops, but a continuous line is simpler:
            // The rewind from end to start will just slide back smoothly.
            const isActive = diff === 0;

            return (
              <motion.div
                key={index}
                animate={{
                  x: `${diff * 115}%`,
                  scale: isActive ? 1 : 0.85 - Math.abs(diff) * 0.05,
                  opacity: isActive ? 1 : 0.6 - Math.abs(diff) * 0.2,
                  zIndex: images.length - Math.abs(diff)
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute w-[280px] md:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden ${isActive ? 'shadow-[0_20px_50px_rgba(183,110,121,0.3)] cursor-grab' : 'shadow-lg cursor-pointer'}`}
                style={{ pointerEvents: Math.abs(diff) <= 1 ? 'auto' : 'none' }}
                onClick={() => setCurrentIndex(index)}
              >
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover select-none" 
                  draggable={false}
                />
                
                {/* Overlay only for active card */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#612c36]/90 via-[#612c36]/30 to-transparent flex flex-col justify-end p-6 md:p-8 pointer-events-none"
                  >
                    <p className="text-white font-serif text-lg md:text-xl leading-relaxed italic mb-3 drop-shadow-md">
                      "{img.quote}"
                    </p>
                    <p className="font-script text-3xl md:text-4xl text-rosegold drop-shadow-sm">{img.caption}</p>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex gap-6 mt-12 z-20">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="p-4 rounded-full bg-white/70 text-rosegold hover:bg-rosegold hover:text-white transition-colors backdrop-blur-md shadow-lg border border-rosegold/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="p-4 rounded-full bg-white/70 text-rosegold hover:bg-rosegold hover:text-white transition-colors backdrop-blur-md shadow-lg border border-rosegold/20"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
