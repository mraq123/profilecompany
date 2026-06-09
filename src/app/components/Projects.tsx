import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const PROJ_IMG_1 = "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?w=700&h=450&fit=crop&auto=format";
const PROJ_IMG_2 = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=700&h=450&fit=crop&auto=format";
const PROJ_IMG_3 = "https://images.unsplash.com/photo-1606964212858-c215029db704?w=700&h=450&fit=crop&auto=format";
const PROJ_IMG_4 = "https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?w=700&h=450&fit=crop&auto=format";

const projects = [
  {
    title: "Pengiriman Baja Konstruksi Jembatan Batam–Bintan",
    category: "Kargo Khusus",
    client: "PT Waskita Karya (Persero) Tbk",
    volume: "18.500 ton baja struktural",
    period: "Mar 2023 – Sep 2023",
    location: "Batam, Kepulauan Riau",
    image: PROJ_IMG_1,
    highlight: true,
  },
  {
    title: "Distribusi Logistik Proyek PLTU Sulawesi Selatan",
    category: "Logistik Industri",
    client: "PLN Nusantara Power",
    volume: "42.000 ton peralatan & material",
    period: "Jan 2022 – Okt 2023",
    location: "Jeneponto, Sulawesi Selatan",
    image: PROJ_IMG_2,
    highlight: false,
  },
  {
    title: "Charter Armada Ekspor CPO Kalimantan Timur",
    category: "Charter & Bulk",
    client: "PT Astra Agro Lestari Tbk",
    volume: "7 voyage charter, 280.000 ton",
    period: "Feb 2023 – Feb 2024",
    location: "Samarinda, Kalimantan Timur",
    image: PROJ_IMG_3,
    highlight: false,
  },
  {
    title: "Pengiriman Peralatan Migas Offshore Natuna",
    category: "Oil & Gas Support",
    client: "PT Pertamina Hulu Energi",
    volume: "12 rig equipment package",
    period: "Apr 2024 – Des 2024",
    location: "Kepulauan Natuna",
    image: PROJ_IMG_4,
    highlight: false,
  },
];

const stats = [
  { value: "500+", label: "Proyek Selesai" },
  { value: "2.8 Jt", label: "Ton Muatan/Tahun" },
  { value: "98.7%", label: "On-Time Rate" },
  { value: "0", label: "Insiden Utama" },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 bg-[#0B1829]" ref={ref}>
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
              Proyek & Portofolio
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-white">Rekam Jejak Pengiriman Terbaik</h2>
            <p className="text-white/50 leading-relaxed">
              Lebih dari 500 proyek sukses bersama klien terkemuka dari berbagai sektor
              industri — energi, konstruksi, pertambangan, dan perkebunan.
            </p>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-12"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[#112240] px-8 py-6 text-center">
              <div
                className="text-[#D4A843] mb-1"
                style={{ fontFamily: "'Libre Caslon Display', serif", fontSize: "2rem" }}
              >
                {s.value}
              </div>
              <div className="text-white/40 text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-[#112240] border transition-all duration-300 hover:border-[#1E6FBF]/50 ${
                proj.highlight ? "border-[#D4A843]/30" : "border-white/5"
              }`}
            >
              {proj.highlight && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#D4A843] text-[#0B1829] text-xs font-bold rounded-full">
                  Featured
                </div>
              )}
              <div className="relative h-52 bg-[#1A3A5C] overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[#1E6FBF]/80 text-white text-xs rounded-full">
                    {proj.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white mb-3 group-hover:text-[#D4A843] transition-colors" style={{ fontSize: "1rem" }}>
                  {proj.title}
                </h3>
                <p className="text-[#1E6FBF] text-sm font-medium mb-4">{proj.client}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <Package className="w-3.5 h-3.5" />
                    {proj.volume}
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {proj.period}
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    {proj.location}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-white/20 group-hover:text-[#1E6FBF] text-sm transition-colors">
                  <span>Lihat detail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <button className="px-8 py-4 border border-white/15 hover:border-[#D4A843]/50 text-white/60 hover:text-white text-sm rounded-xl transition-all duration-200">
            Lihat Semua Proyek
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Package({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}
