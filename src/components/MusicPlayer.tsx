import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Music, Play, Pause } from "lucide-react";

export function MusicPlayer({ isPlayingInitially, lang }: { isPlayingInitially: boolean, lang: any }) {
  const [isPlaying, setIsPlaying] = useState(isPlayingInitially);
  const [audio] = useState(new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b3/Debussy_-_Clair_de_lune_%28played_by_Cecile_Ousset%29.ogg"));

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;
    
    if (isPlayingInitially) {
      audio.play().catch(e => console.log("Audio autoplay prevented", e));
    }

    return () => {
      audio.pause();
    };
  }, [audio, isPlayingInitially]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log("Audio play prevented", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-40 p-4 bg-white/50 backdrop-blur-md border border-white rounded-full shadow-xl text-rosegold hover:bg-rosegold hover:text-white transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? lang.pauseMusic : lang.playMusic}
    >
      {isPlaying ? (
        <Pause className="w-6 h-6" />
      ) : (
        <Music className="w-6 h-6" />
      )}
    </motion.button>
  );
}
