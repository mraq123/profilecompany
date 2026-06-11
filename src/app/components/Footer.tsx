import { Anchor, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";



export function Footer() {


  const footerLinks = {
    Perusahaan: [
      { label: "Beranda", href: "#home" },
      { label: "Tentang", href: "#about" },
    ],
    Layanan: [
      { label: "Layanan", href: "#services" },
      { label: "Armada", href: "#fleet" },
      { label: "Rute", href: "#routes" },
    ],
    Informasi: [
      { label: "Kapal & Fasilitas", href: "#facilities" },
      { label: "Kontak", href: "#contact" },
      {
        label: "Jadwal",
        href: "https://jadwal.jemlaferry.com/jadwal.php?cabang=12",
      },
      {
        label: "Login",
        href: "https://jemlaferry.com/internalsbaru/index.php?isi=inside",
      },
    ],
  };


  const handleFooterLink = (href: string) => {
    // external link
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    // internal section
    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  return (
    <footer className="bg-[#060F1D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
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
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Perusahaan pelayaran dan logistik laut terpercaya yang telah melayani
              kebutuhan transportasi kargo Indonesia sejak 1995.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 text-[#D4A843] flex-shrink-0 mt-0.5" />
                <span>Jl. Wolter Monginsidi No.91 1, RT.1/RW.4, Rw. Bar., Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12170</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <Phone className="w-4 h-4 text-[#D4A843] flex-shrink-0" />
                <span>(021) 7266777</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <Mail className="w-4 h-4 text-[#D4A843] flex-shrink-0" />
                <span>-</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white mb-5"
                style={{ fontSize: "0.85rem", letterSpacing: "0.05rem", textTransform: "uppercase" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleFooterLink(link.href)}
                      className="
                      flex items-center gap-1.5
                      text-white/40 hover:text-white
                      text-sm transition-colors group
                    "
                    >
                      <ChevronRight
                        className="
                        w-3 h-3
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                      "
                      />

                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-white/5 pt-10 pb-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-white mb-2">Berlangganan Newsletter</h4>
            <p className="text-white/40 text-sm">
              Dapatkan info terkini tentang industri pelayaran dan berita perusahaan.
            </p>
          </div>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 bg-[#112240] border border-white/10 rounded-xl text-white placeholder-white/25 focus:outline-none focus:border-[#1E6FBF] transition-colors text-sm"
            />
            <button className="px-6 py-3 bg-[#1E6FBF] hover:bg-[#2E86D4] text-white text-sm rounded-xl transition-colors whitespace-nowrap">
              Berlangganan
            </button>
          </div>
        </div> */}

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 PT Jemla Ferry. Seluruh hak cipta dilindungi.
          </p>
          {/* <div className="flex gap-6">
            {["Kebijakan Privasi", "Syarat & Ketentuan", "Sitemap"].map((link) => (
              <button key={link} className="text-white/25 hover:text-white/50 text-xs transition-colors">
                {link}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
