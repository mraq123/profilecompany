import { Anchor, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

const footerLinks = {
  Perusahaan: ["Tentang Kami", "Visi & Misi", "Nilai Perusahaan", "Sertifikasi", "Karir"],
  Layanan: ["Pengiriman Kargo", "Charter Kapal", "Logistik & Distribusi", "Freight Forwarding", "Bongkar Muat"],
  Informasi: ["Berita & Artikel", "Proyek & Portofolio", "Rute & Jaringan", "Armada Kapal", "FAQ"],
};

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060F1D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#D4A843] rounded-full flex items-center justify-center">
                <Anchor className="w-5 h-5 text-[#0B1829]" strokeWidth={2.5} />
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
                  SAMUDERA
                </span>
                <span
                  className="text-[#D4A843] tracking-[0.3em]"
                  style={{ fontSize: "0.6rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  NUSANTARA LINE
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
                <span>Jl. Perak Barat No. 97, Surabaya 60177</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <Phone className="w-4 h-4 text-[#D4A843] flex-shrink-0" />
                <span>+62 31 3294 5500</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/40">
                <Mail className="w-4 h-4 text-[#D4A843] flex-shrink-0" />
                <span>info@samuderanusantara.co.id</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white mb-5"
                style={{ fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="flex items-center gap-1.5 text-white/40 hover:text-white text-sm transition-colors group">
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/5 pt-10 pb-10 grid lg:grid-cols-2 gap-8 items-center">
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
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2025 PT Samudera Nusantara Line. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            {["Kebijakan Privasi", "Syarat & Ketentuan", "Sitemap"].map((link) => (
              <button key={link} className="text-white/25 hover:text-white/50 text-xs transition-colors">
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
