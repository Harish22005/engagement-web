import { motion } from "motion/react";

export function Blessings({ lang }: { lang: any }) {
  const msgs = [
    lang.msgBlessings1,
    lang.msgBlessings2,
    lang.msgBlessings3,
    lang.msgBlessings4,
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-blush/50">
      <div className="max-w-full overflow-hidden flex relative h-40 items-center">
        <motion.div 
          className="flex whitespace-nowrap space-x-16 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {/* Double array for smooth infinite scrolling */}
          {[...msgs, ...msgs, ...msgs, ...msgs, ...msgs].map((msg, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-serif text-rosegold/60"
            >
              {msg}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
