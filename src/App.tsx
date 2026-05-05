import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { i18n, type Language } from "./i18n";
import { Intro } from "./components/Intro";
import { FloatingHearts } from "./components/FloatingHearts";
import { RosePetals } from "./components/RosePetals";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { WaitIsOver } from "./components/WaitIsOver";
import { EventDetails } from "./components/EventDetails";
import { Countdown } from "./components/Countdown";
import { Gallery } from "./components/Gallery";
import { Blessings } from "./components/Blessings";
import { Footer } from "./components/Footer";
import { Globe, Sparkles, Heart } from "lucide-react";

import { SendWishes } from "./components/SendWishes";

const sparklesData = Array.from({ length: 15 }).map(() => ({
  left: Math.random() * 100 + 'vw',
  top: Math.random() * 100 + 'vh',
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5
}));

const heartsData = Array.from({ length: 10 }).map((_, i) => ({
  left: Math.random() * 100 + 'vw',
  top: Math.random() * 100 + 'vh',
  duration: Math.random() * 12 + 12,
  delay: Math.random() * 8,
  sinOffset: Math.sin(i) * 50
}));

export default function App() {
  const [entered, setEntered] = useState(false);
  const [langCode, setLangCode] = useState<Language>('en');
  const [customWishes, setCustomWishes] = useState<string[]>([]);

  const lang = i18n[langCode];

  const toggleLanguage = () => {
    setLangCode(prev => prev === 'en' ? 'ta' : 'en');
  };

  const handleAddWish = (wish: string) => {
    setCustomWishes(prev => [...prev, wish]);
  };

  return (
    <main className="w-full min-h-screen relative font-sans text-gray-800 bg-transparent overflow-x-hidden">
      {/* Super Elegant Premium Engagement Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none flex items-center justify-center bg-[#FDFBF7]">
        {/* Dynamic animated mesh gradient */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#f4e0e4] mix-blend-multiply blur-[100px] animate-blob"></div>
          <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#f2ead8] mix-blend-multiply blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#fae6e9] mix-blend-multiply blur-[100px] animate-blob animation-delay-4000"></div>
        </div>

        {/* SVG noise texture for premium paper feel */}
        <div className="absolute inset-0 opacity-[0.35] mix-blend-overlay" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

        {/* Floating Gold Sparkles */}
        {sparklesData.map((data, i) => (
          <motion.div
             key={`sparkle-${i}`}
             className="absolute text-gold/50"
             style={{ left: data.left, top: data.top }}
             animate={{
               y: [0, -100, -200],
               rotate: [0, 90, 180],
               scale: [0, 1, 0],
             }}
             transition={{
               duration: data.duration,
               repeat: Infinity,
               ease: "linear",
               delay: data.delay
             }}
          >
            <Sparkles className="w-3 h-3 xl:w-4 xl:h-4" />
          </motion.div>
        ))}

        {/* Floating Rosegold Hearts */}
        {heartsData.map((data, i) => (
          <motion.div
             key={`heart-${i}`}
             className="absolute text-rosegold/40"
             style={{ left: data.left, top: data.top }}
             animate={{
               y: [0, -150, -300],
               x: [0, data.sinOffset, 0],
               rotate: [-20, 20, -20],
               scale: [0, 0.8, 0],
             }}
             transition={{
               duration: data.duration,
               repeat: Infinity,
               ease: "easeInOut",
               delay: data.delay
             }}
          >
            <Heart strokeWidth={1} className="w-4 h-4 xl:w-5 xl:h-5 fill-current" />
          </motion.div>
        ))}
        
        {/* Elegant Corner Ornaments */}
        <svg className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 opacity-[0.15] pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C40 0 70 30 70 70C70 85 60 100 60 100C60 100 65 75 40 50C15 25 0 30 0 30V0Z" fill="#b76e79"/>
          <path d="M0 0C60 0 100 40 100 100H85C85 50 50 15 0 15V0Z" fill="#d4af37"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 opacity-[0.15] pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0C40 0 70 30 70 70C70 85 60 100 60 100C60 100 65 75 40 50C15 25 0 30 0 30V0Z" fill="#b76e79"/>
          <path d="M0 0C60 0 100 40 100 100H85C85 50 50 15 0 15V0Z" fill="#d4af37"/>
        </svg>
      </div>
      <AnimatePresence>
        {!entered && (
          <Intro key="intro" onEnter={() => setEntered(true)} lang={lang} />
        )}
      </AnimatePresence>

      {entered && (
        <div className="relative">
          <FloatingHearts />
          <RosePetals />
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-40 p-3 bg-white/50 backdrop-blur-md border border-white rounded-full shadow-xl text-rosegold hover:bg-rosegold hover:text-white transition-all flex items-center gap-2 font-serif"
            aria-label="Toggle Language"
          >
            <Globe className="w-5 h-5" />
            <span>{langCode === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>


          <Hero lang={lang} />
          
          <Story lang={lang} />

          <Blessings lang={lang} customWishes={customWishes} />
          
          <WaitIsOver />
          
          <EventDetails lang={lang} />
          
          <Countdown lang={lang} />
          
          <Gallery lang={lang} />

          <SendWishes lang={lang} onAddWish={handleAddWish} />
          
          <Footer lang={lang} />
        </div>
      )}
    </main>
  );
}

