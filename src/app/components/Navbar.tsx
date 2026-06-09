import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Anchor, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Armada", href: "#fleet" },
  { label: "Rute", href: "#routes" },
  { label: "Proyek", href: "#projects" },
  { label: "Berita", href: "#news" },
  { label: "Kontak", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0B1829]/95 backdrop-blur-md border-b border-white/8 shadow-2xl"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <button
              onClick={() => handleNav("#home")}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-[white] flex items-center justify-center">
                <ImageWithFallback
                  src="/image/logoori.jpeg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "39% 50%" }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white tracking-wider"
                  style={{
                    fontFamily: "'Libre Caslon Text', Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                  }}
                >
                  Jemla Ferry
                </span>
                <span
                  className="text-[#D4A843] tracking-[0.3em]"
                  style={{ fontSize: "0.6rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Ferry Service
                </span>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`relative px-4 py-2 text-sm transition-colors duration-200 ${isActive ? "text-[#D4A843]" : "text-white/70 hover:text-white"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4A843]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNav("#contact")}
                className="px-5 py-2.5 bg-[#1E6FBF] hover:bg-[#2E86D4] text-white text-sm rounded transition-colors duration-200"
              >
                Hubungi Kami
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-0 right-0 z-40 bg-[#0B1829]/98 backdrop-blur-md border-b border-white/8"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-white/8">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full py-3 bg-[#1E6FBF] text-white rounded text-sm"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
