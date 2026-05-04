import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";

export function EventDetails({ lang }: { lang: any }) {
  return (
    <section className="py-24 px-6 bg-champagne/30 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-script text-center text-rosegold mb-16"
        >
          {lang.eventDetails}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2rem] border-2 border-white text-center shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h3 className="text-3xl font-serif text-gold font-semibold mb-8">{lang.engagement}</h3>
            
            <div className="space-y-6 font-sans text-gray-700 text-lg">
              <div className="flex flex-col items-center gap-2 group/item">
                <Calendar className="w-6 h-6 text-rosegold group-hover/item:scale-110 transition-transform" />
                <p>{lang.date}</p>
              </div>
              
              <div className="w-12 h-[1px] bg-rosegold/20 mx-auto" />
              
              <div className="flex flex-col items-center gap-2 group/item">
                <Clock className="w-6 h-6 text-rosegold group-hover/item:scale-110 transition-transform" />
                <p>{lang.time}</p>
              </div>

              <div className="w-12 h-[1px] bg-rosegold/20 mx-auto" />
              
              <div className="flex flex-col items-center gap-2 group/item">
                <MapPin className="w-6 h-6 text-rosegold group-hover/item:scale-110 transition-transform" />
                <p className="font-semibold">{lang.venue}</p>
                <p className="text-sm text-gray-500">{lang.address}</p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=MRJ+Mahal,+Vayalur+Road,+Somarasampettai,+Trichy" 
              target="_blank" 
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-rosegold text-white rounded-full font-medium hover:bg-gold transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              <Navigation className="w-4 h-4" />
              {lang.getDirections}
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.840740925927!2d78.6338573!3d10.7951167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5173f2cb385%3A0xe5ed8a18357a7da9!2sMRJ%20Mahal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
