import { useRef } from "react";
import { motion, useInView } from "motion/react";

const partners = [
  "PT Pertamina (Persero)",
  "PT PLN Nusantara Power",
  "PT Waskita Karya Tbk",
  "PT Astra Agro Lestari Tbk",
  "PT Adaro Energy Tbk",
  "PT Vale Indonesia Tbk",
  "Maersk Line",
  "PIL (Pacific Intl Lines)",
  "Pelindo Group",
  "PT Krakatau Steel Tbk",
];

export function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-[#0D1E35] border-t border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="text-white/30 text-xs tracking-widest uppercase mb-2">
            Dipercaya oleh Perusahaan Terkemuka
          </div>
          <h2 className="text-white" style={{ fontSize: "1.5rem" }}>
            Klien & Mitra Strategis
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0D1E35] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0D1E35] to-transparent z-10" />

          <div className="flex gap-6 flex-wrap justify-center">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 + 0.3 }}
                className="px-6 py-3 bg-[#112240] border border-white/8 rounded-xl text-white/40 text-sm hover:text-white/70 hover:border-white/20 transition-all duration-200 cursor-default whitespace-nowrap"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E6FBF] to-[#0D3A6E]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?w=1400&h=300&fit=crop&auto=format)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 px-10 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-white/60 text-sm tracking-widest uppercase mb-3">
                Mulai Bersama Kami
              </div>
              <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                Percayakan Kebutuhan Logistik Laut Anda kepada Kami
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-[#D4A843] hover:bg-[#E5BE6A] text-[#0B1829] font-semibold rounded-xl transition-colors"
              >
                Minta Penawaran
              </button>
              <button
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border border-white/30 hover:border-white text-white rounded-xl transition-colors"
              >
                Lihat Layanan
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
