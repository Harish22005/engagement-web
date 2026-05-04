import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Countdown({ lang }: { lang: any }) {
  const targetDate = new Date("2026-05-17T19:00:00+05:30").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: lang.days, value: timeLeft.days },
    { label: lang.hours, value: timeLeft.hours },
    { label: lang.mins, value: timeLeft.minutes },
    { label: lang.secs, value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4 bg-blush/80">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-script text-rosegold mb-10"
        >
          {lang.countdownTitle}
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-4 md:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-rosegold/20"
            >
              <span className="text-3xl md:text-5xl font-serif text-gold font-light tabular-nums">
                {unit.value.toString().padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm font-sans tracking-widest uppercase text-gray-500 mt-2">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
