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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-script text-center text-rosegold mb-16"
        >
          {lang.ourStory}
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-rosegold/30 -translate-x-1/2" />

          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Spacer for alternate layout on desktop */}
              <div className="hidden md:block md:w-5/12" />

              {/* Center Node */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-rosegold -translate-x-1/2 flex items-center justify-center text-xl z-10 shadow-lg">
                {event.icon}
              </div>

              {/* Content */}
              <div className="w-full pl-12 md:pl-0 md:w-5/12">
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-2xl font-serif text-gold font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
