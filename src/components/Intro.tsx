import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

interface IntroProps {
  onEnter: () => void;
  lang: any;
}

export function Intro({ onEnter, lang }: IntroProps) {
  const handleEnter = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#fae6e9', '#b76e79', '#f7e7ce', '#d4af37', '#ffffff']
    });
    onEnter();
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blush via-white to-champagne text-rosegold"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center space-y-6"
      >
        <h1 className="font-script text-4xl md:text-6xl text-rosegold mb-2">
          {lang.intro1}
        </h1>
        <h2 className="font-serif text-2xl md:text-3xl text-rosegold/80 fade-in max-w-sm mx-auto">
          {lang.intro2}
        </h2>

        <motion.button
          onClick={handleEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 bg-white/50 border border-rosegold text-rosegold rounded-full font-serif text-xl shadow-[0_0_15px_rgba(183,110,121,0.2)] hover:bg-rosegold hover:text-white transition-all duration-500"
        >
          {lang.openBtn}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
