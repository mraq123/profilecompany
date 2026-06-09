import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Ship, Anchor, Package, Globe, Truck, BarChart3, ArrowRight } from "lucide-react";

// const services = [
//   {
//     icon: Ship,
//     title: "Pengiriman Kargo Laut",
//     description:
//       "Layanan pengiriman kargo full container load (FCL) dan less than container load (LCL) ke seluruh wilayah Indonesia dan rute internasional.",
//     features: ["FCL & LCL", "Real-time tracking", "Asuransi kargo"],
//   },
//   {
//     icon: Anchor,
//     title: "Charter Kapal",
//     description:
//       "Penyewaan armada kapal untuk kebutuhan khusus industri migas, pertambangan, konstruksi, dan pengiriman kargo volume besar.",
//     features: ["Voyage charter", "Time charter", "Bareboat charter"],
//   },
//   {
//     icon: Package,
//     title: "Logistik & Distribusi",
//     description:
//       "Solusi logistik terpadu dari gudang hingga pintu pelanggan, mencakup pengelolaan inventori dan distribusi multi-moda.",
//     features: ["Warehousing", "Last-mile delivery", "Cold chain"],
//   },
//   {
//     icon: Globe,
//     title: "Freight Forwarding",
//     description:
//       "Pengurusan dokumen ekspor-impor, bea cukai, dan koordinasi pengiriman internasional yang efisien dan tepat waktu.",
//     features: ["Customs clearance", "B/L management", "PPJK resmi"],
//   },
//   {
//     icon: Truck,
//     title: "Bongkar Muat",
//     description:
//       "Operasional bongkar muat kargo di pelabuhan dengan alat berat modern, tenaga terlatih, dan standar keselamatan tertinggi.",
//     features: ["Stevedoring", "Cargo handling", "Heavy lift"],
//   },
//   {
//     icon: BarChart3,
//     title: "Manajemen Armada",
//     description:
//       "Layanan pengelolaan teknis dan operasional kapal secara profesional, termasuk pemeliharaan, sertifikasi, dan manajemen awak kapal.",
//     features: ["Technical management", "Crew management", "ISM/ISPS"],
//   },
// ];

const services = [
  {
    icon: Ship,
    title: "Penyeberangan Penumpang",
    description:
      "Layanan transportasi laut yang aman dan nyaman untuk perjalanan antar pulau dengan armada ferry modern dan jadwal yang terpercaya.",
    features: ["Kursi nyaman", "Jadwal reguler", "Standar keselamatan tinggi"],
  },
  {
    icon: Truck,
    title: "Penyeberangan Kendaraan",
    description:
      "Melayani penyeberangan berbagai jenis kendaraan mulai dari sepeda motor, mobil pribadi, bus, hingga kendaraan logistik.",
    features: ["Motor & mobil", "Bus & truk", "Proses boarding cepat"],
  },
  {
    icon: Anchor,
    title: "Charter Kapal Ferry",
    description:
      "Penyewaan kapal ferry untuk kebutuhan khusus seperti kegiatan perusahaan, wisata rombongan, acara pemerintah, dan kebutuhan operasional lainnya.",
    features: ["Corporate charter", "Wisata rombongan", "Jadwal fleksibel"],
  },
  {
    icon: Globe,
    title: "Rute Antar Pulau",
    description:
      "Menghubungkan berbagai destinasi strategis dengan layanan ferry yang mendukung mobilitas masyarakat dan distribusi kendaraan.",
    features: ["Rute strategis", "Akses mudah", "Jaringan luas"],
  },
  // {
  //   icon: Package,
  //   title: "Pengangkutan Barang Ringan",
  //   description:
  //     "Melayani pengiriman barang dan kebutuhan logistik dalam kapasitas tertentu melalui jalur penyeberangan yang tersedia.",
  //   features: ["Barang umum", "Proses aman", "Pengiriman tepat waktu"],
  // },
  // {
  //   icon: BarChart3,
  //   title: "Layanan Reservasi",
  //   description:
  //     "Sistem pemesanan tiket dan reservasi kendaraan yang mudah, cepat, dan transparan untuk memberikan pengalaman perjalanan yang lebih nyaman.",
  //   features: ["Booking mudah", "Konfirmasi cepat", "Layanan pelanggan"],
  // },
];
export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 bg-[#0B1829]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#D4A843]" />
              <span className="text-[#D4A843] text-xs tracking-widest uppercase font-medium">
                Layanan Kami
              </span>
            </div>
            <h2 className="text-white">
              Solusi Penyeberangan Laut yang Aman dan Terpercaya
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-end"
          >
            <p className="text-white/50 text-lg leading-relaxed">
              Kami menyediakan layanan penyeberangan laut untuk penumpang dan kendaraan
              dengan armada ferry modern, didukung standar keselamatan tinggi,
              kenyamanan perjalanan, serta ketepatan jadwal di setiap rute.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 rounded-2xl overflow-hidden">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#0B1829] p-8 group hover:bg-[#112240] transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1A3A5C] flex items-center justify-center mb-6 group-hover:bg-[#1E6FBF]/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#1E6FBF] group-hover:text-[#D4A843] transition-colors duration-300" />
                </div>

                <h3 className="text-white mb-3 group-hover:text-[#D4A843] transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/50">
                      <div className="w-1 h-1 bg-[#D4A843] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* <div className="flex items-center gap-1 text-[#1E6FBF] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Pelajari lebih lanjut</span>
                  <ArrowRight className="w-4 h-4" />
                </div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
