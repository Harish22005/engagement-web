import { motion } from "motion/react";

export function Gallery({ lang }: { lang: any }) {
  const images = [
    { 
      src: "/western-wedding.png", 
      rotate: "-3deg", 
      mt: "mt-0",
      caption: "Forever Begins 💍",
      quote: "Two souls, one heart."
    },
    { 
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop", 
      rotate: "2deg", 
      mt: "mt-8",
      caption: "Us 💕",
      quote: "Every moment with you is a beautiful memory 💖"
    },
    { 
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", 
      rotate: "-1deg", 
      mt: "mt-4",
      caption: "My Everything ❤️",
      quote: "You are my today and all of my tomorrows."
    },
    { 
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop", 
      rotate: "4deg", 
      mt: "mt-12",
      caption: "Together ✨",
      quote: "A million times over, I will always choose you."
    },
    { 
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", 
      rotate: "-4deg", 
      mt: "mt-2",
      caption: "Soulmates 🥂",
      quote: "With you, I am home."
    },
    { 
      src: "/indian-wedding.png", 
      rotate: "1deg", 
      mt: "mt-6",
      caption: "Our Journey 🌟",
      quote: "Love is not just a feeling, it's our promise."
    },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden bg-blush/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-script text-center text-rosegold mb-20 px-4 leading-tight"
        >
          {lang.galleryTitle}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0 pb-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-white p-4 shadow-xl rounded-sm transition-transform duration-500 hover:z-10 hover:scale-105 ${img.mt}`}
              style={{ transform: `rotate(${img.rotate})` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
                <img 
                  src={img.src} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Quote Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                  <p className="text-white font-serif text-lg md:text-xl leading-relaxed drop-shadow-md">
                    "{img.quote}"
                  </p>
                </div>
              </div>
              
              {/* Caption */}
              <div className="mt-5 mb-1 text-center">
                <p className="font-script text-3xl text-rosegold">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
