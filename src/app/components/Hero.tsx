import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Shield, Clock, Star } from "lucide-react";

const HERO_IMAGE =
  "/image/shanaya3.png";

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[#0B1829]">
        <img
          src={HERO_IMAGE}
          alt="Kapal kargo modern di lautan"
          className="w-full h-full object-cover opacity-75"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1829] via-[#0B1829]/80 to-[#0B1829]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1829] via-transparent to-transparent" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4A843]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4A843]/40 rounded-full mb-8"
          >
            <div className="w-1.5 h-1.5 bg-[#D4A843] rounded-full animate-pulse" />
            <span className="text-[#D4A843] text-xs tracking-widest uppercase font-medium">
              Terpercaya Sejak 1976 · ISM Code Certified
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            Solusi Transportasi Laut{" "}
            <em className="text-[#D4A843] not-italic">Aman, Cepat,</em> dan
            Terpercaya
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/60 text-lg mb-10 max-w-xl leading-relaxed"
          >
            Melayani penyeberangan antar pulau dengan armada ferry yang aman, nyaman, dan terpercaya untuk mendukung mobilitas penumpang serta kendaraan di berbagai rute strategis.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-2 px-8 py-4 bg-[#D4A843] hover:bg-[#E5BE6A] text-[#0B1829] font-semibold rounded transition-all duration-200 group"
            >
              Hubungi Kami
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll("services")}
              className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white rounded transition-all duration-200"
            >
              Lihat Layanan
            </button>
          </motion.div>

          {/* Value badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, label: "Keselamatan Prioritas" },
              { icon: Clock, label: "Ketepatan Waktu" },
              { icon: Star, label: "Standar ISO 9001" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/50">
                <Icon className="w-4 h-4 text-[#D4A843]" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("stats")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
