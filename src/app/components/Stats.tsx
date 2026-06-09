import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Ship, Anchor, Calendar, Package, Home } from "lucide-react";

const stats = [
  { icon: Ship, value: 19, suffix: "", label: "Unit Kapal", description: "Armada modern berstandar internasional" },
  { icon: Anchor, value: 10, suffix: "", label: "Pelabuhan Tujuan", description: "Domestik" },
  { icon: Calendar, value: 50, suffix: " Tahun", label: "Pengalaman", description: "Melayani sejak 1976" },
  { icon: Home, value: 4, suffix: "", label: "Cabang", description: "Domestik" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative py-20 bg-[#0D1E35]" ref={ref}>
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#0D1E35] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#112240] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A3A5C] flex items-center justify-center group-hover:bg-[#1E6FBF]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#D4A843]" />
                </div>
                <div>
                  <div
                    className="text-white mb-1"
                    style={{
                      fontFamily: "'Libre Caslon Display', Georgia, serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[#D4A843] text-sm font-semibold tracking-wide mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/40 text-xs">{stat.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6FBF]/30 to-transparent" />
    </section>
  );
}
