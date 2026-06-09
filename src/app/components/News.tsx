import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Clock, Tag } from "lucide-react";

const NEWS_IMG_1 = "https://images.unsplash.com/photo-1773737464312-11a8c71a4b63?w=700&h=400&fit=crop&auto=format";
const NEWS_IMG_2 = "https://images.unsplash.com/photo-1581062972297-d75ef635df5b?w=700&h=400&fit=crop&auto=format";
const NEWS_IMG_3 = "https://images.unsplash.com/photo-1717955426364-1d5d147f574c?w=700&h=400&fit=crop&auto=format";

const articles = [
  {
    category: "Berita Perusahaan",
    title: "Samudera Nusantara Line Perkuat Armada dengan 5 Kapal Baru Berteknologi Dual-Fuel",
    excerpt:
      "Investasi strategis senilai USD 180 juta untuk armada ramah lingkungan sebagai komitmen menuju emisi nol karbon pada 2050.",
    date: "28 Mei 2025",
    readTime: "4 mnt",
    image: NEWS_IMG_1,
    featured: true,
  },
  {
    category: "Industri & Regulasi",
    title: "IMO 2025: Dampak Regulasi Emisi Terbaru terhadap Industri Pelayaran Nasional",
    excerpt:
      "Analisis mendalam tentang implementasi CII (Carbon Intensity Indicator) dan strategi adaptasi operator kapal Indonesia.",
    date: "15 Mei 2025",
    readTime: "7 mnt",
    image: NEWS_IMG_2,
    featured: false,
  },
  {
    category: "Logistik & Transportasi",
    title: "Tren Digitalisasi Shipping: Dari Paper B/L ke e-BL yang Mempercepat Rantai Pasok",
    excerpt:
      "Bagaimana adopsi bill of lading elektronik mentransformasi proses dokumentasi ekspor-impor di Indonesia.",
    date: "3 Mei 2025",
    readTime: "5 mnt",
    image: NEWS_IMG_3,
    featured: false,
  },
];

const quickNews = [
  { date: "2 Jun 2025", title: "SNL Raih Penghargaan Best Maritime Company 2025 dari INSA" },
  { date: "20 Mei 2025", title: "Pembukaan Rute Baru Surabaya–Darwin, Australia" },
  { date: "10 Mei 2025", title: "MoU dengan Pelindo untuk Pengembangan Pelabuhan Hub Baru" },
  { date: "28 Apr 2025", title: "Audit ISM Code Sukses dengan Zero Finding oleh BKI" },
];

export function News() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="news" className="py-28 bg-[#0D1E35]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#D4A843]" />
              <span className="text-[#D4A843] text-xs tracking-widest uppercase font-medium">
                Berita & Artikel
              </span>
            </div>
            <h2 className="text-white">Terkini dari Samudera Nusantara Line</h2>
          </div>
          <button className="flex items-center gap-2 text-[#1E6FBF] hover:text-[#D4A843] text-sm transition-colors group">
            Semua Berita
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden bg-[#1A3A5C] mb-6 h-72">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E35]/90 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#D4A843] text-[#0B1829] text-xs font-bold rounded-full">
                    {articles[0].category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {articles[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {articles[0].readTime} baca
                </div>
              </div>
              <h3
                className="text-white mb-3 group-hover:text-[#D4A843] transition-colors"
                style={{ fontSize: "1.3rem" }}
              >
                {articles[0].title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{articles[0].excerpt}</p>
            </div>
          </motion.div>

          {/* Side column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {articles.slice(1).map((article, i) => (
              <div key={article.title} className="group cursor-pointer flex gap-4">
                <div className="w-24 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-[#1A3A5C]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[#1E6FBF] text-xs font-medium">{article.category}</span>
                  <h4
                    className="text-white/80 group-hover:text-white transition-colors mt-1 line-clamp-2"
                    style={{ fontSize: "0.85rem", lineHeight: 1.4 }}
                  >
                    {article.title}
                  </h4>
                  <div className="text-white/30 text-xs mt-2">{article.date}</div>
                </div>
              </div>
            ))}

            {/* Quick news */}
            <div className="mt-auto p-5 bg-[#112240] rounded-xl border border-white/5">
              <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
                Berita Singkat
              </div>
              <div className="space-y-3">
                {quickNews.map((n) => (
                  <div key={n.title} className="group cursor-pointer">
                    <div className="text-white/25 text-xs mb-0.5">{n.date}</div>
                    <p
                      className="text-white/60 group-hover:text-white transition-colors"
                      style={{ fontSize: "0.8rem", lineHeight: 1.4 }}
                    >
                      {n.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
