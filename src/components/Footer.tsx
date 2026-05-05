import { Download } from "lucide-react";
import { motion } from "motion/react";

export function Footer({ lang }: { lang: any }) {
  const handleDownload = () => {
    window.print();
  };

  return (
    <footer className="py-16 text-center space-y-8 bg-blush relative z-10">
      <motion.p 
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto px-6 font-serif text-xl md:text-3xl text-rosegold leading-relaxed"
      >
        "{lang.message}"
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDownload}
        className="inline-flex items-center gap-2 px-8 py-3 bg-white/50 border border-rosegold text-rosegold rounded-full font-sans hover:bg-rosegold hover:text-white transition-colors duration-300 shadow-sm"
      >
        <Download className="w-5 h-5" />
        {lang.downloadMsg}
      </motion.button>

      <div className="pt-12 text-sm font-sans tracking-wide text-gray-500 uppercase">
        {lang.footer}
      </div>
    </footer>
  );
}
