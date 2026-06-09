import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Globe, Anchor } from "lucide-react";

const MAP_IMAGE =
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&h=700&fit=crop&auto=format";

const domesticRoutes = [
  { from: "Surabaya", to: "Makassar", freq: "3x/minggu" },
  { from: "Jakarta", to: "Medan", freq: "2x/minggu" },
  { from: "Surabaya", to: "Sorong", freq: "1x/minggu" },
  { from: "Merak", to: "Bakauheni", freq: "4x/minggu" },
  { from: "Balikpapan", to: "Kuala Tanjung", freq: "2x/minggu" },
  { from: "Bitung", to: "Ternate", freq: "2x/minggu" },
  { from: "Tanjung Priok", to: "Belawan", freq: "3x/minggu" },
  { from: "Semarang", to: "Banjarmasin", freq: "2x/minggu" },
];

const intlPorts = [
  "Port of Singapore", "Port Klang Malaysia", "Port of Hong Kong",
  "Port of Tanjung Pelepas", "Port of Manila", "Port of Ho Chi Minh",
  "Port of Bangkok", "Port of Colombo",
];

const regions = [
  { label: "Jawa", ports: 8 },
  { label: "Sumatera", ports: 6 },
  { label: "Kalimantan", ports: 7 },
  { label: "Sulawesi", ports: 5 },
  { label: "Maluku & Papua", ports: 4 },
  { label: "Internasional", ports: 8 },
];

export function Routes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="routes" className="py-28 bg-[#0D1E35]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#D4A843]" />
            <span className="text-[#D4A843] text-xs tracking-widest uppercase font-medium">
              Rute & Jaringan
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <h2 className="text-white">Menjangkau Seluruh Nusantara dan Mancanegara</h2>
            <p className="text-white/50 leading-relaxed flex items-end">
              Jaringan rute pelayaran kami mencakup lebih dari 120 pelabuhan aktif
              di Indonesia serta koneksi ke 8 pelabuhan utama Asia Tenggara dan Asia Timur.
            </p>
          </div>
        </motion.div>

        {/* Map visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden mb-12 bg-[#112240]"
          style={{ minHeight: 340 }}
        >
          <img
            src={MAP_IMAGE}
            alt="Jaringan pelabuhan dan rute pelayaran Samudera Nusantara Line"
            className="w-full h-[340px] object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1E35]/80 to-[#0D1E35]/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {regions.map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4A843] rounded-full" />
                    <div>
                      <div className="text-white text-sm font-semibold">{r.label}</div>
                      <div className="text-white/40 text-xs">{r.ports} pelabuhan</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Route dots decoration */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 items-end">
            <div className="text-white/30 text-xs tracking-widest uppercase mb-2">Jaringan Aktif</div>
            <div className="flex items-center gap-2">
              <div className="h-px w-20 bg-[#D4A843]/40" />
              <div className="w-2 h-2 bg-[#D4A843] rounded-full" />
              <div className="h-px w-8 bg-[#D4A843]/40" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-12 bg-[#1E6FBF]/60" />
              <div className="w-2 h-2 bg-[#1E6FBF] rounded-full" />
              <div className="h-px w-16 bg-[#1E6FBF]/60" />
            </div>
          </div>
        </motion.div>

        {/* Routes Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Domestic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Anchor className="w-5 h-5 text-[#D4A843]" />
              <h3 className="text-white">Rute Domestik</h3>
            </div>
            <div className="space-y-2">
              {domesticRoutes.map((route, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-[#112240] rounded-xl border border-white/5 hover:border-white/15 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#1E6FBF] flex-shrink-0" />
                    <span className="text-white/80 text-sm">
                      {route.from}{" "}
                      <span className="text-white/30 mx-1">→</span>{" "}
                      {route.to}
                    </span>
                  </div>
                  <span className="text-[#D4A843] text-xs font-medium">{route.freq}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* International */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-[#D4A843]" />
              <h3 className="text-white">Pelabuhan Internasional</h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {intlPorts.map((port, i) => (
                <div
                  key={port}
                  className="flex items-center gap-3 p-4 bg-[#112240] rounded-xl border border-white/5 hover:border-[#1E6FBF]/30 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1E6FBF]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1E6FBF] text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                  <span className="text-white/70 text-sm">{port}</span>
                  <div className="ml-auto w-1.5 h-1.5 bg-green-400 rounded-full" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
