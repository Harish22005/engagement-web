import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { i18n, type Language } from "./i18n";
import { Intro } from "./components/Intro";
import { FloatingHearts } from "./components/FloatingHearts";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { EventDetails } from "./components/EventDetails";
import { Countdown } from "./components/Countdown";
import { Gallery } from "./components/Gallery";
import { Blessings } from "./components/Blessings";
import { Footer } from "./components/Footer";
import { MusicPlayer } from "./components/MusicPlayer";
import { Globe } from "lucide-react";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [langCode, setLangCode] = useState<Language>('en');

  const lang = i18n[langCode];

  const toggleLanguage = () => {
    setLangCode(prev => prev === 'en' ? 'ta' : 'en');
  };

  return (
    <main className="w-full min-h-screen relative font-sans text-gray-800">
      <AnimatePresence>
        {!entered && (
          <Intro key="intro" onEnter={() => setEntered(true)} lang={lang} />
        )}
      </AnimatePresence>

      {entered && (
        <div className="relative">
          <FloatingHearts />
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-40 p-3 bg-white/50 backdrop-blur-md border border-white rounded-full shadow-xl text-rosegold hover:bg-rosegold hover:text-white transition-all flex items-center gap-2 font-serif"
            aria-label="Toggle Language"
          >
            <Globe className="w-5 h-5" />
            <span>{langCode === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          <MusicPlayer isPlayingInitially={true} lang={lang} />
          
          <Hero lang={lang} />
          
          <Story lang={lang} />

          <Blessings lang={lang} />
          
          <EventDetails lang={lang} />
          
          <Countdown lang={lang} />
          
          <Gallery lang={lang} />
          
          <Footer lang={lang} />
        </div>
      )}
    </main>
  );
}

