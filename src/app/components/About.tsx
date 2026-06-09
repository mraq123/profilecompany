import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Eye, Target, Award, CheckCircle } from "lucide-react";

const ABOUT_IMAGE =
  "/image/shanaya.png";

// const timeline = [
//   { year: "1995", event: "Berdiri di Surabaya dengan 3 unit kapal perdana." },
//   { year: "2001", event: "Ekspansi rute ke seluruh wilayah Indonesia Timur." },
//   { year: "2008", event: "Perolehan sertifikasi ISM Code & ISO 9001:2008." },
//   { year: "2015", event: "Pembukaan kantor perwakilan di Singapura dan Malaysia." },
//   { year: "2020", event: "Modernisasi armada dengan 12 kapal berteknologi terkini." },
//   { year: "2024", event: "47 unit armada, melayani 120+ pelabuhan secara aktif." },
// ];

// const values = [
//   { icon: "🛡️", title: "Keselamatan Prioritas", desc: "Zero accident policy diterapkan di seluruh operasional armada." },
//   { icon: "⏱️", title: "Ketepatan Waktu", desc: "98,7% on-time delivery rate dalam tiga tahun terakhir." },
//   { icon: "🤝", title: "Pelayanan Profesional", desc: "Tim berpengalaman yang berdedikasi untuk kepuasan pelanggan." },
//   { icon: "💡", title: "Teknologi & Inovasi", desc: "Sistem tracking real-time dan digitalisasi operasional penuh." },
//   { icon: "✅", title: "Integritas & Kepercayaan", desc: "Transparansi penuh dalam setiap transaksi dan proses bisnis." },
// ];

const values = [
  { id: 1, teks: "Mengutamakan keselamatan, kenyamanan dan keamanan selama penyebrangan.", icon: "✅", title: "Integritas & Kepercayaan", },
]

const certs = [
  "ISM Code (International Safety Management)",
  "ISO 9001:2015 Quality Management",
  "ISPS Code Compliance",
  "MLC 2006 (Maritime Labour Convention)",
  "OHSAS 18001 Health & Safety",
  "BKI Class Certification",
];

const tabs = ["Sejarah", "Visi & Misi", "Motto", "Sertifikasi"] as const;
type Tab = (typeof tabs)[number];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<Tab>("Sejarah");

  return (
    <section id="about" className="py-28 bg-[#0D1E35]" ref={ref}>
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
              Tentang Kami
            </span>
          </div>
          <h2 className="text-white max-w-2xl">
            Menghubungkan Antar Pulau dengan Layanan Ferry Terpercaya
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#1A3A5C]">
              <img
                src={ABOUT_IMAGE}
                alt="Kapal kargo Samudera Nusantara Line di pelabuhan"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1829]/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#D4A843] text-[#0B1829] px-6 py-4 rounded-xl shadow-2xl">
              <div
                style={{ fontFamily: "'Libre Caslon Display', serif", fontSize: "2rem", lineHeight: 1 }}
              >
                50
              </div>
              <div className="text-xs font-semibold tracking-wide mt-1">TAHUN PENGALAMAN</div>
            </div>
          </motion.div>

          {/* Right: Tabs */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          > */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[450px] flex flex-col"
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-1 mb-8 bg-[#112240] p-1 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${activeTab === tab
                    ? "bg-[#1E6FBF] text-white"
                    : "text-white/40 hover:text-white/70"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {/* {activeTab === "Sejarah" && (
              // <div className="space-y-4">
              //   {timeline.map((item, i) => (
              //     <motion.div
              //       key={item.year}
              //       initial={{ opacity: 0, x: 20 }}
              //       animate={{ opacity: 1, x: 0 }}
              //       transition={{ delay: i * 0.07 }}
              //       className="flex gap-4"
              //     >
              //       <div className="flex flex-col items-center">
              //         <div className="w-10 h-10 rounded-full bg-[#1A3A5C] flex items-center justify-center text-[#D4A843] text-xs font-bold flex-shrink-0">
              //           {item.year.slice(2)}
              //         </div>
              //         {i < timeline.length - 1 && (
              //           <div className="w-px flex-1 bg-white/10 mt-1" />
              //         )}
              //       </div>
              //       <div className="pb-4">
              //         <div className="text-[#D4A843] text-sm font-semibold mb-0.5">{item.year}</div>
              //         <p className="text-white/60 text-sm">{item.event}</p>
              //       </div>
              //     </motion.div>
              //   ))}
              // </div>
            )} */}

            {activeTab === "Sejarah" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                flex-1
                overflow-y-auto
                pr-3
                space-y-8
                custom-scroll
              "
              >
                {/* Quote */}
                <div className="relative pl-6 border-l-2 border-[#D4A843]">
                  <p
                    className="text-[#D4A843] italic leading-relaxed"
                    style={{
                      fontFamily: "'Libre Caslon Display', serif",
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    }}
                  >
                    “Menghubungkan Pulau, Mendekatkan Masyarakat.”
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <p className="text-white/75 leading-8 text-[15px] lg:text-base">
                    Indonesia sebagai negara kepulauan terbesar di dunia dengan lebih dari
                    <span className="text-[#D4A843] font-semibold"> 17.000 pulau </span>
                    membutuhkan sistem transportasi laut yang andal untuk menghubungkan
                    masyarakat, mendukung mobilitas, dan memperkuat pertumbuhan ekonomi
                    antar wilayah.
                  </p>

                  <p className="text-white/75 leading-8 text-[15px] lg:text-base">
                    <span className="text-[#D4A843] font-semibold">PT. Jemla Ferry</span>
                    {" "}didirikan pada
                    <span className="text-[#D4A843] font-semibold"> 6 Januari 1976</span>
                    {" "}dengan komitmen menghadirkan layanan penyeberangan yang aman,
                    nyaman, dan terpercaya bagi masyarakat Indonesia.
                  </p>

                  <p className="text-white/60 leading-8 text-[15px] lg:text-base">
                    Selama puluhan tahun, perusahaan terus berkembang dan berkontribusi
                    dalam menghubungkan berbagai wilayah Nusantara melalui layanan
                    penyeberangan yang mengutamakan keselamatan, ketepatan operasional,
                    serta kualitas pelayanan bagi setiap penumpang dan kendaraan.
                  </p>

                  <p className="text-white/60 leading-8 text-[15px] lg:text-base">
                    Simbol
                    <span className="text-[#D4A843] font-medium"> burung camar </span>
                    yang menjadi identitas perusahaan mencerminkan semangat pelayaran,
                    kebebasan, dan dedikasi untuk terus menjadi penghubung yang
                    terpercaya bagi masyarakat dalam setiap perjalanan melintasi perairan
                    Nusantara.
                  </p>
                </div>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="bg-[#112240] border border-white/5 rounded-xl p-4">
                    <div className="text-[#D4A843] text-2xl font-bold">1976</div>
                    <div className="text-white/50 text-sm mt-1">
                      Tahun Berdiri
                    </div>
                  </div>

                  <div className="bg-[#112240] border border-white/5 rounded-xl p-4">
                    <div className="text-[#D4A843] text-2xl font-bold">
                      40+
                    </div>
                    <div className="text-white/50 text-sm mt-1">
                      Tahun Pengalaman
                    </div>
                  </div>

                  <div className="bg-[#112240] border border-white/5 rounded-xl p-4">
                    <div className="text-[#D4A843] text-2xl font-bold">
                      Ferry
                    </div>
                    <div className="text-white/50 text-sm mt-1">
                      Layanan Penyeberangan
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "Visi & Misi" && (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-5 h-5 text-[#D4A843]" />
                    <h3 className="text-white">Visi</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    Menjadi perseroan jasa angkutan penyeberangan yang terbaik dan efisien serta mengutamakan keselamatan, keamanan dan kenyamanan selama penyeberangan.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-[#D4A843]" />
                    <h3 className="text-white">Misi</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Memantapkan portofolio bisnis usaha jasa angkutan penyeberangan.",
                      "Portofolio bisnis dikelola secara praktek-praktek bisnis dan manajemen yang baik dan handal oleh tenaga kerja profesional untuk mewujudkan Good Corporate Governance bagi kepentingan Stake Holder secaran seimbang.",
                    ].map((m, i) => (
                      <li key={i} className="flex gap-3 text-white/60 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#1E6FBF] flex-shrink-0 mt-0.5" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "Motto" && (
              <div className="space-y-4">
                {values.map((v, i) => (
                  <motion.div
                    key={v.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4 p-4 bg-[#112240] rounded-xl border border-white/5"
                  >
                    <div className="text-2xl">{v.icon}</div>
                    <div>
                      {/* <h4 className="text-white mb-1">{v.title}</h4> */}
                      <p className="text-white/50 text-sm">{v.teks}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "Sertifikasi" && (
              <div className="space-y-3">
                {/* <p className="text-white/50 text-sm mb-6">
                  Samudera Nusantara Line telah memperoleh berbagai sertifikasi
                  internasional yang menjamin standar keselamatan dan kualitas
                  operasional tertinggi.
                </p> */}
                {certs.map((cert, i) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 p-3 bg-[#112240] rounded-lg border border-white/5"
                  >
                    <Award className="w-4 h-4 text-[#D4A843] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
