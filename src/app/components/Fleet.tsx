import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Gauge, Package, Ruler, Calendar, Car } from "lucide-react";

const FLEET_IMG_1 = "/image/shanaya3.png";
const FLEET_IMG_2 = "/image/kapalmufidah.jpg";
const FLEET_IMG_3 = "/image/kapaldutabanten.jpg";
const FLEET_IMG_4 = "/image/kapaljagantara.jpg";
const FLEET_IMG_5 = "/image/kapalvirgo.jpg";
const FLEET_IMG_6 = "/image/kapalathaya.jpg";
const FLEET_IMG_7 = "/image/kapalputriyasmin.jpg";

const fleet = [
  // shanaya
  {
    name: "KMP. Shanaya",
    type: "Ro - Ro Passenger Ship",
    image: FLEET_IMG_1,
    kendaraan: "150 Unit Campuran",
    teus: "682 Penumpang",
    length: "120 M",
    built: "2024",
    flag: "Indonesia",
    class: "BKI ",
    route: "Merak – Bakauheni",
    status: "Beroperasi",
  },
  // menggala
  {
    name: "KMP. Menggala",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "110 Unit Campuran",
    teus: "773 Penumpang",
    length: "98.71 M",
    built: "1987",
    flag: "Indonesia",
    class: "BKI ",
    route: "Merak – Bakauheni",
    status: "Beroperasi",
  },
  // mufidah
  {
    name: "KMP. Mufidah",
    type: "Ro - Ro Passenger Ship",
    image: FLEET_IMG_2,
    kendaraan: "94 Unit Campuran",
    teus: "530 Penumpang",
    length: "101.30 M",
    built: "1973",
    flag: "Indonesia",
    class: "BKI ",
    route: "Merak – Bakauheni",
    status: "Beroperasi",
  },
  // duta banten
  {
    name: "KMP. Duta Banten",
    type: "Ro - Ro Passenger Ship",
    image: FLEET_IMG_3,
    kendaraan: "127 Unit Campuran",
    teus: "470 Penumpang",
    length: "120.58 M",
    built: "1979",
    flag: "Indonesia",
    class: "BKI ",
    route: "Merak – Bakauheni",
    status: "Beroperasi",
  },
  // jagantara
  {
    name: "KMP. Jagantara",
    type: "Ro - Ro Passenger Ship",
    image: FLEET_IMG_4,
    kendaraan: "127 Unit Campuran",
    teus: "520 Penumpang",
    length: "126.21 M",
    built: "1984",
    flag: "Indonesia",
    class: "BKI ",
    route: "Merak – Bakauheni",
    status: "Beroperasi",
  },
  // rajarakata
  {
    name: "KMP. Rajarakata",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "110 Unit Campuran",
    teus: "520 Penumpang",
    length: "126.55 M",
    built: "1989",
    flag: "Indonesia",
    class: "BKI ",
    route: "Merak – Bakauheni",
    status: "Beroperasi",
  },
  // Virgo 18
  {
    name: "KMP. Virgo 18",
    type: "Ro - Ro Passenger Ship",
    image: FLEET_IMG_5,
    kendaraan: "116 Unit Campuran",
    teus: "800 Penumpang",
    length: "134.60 M",
    built: "1990",
    flag: "Indonesia",
    class: "BKI ",
    route: "Merak – Bakauheni",
    status: "Beroperasi",
  },
  // Athaya 
  {
    name: "KMP. Athaya",
    type: "Ro - Ro Passenger Ship",
    image: FLEET_IMG_6,
    kendaraan: "107 Unit Campuran",
    teus: "975 Penumpang",
    length: "136.6 M",
    built: "1995",
    flag: "Indonesia",
    class: "BKI ",
    route: "Merak – Bakauheni",
    status: "Beroperasi",
  },
  // Gilimanuk  I
  {
    name: "KMP. Gilimanuk I",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "27 Unit Campuran",
    teus: "159 Penumpang",
    length: "41.44 M",
    built: "1965",
    flag: "Indonesia",
    class: "BKI ",
    route: "Ketapang – Gilimanuk",
    status: "Beroperasi",
  },
  // Gilimanuk II
  {
    name: "KMP. Gilimanuk II",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "24 Unit Campuran",
    teus: "271 Penumpang",
    length: "44.30 M",
    built: "1990/1991",
    flag: "Indonesia",
    class: "BKI ",
    route: "Ketapang – Gilimanuk",
    status: "Beroperasi",
  },

  // Mishima
  {
    name: "KMP. Mishima",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "30 Unit Campuran",
    teus: "305 Penumpang",
    length: "56.65 M",
    built: "1982",
    flag: "Indonesia",
    class: "BKI ",
    route: "Bajoe – Kolaka",
    status: "Beroperasi",
  },
  // Kotabumi
  {
    name: "KMP. Kotabumi",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "37 Unit Campuran",
    teus: "374 Penumpang",
    length: "71.57 M",
    built: "1968",
    flag: "Indonesia",
    class: "BKI ",
    route: "Bajoe – Kolaka",
    status: "Beroperasi",
  },
  // Masagena
  {
    name: "KMP. Masagena",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "28 Unit Campuran",
    teus: "345 Penumpang",
    length: "71.83 M",
    built: "1988",
    flag: "Indonesia",
    class: "BKI ",
    route: "Bajoe – Kolaka",
    status: "Beroperasi",
  },
  // Jemla Fajar
  {
    name: "KMP. Jemla Fajar",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "22 Unit Campuran",
    teus: "244 Penumpang",
    length: "44.40 M",
    built: "1985",
    flag: "Indonesia",
    class: "BKI ",
    route: "Kayangan – Pototano",
    status: "Beroperasi",
  },
  // Putri Gianyar
  {
    name: "KMP. Putri Gianyar",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "36 Unit Campuran",
    teus: "300 Penumpang",
    length: "62.16 M",
    built: "1984",
    flag: "Indonesia",
    class: "BKI ",
    route: "Kayangan – Pototano",
    status: "Beroperasi",
  },
  // Putri Yasmin
  {
    name: "KMP. Putri Yasmin",
    type: "Ro - Ro Passenger Ship",
    image: FLEET_IMG_7,
    kendaraan: "26 Unit Campuran",
    teus: "215 Penumpang",
    length: "60.00 M",
    built: "1991",
    flag: "Indonesia",
    class: "BKI ",
    route: "Lembar – Padang Bai",
    status: "Beroperasi",
  },
  // Naraya
  {
    name: "KMP. Naraya",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "38 Unit Campuran",
    teus: "345 Penumpang",
    length: "73.90 M",
    built: "1995",
    flag: "Indonesia",
    class: "BKI ",
    route: "Lembar – Padang Bai",
    status: "Beroperasi",
  },
  // Parama Kalyani
  {
    name: "KMP. Parama Kalyani",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "38 Unit Campuran",
    teus: "300 Penumpang",
    length: "76.00 M",
    built: "2018",
    flag: "Indonesia",
    class: "BKI ",
    route: "Lembar – Padang Bai",
    status: "Beroperasi",
  },
  // athayana
  {
    name: "KMP. Athayana",
    type: "Ro - Ro Passenger Ship",
    image: "",
    kendaraan: "35 Unit Campuran",
    teus: "414 Penumpang",
    length: "85.00 M",
    built: "2021",
    flag: "Indonesia",
    class: "BKI ",
    route: "Lembar – Padang Bai",
    status: "Beroperasi",
  },







];

export function Fleet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState(0);

  const prev = () => setSelected((s) => (s - 1 + fleet.length) % fleet.length);
  const next = () => setSelected((s) => (s + 1) % fleet.length);
  const ship = fleet[selected];

  return (
    <section id="fleet" className="py-28 bg-[#0B1829]" ref={ref}>
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
                Armada Kami
              </span>
            </div>
            <h2 className="text-white"> Armada Ferry Modern Berstandar Keselamatan Tinggi</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#D4A843] flex items-center justify-center text-white/60 hover:text-[#D4A843] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#D4A843] flex items-center justify-center text-white/60 hover:text-[#D4A843] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Main display */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Image + info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden bg-[#1A3A5C]"
              >
                {ship.image ? (
                  <img
                    src={ship.image}
                    alt={ship.name}
                    className="w-full h-[380px] object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-[380px] flex items-center justify-center">
                    <h1>Foto Belum Tersedia</h1>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1829]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[#D4A843] text-xs tracking-widest uppercase mb-1">
                        {ship.type}
                      </div>
                      <h3 className="text-white text-xl">{ship.name}</h3>
                      <p className="text-white/50 text-sm mt-1">{ship.route}</p>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs">
                      {ship.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Specs */}
            <div className="grid grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden mt-3">
              {[
                { icon: Car, label: "Kendaraan", value: ship.kendaraan },
                { icon: Package, label: "Kapasitas", value: ship.teus },
                { icon: Ruler, label: "Panjang", value: ship.length },
                { icon: Calendar, label: "Tahun", value: ship.built },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-[#112240] p-4 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white/30 text-xs">
                    <Icon className="w-3 h-3" />
                    {label}
                  </div>
                  <div className="text-white text-sm font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* List */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {fleet.map((ship, i) => (
              <button
                key={ship.name}
                onClick={() => setSelected(i)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 ${selected === i
                  ? "bg-[#112240] border-[#1E6FBF]"
                  : "bg-[#112240]/40 border-white/5 hover:border-white/20"
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`text-xs font-semibold tracking-wide ${selected === i ? "text-[#D4A843]" : "text-white/30"}`}>
                    {ship.type}
                  </div>
                  <div className={`w-2 h-2 rounded-full ${selected === i ? "bg-[#D4A843]" : "bg-white/20"}`} />
                </div>
                <div className={`text-sm font-semibold ${selected === i ? "text-white" : "text-white/50"}`}>
                  {ship.name}
                </div>
                <div className="text-xs text-white/30 mt-1">{ship.kendaraan} · {ship.length}</div>
              </button>
            ))}

            <div className="mt-4 p-5 bg-[#1A3A5C]/30 rounded-xl border border-white/5">
              <div className="text-white/40 text-xs mb-2">Kelas & Bendera</div>
              <div className="text-white/70 text-sm">{ship.class}</div>
              <div className="text-white/40 text-xs mt-2">Bendera: {ship.flag}</div>
            </div>
          </motion.div> */}


          {/* List Armada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#112240]/40 border border-white/5 rounded-2xl p-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div>
                  <h3 className="text-white text-sm font-semibold">
                    Daftar Armada
                  </h3>
                  <p className="text-white/40 text-xs">
                    {fleet.length} Kapal Ferry Aktif
                  </p>
                </div>

                {/* <div className="px-3 py-1 rounded-full bg-[#D4A843]/10 text-[#D4A843] text-xs">
                  Fleet
                </div> */}
              </div>

              {/* Scroll Area */}
              <div className="h-[470px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                {fleet.map((ship, i) => (
                  <button
                    key={ship.name}
                    onClick={() => setSelected(i)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${selected === i
                      ? "bg-[#112240] border-[#1E6FBF] shadow-lg shadow-[#1E6FBF]/10"
                      : "bg-[#112240]/30 border-white/5 hover:border-white/20 hover:bg-[#112240]/60"
                      }`}
                  >
                    <div className="flex gap-4 items-center">
                      {/* Thumbnail */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#1A3A5C] flex-shrink-0">
                        {ship.image ? (
                          <img
                            src={ship.image}
                            alt={ship.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white/30 text-xs">
                            No Image
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div
                            className={`font-semibold text-sm truncate ${selected === i
                              ? "text-white"
                              : "text-white/70"
                              }`}
                          >
                            {ship.name}
                          </div>

                          <div
                            className={`w-2 h-2 rounded-full flex-shrink-0 ${selected === i
                              ? "bg-[#D4A843]"
                              : "bg-white/20"
                              }`}
                          />
                        </div>

                        <div
                          className={`text-xs mt-1 ${selected === i
                            ? "text-[#D4A843]"
                            : "text-white/40"
                            }`}
                        >
                          {ship.type}
                        </div>

                        <div className="text-xs text-white/30 mt-2 truncate">
                          {ship.route}
                        </div>

                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <span className="px-2 py-1 rounded-full bg-white/5 text-white/50 text-[10px]">
                            {ship.kendaraan}
                          </span>

                          <span className="px-2 py-1 rounded-full bg-white/5 text-white/50 text-[10px]">
                            {ship.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail Kelas */}
            <div className="mt-4 p-5 bg-[#1A3A5C]/30 rounded-xl border border-white/5">
              <div className="text-white/40 text-xs mb-2">
                Kelas & Bendera
              </div>

              <div className="text-white/70 text-sm">
                {ship.class}
              </div>

              <div className="text-white/40 text-xs mt-2">
                Bendera: {ship.flag}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fleet count */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-between p-6 bg-[#112240] rounded-2xl border border-white/5"
        >
          <div>
            <div className="text-white/40 text-sm mb-1">Total Armada Aktif</div>
            <div className="text-white font-semibold">
              19 Unit Kapal · RORO
            </div>
          </div>
          <button className="px-6 py-3 bg-[#1E6FBF] hover:bg-[#2E86D4] text-white text-sm rounded transition-colors">
            Lihat Semua Armada
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
