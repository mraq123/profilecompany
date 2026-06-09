import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const offices = [
  {
    label: "Kantor Pusat",
    address: "Jl. Perak Barat No. 97, Surabaya 60177, Jawa Timur",
    phone: "+62 31 3294 5500",
    email: "info@samuderanusantara.co.id",
    hours: "Senin–Jumat, 08.00–17.00 WIB",
  },
  {
    label: "Kantor Jakarta",
    address: "Gedung Maritim Plaza Lt. 12, Jl. Tanjung Priok No. 1, Jakarta Utara 14310",
    phone: "+62 21 4301 8800",
    email: "jakarta@samuderanusantara.co.id",
    hours: "Senin–Jumat, 08.00–17.00 WIB",
  },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#0B1829]" ref={ref}>
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
              Hubungi Kami
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-white">Siap Membantu Kebutuhan Logistik Anda</h2>
            <p className="text-white/50 leading-relaxed">
              Tim kami siap memberikan konsultasi dan penawaran terbaik untuk
              kebutuhan pengiriman dan transportasi laut Anda. Hubungi kami sekarang.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="h-full flex items-center justify-center p-12 bg-[#112240] rounded-2xl border border-green-500/20 text-center">
                <div>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-white mb-3">Pesan Terkirim!</h3>
                  <p className="text-white/50 text-sm">
                    Terima kasih telah menghubungi kami. Tim kami akan merespons
                    dalam 1×24 jam kerja.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-6 py-3 bg-[#1E6FBF] text-white text-sm rounded-xl"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 bg-[#112240] rounded-2xl border border-white/5">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { name: "name", label: "Nama Lengkap", placeholder: "Budi Santoso", type: "text" },
                    { name: "email", label: "Email", placeholder: "budi@company.com", type: "email" },
                    { name: "phone", label: "Nomor Telepon", placeholder: "+62 812 3456 7890", type: "tel" },
                    { name: "company", label: "Nama Perusahaan", placeholder: "PT Maju Bersama", type: "text" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-white/50 text-xs mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={(form as any)[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full px-4 py-3 bg-[#1A3A5C] border border-white/10 rounded-xl text-white placeholder-white/25 focus:outline-none focus:border-[#1E6FBF] transition-colors text-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label className="block text-white/50 text-xs mb-2">Keperluan</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A3A5C] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#1E6FBF] transition-colors text-sm appearance-none"
                  >
                    <option value="" disabled>Pilih keperluan...</option>
                    <option value="cargo">Pengiriman Kargo</option>
                    <option value="charter">Charter Kapal</option>
                    <option value="logistics">Logistik & Distribusi</option>
                    <option value="freight">Freight Forwarding</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-white/50 text-xs mb-2">Pesan</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Ceritakan kebutuhan pengiriman Anda..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1A3A5C] border border-white/10 rounded-xl text-white placeholder-white/25 focus:outline-none focus:border-[#1E6FBF] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#D4A843] hover:bg-[#E5BE6A] text-[#0B1829] font-semibold rounded-xl transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </button>
              </form>
            )}
          </motion.div>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {offices.map((office) => (
              <div key={office.label} className="p-6 bg-[#112240] rounded-2xl border border-white/5">
                <div className="text-[#D4A843] text-xs font-semibold tracking-widest uppercase mb-4">
                  {office.label}
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-[#1E6FBF] flex-shrink-0 mt-0.5" />
                    <span className="text-white/60">{office.address}</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <Phone className="w-4 h-4 text-[#1E6FBF] flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-white/60 hover:text-white transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <Mail className="w-4 h-4 text-[#1E6FBF] flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-white/60 hover:text-white transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="text-white/30 text-xs pt-2 border-t border-white/5">
                    {office.hours}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="p-6 bg-[#112240] rounded-2xl border border-white/5">
              <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
                Media Sosial
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn", handle: "@samuderanusantara" },
                  { icon: Instagram, label: "Instagram", handle: "@snl_shipping" },
                  { icon: Facebook, label: "Facebook", handle: "Samudera Nusantara" },
                  { icon: Youtube, label: "YouTube", handle: "SNL Official" },
                ].map(({ icon: Icon, label, handle }) => (
                  <button
                    key={label}
                    className="flex items-center gap-2 p-3 bg-[#1A3A5C] rounded-xl hover:bg-[#1E6FBF]/20 transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-[#1E6FBF] group-hover:text-[#D4A843] transition-colors" />
                    <div className="text-left">
                      <div className="text-white/60 text-xs font-semibold">{label}</div>
                      <div className="text-white/30 text-xs">{handle}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Emergency contact */}
            <div className="p-5 bg-[#1E6FBF]/10 border border-[#1E6FBF]/20 rounded-2xl">
              <div className="text-[#1E6FBF] text-xs font-semibold tracking-wide uppercase mb-2">
                24/7 Emergency Line
              </div>
              <div className="text-white font-semibold text-lg">+62 800 1234 5678</div>
              <div className="text-white/40 text-xs mt-1">
                Hotline darurat kapal & kargo — gratis dari semua operator
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
