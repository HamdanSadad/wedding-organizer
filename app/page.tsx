"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Menu, X, Sparkles, Calendar, Star, MapPin, Check, ChevronDown, ArrowRight,
  Mail, Phone, Minus, Plus, CalendarHeart
} from "lucide-react";

// ======================
// ICONS
// ======================
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

// ======================
// STAR PARTICLES BACKGROUND (For GoodDate Section)
// ======================
function StarParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#0B132B]">
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 4 + 2;
        return (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px 2px rgba(255,255,255,0.8)"
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        );
      })}
    </div>
  );
}

// ======================
// BUBBLE PARTICLES BACKGROUND (For Hero)
// ======================
function BubbleParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 8 + 4;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-secondary/40"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}

// ======================
// MAIN PAGE
// ======================
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary text-neutral font-sans selection:bg-secondary selection:text-white">
      <HeaderNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GoodDateSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

// ======================
// 1. NAVBAR / HEADER
// ======================
function HeaderNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Galeri", href: "#portfolio" },
    { name: "Proses", href: "#process" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 px-4 transition-all duration-500">
      <div className={`mx-auto max-w-6xl transition-all duration-500 ${isScrolled
        ? "glassmorphism rounded-full px-6 py-3"
        : "bg-transparent px-4 py-4"
        } flex items-center justify-between`}>

        <a href="#hero" className="flex items-center gap-2 cursor-pointer group">
          <Sparkles className={`w-5 h-5 transition-colors ${isScrolled ? "text-secondary" : "text-white drop-shadow-md"}`} />
          <span className={`font-serif text-2xl tracking-widest font-bold ${isScrolled ? "text-neutral" : "text-white drop-shadow-md"}`}>
            Dxuan.
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-1 group overflow-hidden ${isScrolled ? "text-neutral" : "text-white drop-shadow-md"}`}
            >
              <span className="relative z-10 group-hover:text-secondary transition-colors">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded-full text-xs tracking-widest font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${isScrolled
              ? "bg-secondary text-white hover:bg-neutral hover:text-white"
              : "bg-white text-neutral hover:bg-secondary hover:text-white"
              }`}
          >
            Konsultasi
          </a>
        </nav>

        <button
          className={`lg:hidden ${isScrolled ? "text-neutral" : "text-white drop-shadow-md"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-4 right-4 glassmorphism rounded-2xl p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral font-bold hover:text-secondary text-lg font-serif border-b border-black/5 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center bg-secondary text-white rounded-full py-3 text-sm tracking-widest font-bold uppercase mt-2 shadow-md"
              >
                Pesan Konsultasi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ======================
// 2. HERO SECTION
// ======================
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-alt">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Dxuan Wedding"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <BubbleParticles />

      <div className="relative z-10 mx-auto w-full px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-block py-1.5 px-6 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-xs tracking-[0.3em] font-bold text-white uppercase mb-4 shadow-lg">
            Exclusive Wedding Planner
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Mewujudkan <span className="italic text-secondary drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">Momen</span> <br />
            Terindah Anda.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-medium text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Setiap kisah cinta itu unik. Kami hadir untuk merangkai keindahan, harmoni, dan kemewahan dalam satu hari yang tak terlupakan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
            <a href="#contact" className="w-full sm:w-auto bg-secondary text-white px-10 py-4 rounded-full text-sm tracking-widest font-bold uppercase shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Mulai Rencana
            </a>
            <a href="#portfolio" className="w-full sm:w-auto bg-white/20 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-full text-sm tracking-widest font-bold uppercase shadow-xl hover:bg-white/30 transition-all">
              Lihat Galeri
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 flex flex-col items-center drop-shadow-md"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}

// ======================
// 3. ABOUT SECTION
// ======================
function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-secondary">
              <Sparkles className="w-5 h-5 text-secondary" />
              <p className="text-xs uppercase tracking-[0.2em] font-extrabold">Tentang Kami</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral font-bold leading-tight">
              Keanggunan yang <br /> Bercerita.
            </h2>
            <p className="text-neutral/80 leading-relaxed text-lg font-medium">
              Pernikahan bukan sekadar acara, melainkan karya seni yang menceritakan perjalanan cinta Anda. Di Dxuan Wedding, kami memadukan estetika modern dengan kehangatan personal.
            </p>
            <p className="text-neutral/80 leading-relaxed text-lg font-medium pb-4">
              Biarkan kami mengurus setiap detail kecil yang rumit, sehingga Anda dapat menikmati hari istimewa Anda dengan penuh ketenangan dan kebahagiaan.
            </p>
            <div className="flex gap-10 border-t border-neutral/20 pt-8">
              <div>
                <p className="font-serif font-bold text-4xl text-secondary drop-shadow-sm">500+</p>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-neutral/60 mt-2">Momen Tercipta</p>
              </div>
              <div>
                <p className="font-serif font-bold text-4xl text-secondary drop-shadow-sm">10</p>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-neutral/60 mt-2">Tahun Pengalaman</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          >
            <Image src="/images/about.png" alt="Tentang Dxuan Wedding" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ======================
// 4. GOOD DATE CHECKER
// ======================
function GoodDateSection() {
  const [date, setDate] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    setIsChecking(true);
    setResult(null);

    setTimeout(() => {
      setIsChecking(false);
      const responses = [
        "Wah, tanggal yang sangat indah! Musim yang tepat untuk memulai lembaran baru dengan penuh cinta dan harapan.",
        "Pilihan yang luar biasa. Tanggal ini membawa aura kedamaian dan kebahagiaan abadi untuk Anda berdua.",
        "Sempurna! Kombinasi angka pada hari ini menandakan keberuntungan dan perjalanan cinta yang tak terpisahkan.",
        "Tanggal yang sangat cantik. Cocok untuk perayaan yang hangat, intim, dan dikenang selamanya.",
        "Sebuah hari yang diberkahi. Alam semesta seolah merestui setiap langkah Anda di tanggal ini.",
        "Fantastis! Ini adalah tanggal yang sering dipilih oleh para raja dan ratu di masa lalu untuk merayakan cinta mereka.",
        "Tanggal yang sangat romantis. Posisi bintang-bintang mendukung awal baru yang harmonis dan penuh gairah.",
        "Pilihan cerdas! Tanggal ini memiliki resonansi energi positif yang luar biasa untuk sebuah ikatan suci.",
        "Hari yang memancarkan aura emas. Pernikahan di tanggal ini akan dipenuhi dengan kemakmuran dan tawa.",
        "Angka-angka pada tanggal ini menyimbolkan keabadian dan kesetiaan tanpa batas. Pilihan yang sangat tepat!",
        "Wah, ini adalah 'Golden Date'! Tanggal langka yang menjanjikan keharmonisan dan kedamaian sepanjang masa.",
        "Sangat elegan. Tanggal ini memberikan nuansa klasik yang tak lekang oleh waktu untuk hari bahagia Anda.",
        "Ini adalah hari di mana keajaiban sering terjadi. Persiapkan diri Anda untuk momen magis yang tak terlupakan.",
        "Pilihan yang merepresentasikan keseimbangan. Hari yang pas untuk dua jiwa yang menyatu menjadi satu.",
        "Tanggal yang luar biasa manis! Cocok sekali dengan tema pernikahan impian yang telah Anda rancang."
      ];
      setResult(responses[Math.floor(Math.random() * responses.length)]);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <StarParticles />

      <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-[2rem] p-8 md:p-14 shadow-2xl border border-white/20">
          <CalendarHeart className="w-14 h-14 text-secondary mx-auto mb-6 drop-shadow-[0_0_15px_rgba(212,163,115,0.8)]" />
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-white mb-6 drop-shadow-md">
            Cek Tanggal Baik Anda
          </h2>
          <p className="text-white/90 mb-10 max-w-2xl mx-auto font-medium text-lg drop-shadow-sm">
            Punya rencana tanggal pernikahan? Masukkan tanggalnya dan mari kita lihat makna tersembunyi serta keindahan di balik hari pilihan Anda.
          </p>

          <form onSubmit={checkDate} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 focus:border-secondary outline-none text-neutral bg-white font-bold text-lg shadow-inner"
            />
            <button
              type="submit"
              disabled={isChecking}
              className="bg-secondary text-white px-8 py-4 rounded-full text-sm font-extrabold tracking-widest uppercase hover:bg-white hover:text-secondary hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all disabled:opacity-70 disabled:hover:shadow-none shadow-lg"
            >
              {isChecking ? "Menganalisa..." : "Cek Sekarang"}
            </button>
          </form>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-10 p-8 bg-white/95 rounded-2xl border-2 border-secondary shadow-2xl relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                  Hasil Analisa
                </div>
                <p className="font-serif font-bold text-2xl md:text-3xl italic leading-relaxed text-neutral">
                  "{result}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ======================
// 5. SERVICES
// ======================
function ServicesSection() {
  const packages = [
    {
      name: "Intimate Harmony",
      desc: "Perayaan hangat untuk keluarga dan sahabat terdekat. Sederhana, namun berkesan.",
      features: ["Maksimal 100 Tamu", "Desain Personal", "Koordinator Hari H"],
    },
    {
      name: "Grand Elegance",
      desc: "Simbol kemewahan dan keanggunan. Dirancang untuk pernikahan berskala besar yang memukau.",
      features: ["Maksimal 800 Tamu", "Konsep Menyeluruh", "Koreografi Acara"],
      isPopular: true
    },
    {
      name: "Bespoke Royal",
      desc: "Tanpa batasan. Kami merancang pernikahan yang merefleksikan imajinasi tertinggi Anda.",
      features: ["Tamu Tak Terbatas", "Dekorasi Kustom", "Pendampingan 24/7"],
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-alt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary font-extrabold mb-4">Layanan Kami</p>
          <h2 className="font-serif font-bold text-4xl md:text-6xl text-neutral">Pilihan Tanpa Kompromi</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, idx) => (
            <a key={pkg.name} href="#contact" className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className={`relative h-full p-8 md:p-10 rounded-3xl transition-all duration-300 border-2 ${pkg.isPopular
                  ? 'bg-neutral text-primary border-neutral shadow-2xl shadow-neutral/30'
                  : 'bg-white text-neutral border-transparent shadow-lg hover:shadow-2xl hover:border-secondary'
                  }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] uppercase tracking-widest px-6 py-2 rounded-full font-extrabold shadow-md">
                    Paling Diminati
                  </div>
                )}
                <h3 className="font-serif font-bold text-3xl mb-4">{pkg.name}</h3>
                <p className={`text-base font-medium mb-8 leading-relaxed ${pkg.isPopular ? 'text-primary/80' : 'text-neutral/70'}`}>
                  {pkg.desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-base font-medium">
                      <Check className={`w-5 h-5 ${pkg.isPopular ? 'text-secondary' : 'text-secondary'}`} />
                      <span className={pkg.isPopular ? 'text-primary' : 'text-neutral'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-auto inline-flex items-center gap-2 text-sm tracking-widest font-extrabold uppercase transition-colors ${pkg.isPopular ? 'text-secondary group-hover:text-white' : 'text-secondary group-hover:text-neutral'
                  }`}>
                  Pilih Paket <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================
// 6. GALLERY (With Lightbox)
// ======================
function PortfolioSection() {
  const images = [
    "/images/portfolio_1.png",
    "/images/portfolio_2.png",
    "/images/portfolio_3.png",
    "/images/portfolio_4.png",
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-primary">
      <div className="mx-auto max-w-6xl px-6 text-center mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-extrabold mb-4">Portofolio</p>
        <h2 className="font-serif font-bold text-4xl md:text-6xl text-neutral">Galeri Keabadian</h2>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid shadow-lg"
              onClick={() => setSelectedImg(src)}
            >
              <Image src={src} alt="Galeri" width={600} height={800} className="w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-neutral/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-white text-neutral px-8 py-3 rounded-full text-xs font-extrabold tracking-widest uppercase shadow-2xl">Lihat Detail</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-secondary bg-white/10 p-3 rounded-full backdrop-blur-md transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImg} alt="Detail" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ======================
// 7. PROCESS (Flowchart Style)
// ======================
function ProcessSection() {
  const steps = [
    { n: "01", t: "Konsultasi", d: "Membahas impian & visi." },
    { n: "02", t: "Konsep", d: "Kurasi gaya & moodboard." },
    { n: "03", t: "Persiapan", d: "Eksekusi vendor & detail." },
    { n: "04", t: "Hari H", d: "Simfoni perayaan sempurna." },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-alt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary font-extrabold mb-4">Metodologi</p>
          <h2 className="font-serif font-bold text-4xl md:text-6xl text-neutral">Perjalanan Menuju Hari H</h2>
        </div>

        <div className="relative">
          {/* Connecting line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[3px] bg-secondary/20 -translate-y-1/2 z-0 rounded-full"></div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white border-2 border-transparent hover:border-secondary rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all relative group"
              >
                <div className="w-20 h-20 mx-auto bg-primary text-secondary rounded-full flex items-center justify-center font-serif font-bold text-3xl mb-6 shadow-inner group-hover:bg-secondary group-hover:text-white transition-colors">
                  {step.n}
                </div>
                <h3 className="font-serif font-bold text-2xl text-neutral mb-3">{step.t}</h3>
                <p className="text-base font-medium text-neutral/70">{step.d}</p>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-secondary drop-shadow-md bg-alt rounded-full">
                    <ArrowRight className="w-10 h-10" />
                  </div>
                )}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-secondary rotate-90 bg-alt rounded-full">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ======================
// 8. TESTIMONIALS
// ======================
function TestimonialsSection() {
  return (
    <section className="py-24 md:py-36 bg-neutral text-white relative overflow-hidden">
      <BubbleParticles />
      <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
        <Star className="w-12 h-12 text-secondary mx-auto mb-10 drop-shadow-lg" fill="currentColor" />
        <p className="font-serif font-bold text-3xl md:text-5xl leading-relaxed mb-12 text-primary drop-shadow-md">
          "Dxuan Wedding mewujudkan kemewahan yang kami impikan. Semuanya sempurna, eksklusif, dan benar-benar tak terlupakan."
        </p>
        <div>
          <p className="font-extrabold tracking-widest uppercase text-base text-secondary">Amanda & Kevin</p>
          <p className="text-base text-white/70 mt-2 font-medium">Grand Ballroom, 2025</p>
        </div>
      </div>
    </section>
  );
}

// ======================
// 9. FAQ
// ======================
function FaqSection() {
  const faqs = [
    { q: "Berapa lama waktu persiapan ideal?", a: "Kami menyarankan 6 hingga 12 bulan untuk hasil sempurna dan mengamankan vendor terbaik." },
    { q: "Apakah melayani luar kota/negeri?", a: "Tentu. Kami memiliki tim khusus untuk destination wedding di seluruh Indonesia dan luar negeri." },
    { q: "Apakah ada biaya konsultasi awal?", a: "Konsultasi pertama kami gratis. Mari bertemu, minum teh, dan membahas impian Anda." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-center text-neutral mb-12">Pertanyaan Umum</h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border-2 border-neutral/10 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <button className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-alt/50 transition-colors" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-serif font-bold text-2xl text-neutral pr-4">{f.q}</span>
                {open === i ? <Minus className="w-6 h-6 text-secondary shrink-0" /> : <Plus className="w-6 h-6 text-neutral/50 shrink-0" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-alt/30">
                    <p className="px-8 pb-8 pt-2 text-neutral/80 font-medium text-lg leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================
// 10. CONTACT
// ======================
function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-alt border-t border-neutral/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="font-serif font-bold text-5xl md:text-6xl text-neutral mb-6">Mari Berbincang.</h2>
            <p className="text-neutral/80 mb-12 text-xl font-medium leading-relaxed">Kami menantikan cerita Anda. Tim kami akan segera merespon dengan personal.</p>
            <div className="space-y-10">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg"><Phone className="w-7 h-7 text-secondary" /></div>
                <div><p className="text-xs uppercase tracking-widest text-neutral/60 font-extrabold mb-2">Telepon</p><p className="font-serif font-bold text-2xl">+62 812 3456 7890</p></div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg"><Mail className="w-7 h-7 text-secondary" /></div>
                <div><p className="text-xs uppercase tracking-widest text-neutral/60 font-extrabold mb-2">Email</p><p className="font-serif font-bold text-2xl">hello@dxuanwedding.com</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border-2 border-neutral/5">
            <form className="space-y-8">
              <div>
                <input type="text" placeholder="Nama Anda" className="w-full border-b-2 border-neutral/20 py-4 bg-transparent outline-none focus:border-secondary transition-colors text-lg font-bold text-neutral placeholder:text-neutral/40 placeholder:font-medium" />
              </div>
              <div>
                <input type="email" placeholder="Alamat Email" className="w-full border-b-2 border-neutral/20 py-4 bg-transparent outline-none focus:border-secondary transition-colors text-lg font-bold text-neutral placeholder:text-neutral/40 placeholder:font-medium" />
              </div>
              <div>
                <textarea placeholder="Ceritakan impian pernikahan Anda..." rows={4} className="w-full border-b-2 border-neutral/20 py-4 bg-transparent outline-none focus:border-secondary transition-colors resize-none text-lg font-bold text-neutral placeholder:text-neutral/40 placeholder:font-medium"></textarea>
              </div>
              <button type="button" className="w-full bg-neutral text-white py-5 rounded-full font-extrabold tracking-widest text-base uppercase hover:bg-secondary hover:shadow-xl transition-all mt-4">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ======================
// 11. FOOTER
// ======================
function Footer() {
  return (
    <footer className="bg-neutral text-white pt-24 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="font-serif text-4xl font-bold text-primary mb-6 block">Dxuan.</span>
            <p className="text-white/70 text-base font-medium leading-relaxed mb-8 pr-6">Mendefinisikan ulang kemewahan pernikahan. Keanggunan yang diceritakan lewat detail sempurna.</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/hamdannn_s" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"><InstagramIcon className="w-5 h-5" /></a>
              <a href="https://github.com/HamdanSadad" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-extrabold text-secondary mb-8">Navigasi</h4>
            <ul className="space-y-4 text-base text-white/80 font-medium">
              <li><a href="#about" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Layanan Premium</a></li>
              <li><a href="#portfolio" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Galeri</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-extrabold text-secondary mb-8">Kantor Pusat</h4>
            <p className="text-base text-white/80 font-medium leading-relaxed">Dxuan Studio<br />Jl. Sudirman No. 123<br />Jakarta Selatan, Indonesia</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-xs text-white/50 tracking-widest font-bold uppercase">
          &copy; {new Date().getFullYear()} Dxuan Wedding. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
