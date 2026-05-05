import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { Send, Heart } from "lucide-react";

export function SendWishes({ lang, onAddWish }: { lang: any, onAddWish?: (wish: string) => void }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(lang.wishNameEmpty);
      return;
    }
    if (!message.trim()) {
      setError(lang.wishMsgEmpty);
      return;
    }

    // Since we don't have a real backend, we simulate saving the wish.
    setError("");
    setSubmitted(true);
    
    // Add to external floating blessings (if provided)
    if (onAddWish) {
      onAddWish(`${message} - ${name}`);
    }
    
    // Reset form after a few seconds
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setMessage("");
    }, 5000);
  };

  return (
    <section className="py-24 px-6 bg-white/40 relative">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-script text-rosegold mb-12"
        >
          {lang.sendWishesTitle}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-transparent opacity-50 pointer-events-none" />

          {submitted ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center p-8 text-center relative z-10 space-y-4"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-16 h-16 text-rosegold fill-rosegold" />
              </motion.div>
              <h3 className="text-2xl font-serif text-gold">{lang.wishSuccess}</h3>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-sans tracking-wide">
                  {lang.wishNameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 bg-white/50 border border-rosegold/30 rounded-2xl focus:outline-none focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 transition-all text-gray-800 placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-sans tracking-wide">
                  {lang.wishMsgLabel}
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-5 py-4 bg-white/50 border border-rosegold/30 rounded-2xl focus:outline-none focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 transition-all text-gray-800 placeholder-gray-400 resize-none"
                  placeholder={lang.msgBlessings1}
                />
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm font-medium px-2"
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-rosegold to-[#d48b96] text-white rounded-2xl font-medium tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-5 h-5" />
                {lang.wishSubmit}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
