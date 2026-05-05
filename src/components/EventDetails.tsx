import { motion } from "motion/react";
import { InvitationCard } from "./InvitationCard";

export function EventDetails({ lang }: { lang: any }) {
  return (
    <section className="py-24 px-6 bg-champagne/30 relative flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-script text-center text-rosegold mb-16"
        >
          {lang.eventDetails}
        </motion.h2>

        <div className="flex justify-center items-center w-full">
          <InvitationCard lang={lang} />
        </div>
      </div>
    </section>
  );
}
