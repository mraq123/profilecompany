import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const ships = [
  {
    id: 1,
    name: "KMP. Shanaya",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
      "/image/shanaya3.png",
      "/image/shanaya3.png",
      "/image/shanaya3.png",
      "/image/shanaya3.png",
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },
  {
    id: 2,
    name: "KMP. Jemla 01",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },
  {
    id: 3,
    name: "KMP. Jemla 02",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },
  {
    id: 4,
    name: "KMP. Jemla 03",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },
  {
    id: 5,
    name: "KMP. Jemla 04",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },

  {
    id: 6,
    name: "KMP. Jemla 05",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },

  {
    id: 7,
    name: "KMP. Jemla 06",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },

  {
    id: 8,
    name: "KMP. Jemla 07",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },
  {
    id: 9,
    name: "KMP. Jemla 08",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },
  {
    id: 10,
    name: "KMP. Jemla 09",
    image: "/image/shanaya3.png",
    status: "Beroperasi",
    facilities: [
      "/image/shanaya3.png",
      "/image/shanaya3.png",
    ],
  },
];


export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedShip, setSelectedShip] = useState<any>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const displayedShips = showAll
    ? ships
    : ships.slice(0, 8);

  const handleSelectShip = (ship: any) => {
    setSelectedShip(ship);

    setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };
  return (
    <section id="facilities" className="py-28 bg-[#0B1829]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={contentRef}>
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
              Kapal & Fasilitas
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-white">Kapal & Fasilitas</h2>
          </div>
        </motion.div>


        {!selectedShip ? (
          <>
            {/* LIST KAPAL */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {displayedShips.map((ship, i) => (
                <motion.div
                  key={ship.id}
                  // onClick={() => setSelectedShip(ship)}
                  onClick={() => handleSelectShip(ship)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  bg-[#112240]
                  border border-white/5
                  hover:border-[#D4A843]/40
                  transition-all
                "
                >
                  <div className="h-52 overflow-hidden">
                    {ship.image ? (
                      <img
                        src={ship.image}
                        alt={ship.name}
                        className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                      />
                    ) : (
                      <div className="w-full h-full bg-[#112240]">
                        <h1 className="text-[#D4A843] text-center pt-20">Foto Belum Tersedia</h1>
                      </div>
                    )}

                  </div>

                  <div className="p-5">
                    <h3 className="text-white font-semibold">
                      {ship.name}
                    </h3>

                    <p className="text-[#D4A843] text-sm mt-1">
                      Klik untuk melihat fasilitas
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {ships.length > 8 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="flex justify-center mt-10"
              >
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="
                  group
                  px-8 py-4
                  rounded-2xl
                  bg-[#112240]
                  border border-white/10
                  hover:border-[#D4A843]/40
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                "
                >
                  <span className="flex items-center gap-2">
                    {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Kapal"}

                    <span
                      className={`
                      transition-transform duration-300
                      ${showAll ? "rotate-180" : ""}
                    `}
                    >
                      ↓
                    </span>
                  </span>
                </button>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            key={selectedShip.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* HEADER */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">

              <div>
                <h3 className="text-white text-3xl font-semibold">
                  {selectedShip.name}
                </h3>

                <p className="text-white/50 mt-2">
                  Fasilitas Kapal
                </p>
              </div>

              <button
                onClick={() => setSelectedShip(null)}
                className="
                px-5 py-3
                rounded-xl
                bg-[#112240]
                border border-white/10
                hover:border-[#D4A843]/40
                text-white
                transition-all
              "
              >
                ← Kembali ke Daftar Kapal
              </button>
            </div>

            {/* GALERI */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedShip.facilities.map((img: string, idx: number) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="
                  overflow-hidden
                  rounded-2xl
                  bg-[#112240]
                  border border-white/5
                "
                >
                  <img
                    src={img}
                    alt=""
                    className="
                    w-full
                    h-72
                    object-cover
                  "
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

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
