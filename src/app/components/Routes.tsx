import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Globe, Anchor, ArrowLeftRight, Clock3, Ship } from "lucide-react";

const MAP_IMAGE =
  "/image/shanaya2.png";

const domesticRoutes = [
  {
    from: "Merak",
    to: "Bakauheni",
    freq: "24 Jam",
    estimasi: "3 Jam",
  },
  {
    from: "Ketapang",
    to: "Gilimanuk",
    freq: "24 Jam",
    estimasi: "1 Jam",
  },
  {
    from: "Lembar",
    to: "Padang Bai",
    freq: "24 Jam",
    estimasi: "3 Jam",
  },
  {
    from: "Kayangan",
    to: "Pototano",
    freq: "24 Jam",
    estimasi: "3 Jam",
  },
  {
    from: "Bajoe",
    to: "Kolaka",
    freq: "24 Jam",
    estimasi: "8 Jam",
  },
];

const ports = [
  "Pelabuhan Merak",
  "Pelabuhan Bakauheni",
  "Pelabuhan Ketapang",
  "Pelabuhan Gilimanuk",
  "Pelabuhan Lembar",
  "Pelabuhan Padang Bai",
  "Pelabuhan Kayangan",
  "Pelabuhan Pototano",
  "Pelabuhan Bajoe",
  "Pelabuhan Kolaka",
];

const regions = [
  { label: "Jawa", ports: 2 },
  { label: "Sulawesi", ports: 2 },
  { label: "Bali", ports: 2 },
  { label: "Lombok", ports: 2 },
  { label: "Sumbawa", ports: 1 },
  { label: "Sumatra", ports: 1 },
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
              Rute Penyeberangan
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <h2 className="text-white">Menghubungkan Antar Pulau dengan Layanan Ferry Terpercaya</h2>
            <p className="text-white/50 leading-relaxed flex items-end">
              PT. Jemla Ferry melayani berbagai rute penyeberangan strategis yang
              menghubungkan wilayah-wilayah penting di Indonesia. Dengan armada yang
              modern dan berstandar keselamatan tinggi, kami mendukung mobilitas
              penumpang, kendaraan, serta distribusi kebutuhan antar pulau secara aman
              dan nyaman.
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
            {/* <div className="text-white/30 text-xs tracking-widest uppercase mb-2">Jaringan Aktif</div> */}
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
            <div className="space-y-4">
              {domesticRoutes.map((route, i) => (
                <div
                  key={i}
                  className="
                group
                bg-[#112240]
                border border-white/5
                hover:border-[#1E6FBF]/40
                rounded-2xl
                p-5
                transition-all duration-300
                hover:-translate-y-1
              "
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                    {/* Route */}
                    <div className="flex-1">

                      {/* <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3">
                        Rute Penyeberangan
                      </div> */}

                      <div className="flex items-center gap-3">

                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#1E6FBF]" />
                          <span className="text-white font-semibold">
                            {route.from}
                          </span>
                        </div>

                        <div className="flex items-center flex-1 min-w-[60px]">
                          <div className="h-px bg-white/10 flex-1" />

                          <div className="mx-3">
                            <ArrowLeftRight className="w-4 h-4 text-[#D4A843]" />
                          </div>

                          <div className="h-px bg-white/10 flex-1" />
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#1E6FBF]" />
                          <span className="text-white font-semibold">
                            {route.to}
                          </span>
                        </div>

                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-wrap gap-2 lg:flex-nowrap">

                      <div
                        className="
              flex items-center gap-2
              px-3 py-2
              rounded-xl
              bg-[#D4A843]/10
              border border-[#D4A843]/20
            "
                      >
                        <Clock3 className="w-4 h-4 text-[#D4A843]" />
                        <span className="text-[#D4A843] text-xs font-medium">
                          {route.estimasi}
                        </span>
                      </div>

                      <div
                        className="
              flex items-center gap-2
              px-3 py-2
              rounded-xl
              bg-[#1E6FBF]/10
              border border-[#1E6FBF]/20
            "
                      >
                        <Ship className="w-4 h-4 text-[#7BB8FF]" />
                        <span className="text-[#7BB8FF] text-xs font-medium">
                          {route.freq}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-[#D4A843]" />
              <h3 className="text-white">
                Jaringan Pelabuhan Operasional
              </h3>
            </div>

            {/* Container */}
            <div
              className="
      flex-1
      bg-[#112240]/30
      border border-white/5
      rounded-2xl
      p-3
      overflow-hidden
    "
            >
              {/* Scroll Area */}
              <div
                className="
        h-[420px]
        overflow-y-auto
        pr-2
        space-y-3
        custom-scrollbar
      "
              >
                {ports.map((port, i) => (
                  <motion.div
                    key={port}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                    }}
                    whileHover={{
                      x: 4,
                      scale: 1.01,
                    }}
                    className="
            relative
            overflow-hidden
            bg-[#112240]
            border border-white/5
            hover:border-[#1E6FBF]/40
            rounded-xl
            p-4
            transition-all
            duration-300
            group
          "
                  >
                    {/* Hover Glow */}
                    <div
                      className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#1E6FBF]/0
              via-[#1E6FBF]/5
              to-[#D4A843]/5
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
            "
                    />

                    <div className="relative flex items-center justify-between gap-4">
                      {/* Left */}
                      <div className="flex items-center gap-4 min-w-0">
                        <div
                          className="
                  w-11 h-11
                  rounded-xl
                  bg-[#1E6FBF]/10
                  border border-[#1E6FBF]/20
                  flex items-center justify-center
                  flex-shrink-0
                "
                        >
                          <Globe className="w-5 h-5 text-[#1E6FBF]" />
                        </div>

                        <div className="min-w-0">
                          <h4 className="text-white font-medium truncate">
                            {port}
                          </h4>

                          <p className="text-white/40 text-xs mt-1">
                            Pelabuhan Operasional
                          </p>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="relative">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                        </div>

                        <span className="text-green-400 text-xs font-medium">
                          Aktif
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
