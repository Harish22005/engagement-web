import { motion } from "motion/react";

export function Story({ lang }: { lang: any }) {
  const events = [
    {
      title: lang.howWeMet,
      desc: lang.howWeMetDesc,
      icon: "✨"
    },
    {
      title: lang.journey,
      desc: lang.journeyDesc,
      icon: "💫"
    },
    {
      title: lang.proposal,
      desc: lang.proposalDesc,
      icon: "💍"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-white/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-script text-center text-rosegold mb-16"
        >
          {lang.ourStory}
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 w-0.5 bg-rosegold/30 -translate-x-1/2 origin-top" 
          />

          {events.map((event, i) => (
            <div 
              key={i}
              className={`flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Spacer for alternate layout on desktop */}
              <div className="hidden md:block md:w-5/12" />

              {/* Center Node */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-rosegold -translate-x-1/2 flex items-center justify-center text-xl z-10 shadow-[0_0_15px_rgba(183,110,121,0.3)]"
              >
                {event.icon}
              </motion.div>

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, y: 40, filter: "blur(10px)", x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full pl-12 md:pl-0 md:w-5/12"
              >
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-2xl font-serif text-gold font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
