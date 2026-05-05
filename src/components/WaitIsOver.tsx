import { motion } from "motion/react";

const LeafCornerTopLeft = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
    <motion.path 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      d="M-20,-20 Q80,20 150,150" stroke="#d4c3b3" strokeWidth="2" fill="none"
    />
    <motion.path 
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.8 }}
      transition={{ duration: 1, delay: 0.5 }}
      d="M30,30 C60,10 80,40 60,60 C40,80 10,60 30,30 Z" fill="#e1cec1" 
    />
    <motion.path 
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.9 }}
      transition={{ duration: 1, delay: 0.7 }}
      d="M70,80 C110,60 130,100 100,120 C70,140 40,110 70,80 Z" fill="#d4c3b3" 
    />
    <motion.path 
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.7 }}
      transition={{ duration: 1, delay: 0.9 }}
      d="M10,90 C40,70 60,110 40,130 C20,150 -10,120 10,90 Z" fill="#c4b1a1" 
    />
    <motion.path 
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.8 }}
      transition={{ duration: 1, delay: 1.1 }}
      d="M100,30 C130,10 160,50 130,70 C100,90 70,60 100,30 Z" fill="#e8d8cb" 
    />
    <motion.path 
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.6 }}
      transition={{ duration: 1, delay: 1.3 }}
      d="M140,100 C170,80 190,130 160,150 C130,170 110,130 140,100 Z" fill="#d4c3b3" 
    />
  </svg>
);

export function WaitIsOver() {
  return (
    <section className="relative w-full min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden bg-[#fdfbf8]">
      
      {/* Top Left Decoration */}
      <motion.div 
        initial={{ opacity: 0, x: -50, y: -50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[-20px] left-[-20px] w-64 h-64 md:w-[400px] md:h-[400px] origin-top-left pointer-events-none"
      >
        <LeafCornerTopLeft />
      </motion.div>

      {/* Bottom Right Decoration */}
      <motion.div 
        initial={{ opacity: 0, x: 50, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-[-20px] right-[-20px] w-64 h-64 md:w-[400px] md:h-[400px] origin-bottom-right rotate-180 pointer-events-none"
      >
        <LeafCornerTopLeft />
      </motion.div>

      <div className="w-full max-w-5xl mx-auto flex flex-col relative z-10 px-6">
        
        {/* "Wait Is Over" - Top Right */}
        <div className="w-full flex justify-end md:pr-12 lg:pr-24 mb-16 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-right"
          >
            <h2 className="font-script text-6xl md:text-8xl lg:text-9xl text-[#4a3e38] leading-[1.1] drop-shadow-sm flex flex-col">
              <span>Wait Is</span>
              <span className="pr-4 md:pr-12">Over</span>
            </h2>
          </motion.div>
        </div>

        {/* 3D Rings Image / Animation - Center */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative my-8 md:my-0 z-20 flex justify-center items-center w-full"
        >
          {/* Subtle glow behind rings */}
          <div className="absolute w-[200px] h-[200px] bg-yellow-600/10 rounded-full blur-[40px]"></div>
          
          <svg viewBox="0 0 300 200" fill="none" className="w-[280px] h-[190px] md:w-[400px] md:h-[260px] lg:w-[450px] lg:h-[300px] drop-shadow-[0_15px_25px_rgba(180,140,40,0.3)]">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="30%" stopColor="#fff6d5" />
                <stop offset="50%" stopColor="#cca127" />
                <stop offset="80%" stopColor="#fdf3c6" />
                <stop offset="100%" stopColor="#a37e1b" />
              </linearGradient>
              <linearGradient id="goldGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="40%" stopColor="#fff6d5" />
                <stop offset="100%" stopColor="#b88c22" />
              </linearGradient>
            </defs>
            
            {/* Left Ring (Back Arc) */}
            <path d="M 50 110 A 70 35 0 0 1 190 110" stroke="url(#goldGradient)" strokeWidth="15" fill="none" opacity="0.6" />
            
            {/* Right Ring (Full) */}
            <ellipse cx="180" cy="120" rx="60" ry="30" stroke="url(#goldGradient2)" strokeWidth="14" />
            <ellipse cx="180" cy="120" rx="55" ry="27" stroke="#fff" strokeWidth="1" opacity="0.4" />
            
            {/* Left Ring (Front Arc) - overlapping right ring */}
            <path d="M 50 110 A 70 35 0 0 0 190 110" stroke="url(#goldGradient)" strokeWidth="15" fill="none" strokeLinecap="round" />
            
            {/* Inner highlight for 3D effect */}
            <path d="M 56 110 A 64 30 0 0 0 184 110" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
            
            {/* Diamond / Solitaire Setting on Left Ring */}
            <g transform="translate(10, 5)">
              {/* Diamond Base Highlights */}
              <path d="M 95 65 L 110 45 L 125 65 L 115 85 L 105 85 Z" fill="#e5e7eb" />
              <path d="M 95 65 L 110 45 L 125 65 Z" fill="#ffffff" />
              <path d="M 100 55 L 110 45 L 120 55 Z" fill="#f3f4f6" />
              <path d="M 100 55 L 110 65 L 120 55 Z" fill="#d1d5db" />
              <path d="M 110 45 L 110 65" stroke="#e5e7eb" strokeWidth="1.5" />
              
              {/* Shiny edges */}
              <path d="M 95 65 L 115 85" stroke="#fff" strokeWidth="1" />
              <path d="M 125 65 L 105 85" stroke="#9ca3af" strokeWidth="1" />
              
              {/* Prongs holding diamond */}
              <path d="M 92 70 L 105 85" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
              <path d="M 128 70 L 115 85" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
              <path d="M 110 90 L 110 82" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
              
              {/* Big central sparkle */}
              <circle cx="110" cy="55" r="3" fill="#ffffff" filter="blur(1px)"/>
              <path d="M 110 45 L 110 65 M 100 55 L 120 55" stroke="#ffffff" strokeWidth="1" />
            </g>
          </svg>
          
          {/* Animated sparkles */}
          <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 90, 180] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[25%] left-[38%] text-white">✨</motion.div>
          <motion.div animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5], rotate: [0, -90, -180] }} transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[35%] right-[32%] text-yellow-300">✨</motion.div>
        </motion.div>

        {/* "Date Has Been Fixed" - Bottom Left */}
        <div className="w-full flex justify-start md:pl-12 lg:pl-24 mt-16 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <h2 className="font-script text-5xl md:text-7xl lg:text-8xl text-[#4a3e38] leading-[1.1] drop-shadow-sm flex flex-col">
              <span>Date Has</span>
              <span className="pl-4 md:pl-12">Been Fixed</span>
            </h2>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
