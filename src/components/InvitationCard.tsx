import { motion } from "motion/react";

export function InvitationCard({ lang }: { lang: any }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
      className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-[#e6c1c5] to-[#f4d8dc] shadow-[0_20px_50px_rgba(183,110,121,0.3)] cursor-pointer group"
    >
      {/* Background layer */}
      <motion.div 
        variants={{
          hidden: { scale: 1.2, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
        }}
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548502624-9dfbeb079075?q=80&w=2000&auto=format&fit=crop')" }}
      />
      
      {/* Mid Layer (Bottom Hills/Flowers) */}
      <motion.div
        variants={{
          hidden: { y: "50%", opacity: 0 },
          visible: { y: "0%", opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
        }}
        className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-rosegold/80 to-transparent z-10"
      />

      <motion.div
         variants={{
          hidden: { y: "100%", opacity: 0, scale: 0.8 },
          visible: { y: "20%", opacity: 1, scale: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 } }
        }}
        className="absolute bottom-0 left-0 w-full flex justify-center z-20 opacity-80"
      >
        <svg viewBox="0 0 200 100" className="w-[150%] h-auto drop-shadow-lg fill-[#d48b96]">
          <path d="M0,100 C30,70 70,50 100,50 C130,50 170,70 200,100 L0,100 Z" />
          <path d="M-20,100 C20,60 60,80 100,40 C140,80 180,60 220,100 L-20,100 Z" className="fill-[#b76e79] opacity-70" />
        </svg>
      </motion.div>

      {/* Foreground Left (Trees/Leaves) */}
      <motion.div
        variants={{
          hidden: { x: "-50%", opacity: 0 },
          visible: { x: "0%", opacity: 1, transition: { duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.6 } }
        }}
        className="absolute bottom-0 -left-6 z-30 w-32 h-64"
      >
        <svg viewBox="0 0 100 200" className="w-full h-full fill-[#84454f] drop-shadow-2xl">
          <path d="M0,200 Q20,100 50,0 Q60,30 30,80 Q70,70 40,140 Q80,120 50,200 Z" />
          <path d="M0,200 Q10,120 30,40 Q40,60 20,100 Q50,90 25,160 Q60,150 40,200 Z" className="fill-[#a65d68]" />
        </svg>
      </motion.div>

      {/* Foreground Right (Trees/Leaves) */}
      <motion.div
        variants={{
          hidden: { x: "50%", opacity: 0 },
          visible: { x: "0%", opacity: 1, transition: { duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.8 } }
        }}
        className="absolute bottom-0 -right-4 z-30 w-28 h-56"
      >
        <svg viewBox="0 0 100 200" className="w-full h-full fill-[#84454f] drop-shadow-2xl translate-x-[-10px]">
           <path d="M100,200 Q80,100 50,0 Q40,30 70,80 Q30,70 60,140 Q20,120 50,200 Z" />
           <path d="M100,200 Q90,120 70,40 Q60,60 80,100 Q50,90 75,160 Q40,150 60,200 Z" className="fill-[#a65d68]" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div 
        variants={{
          hidden: { y: 20, opacity: 0, scale: 0.95 },
          visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 1, delay: 1.2, ease: "easeOut" } }
        }}
        className="absolute inset-0 z-40 flex flex-col items-center justify-start pt-16 px-6 text-center"
      >
        <span className="text-xs font-sans tracking-[0.3em] text-[#84454f] uppercase mb-4 opacity-80 font-bold">You're Invited</span>
        <h3 className="text-4xl font-serif font-bold text-white drop-shadow-md mb-2">{lang.engagement}</h3>
        <p className="text-sm font-sans text-white/90 drop-shadow-sm max-w-[200px] leading-relaxed mt-2">
          {lang.date} <br/> {lang.time}
        </p>

        <motion.a
          href="https://maps.google.com/?q=MRJ+Mahal,+Vayalur+Road,+Somarasampettai,+Trichy" 
          target="_blank" 
          rel="noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-2 rounded-full border border-white/50 text-white font-medium flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 text-sm shadow-lg"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          View on Map
        </motion.a>
      </motion.div>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#84454f]/30 z-30 pointer-events-none mix-blend-multiply" />
    </motion.div>
  );
}
