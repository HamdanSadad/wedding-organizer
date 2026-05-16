<div align="center">
  <img src="public/icon.svg" alt="Dxuan Wedding Logo" width="120" />
  <h1>✨ Dxuan Wedding ✨</h1>
  <p><strong>Exclusive & Premium Wedding Landing Page</strong></p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15.0+-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react" alt="React" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-Interactive-ff0055?style=for-the-badge&logo=framer" alt="Framer Motion" /></a>
  </p>
</div>

<br />

Sebuah *landing page* modern, elegan, dan premium yang dirancang khusus untuk bisnis **Wedding Organizer**. Dibangun dengan arsitektur web modern untuk menjamin performa tinggi (*High TPS*), pengalaman pengguna (*UX*) yang mewah, serta antarmuka yang sangat responsif.

---

## 🌟 Fitur Unggulan

- 💎 **Desain Eksklusif (Premium UI/UX):** Menggunakan palet warna elegan yang cerah dengan kontras teks yang tegas, memancarkan aura kemewahan.
- 📱 **Responsif Sepenuhnya:** Tampilan *pixel-perfect* di semua ukuran layar mulai dari ponsel (*mobile*), tablet, hingga layar desktop lebar.
- 🚀 **Animasi Mulus & Partikel:** Interaksi hidup menggunakan *Framer Motion*, lengkap dengan latar belakang partikel *starry night* dan gelembung elegan yang mengambang.
- 🖼️ **Galeri Interaktif (Lightbox):** Galeri portofolio yang dapat diklik untuk menampilkan detail gambar dalam format *zoom-in/modal*.
- 🔮 **Fitur Unik "Cek Tanggal Baik":** Form interaktif yang menganalisa tanggal pernikahan klien dan memberikan lebih dari 15 apresiasi romantis secara acak.
- 📝 **Clean Code & Terstruktur:** Kode ditulis menggunakan standar *Best Practice* Next.js App Router, mudah dipelihara, dan sangat siap untuk skalabilitas (*High Traffic*).

---

## 🛠️ Tech Stack (Teknologi)

Project ini dibangun dengan *stack* terbaik di kelasnya:

* **[Next.js (App Router)](https://nextjs.org/)** - Framework utama.
* **[React 19](https://react.dev/)** - Library UI mutakhir.
* **[Tailwind CSS v4](https://tailwindcss.com/)** - *Styling* super cepat & efisien.
* **[TypeScript](https://www.typescriptlang.org/)** - Kode yang aman dan meminimalisir *bug*.
* **[Framer Motion](https://www.framer.com/motion/)** - Animasi *micro-interactions* dan *scroll reveal*.
* **[Lucide React](https://lucide.dev/)** - Kumpulan ikon estetik.
* **[Google Fonts](https://fonts.google.com/)** - Menggunakan *Playfair Display* (Serif) dan *Montserrat* (Sans-serif) untuk keterbacaan tingkat tinggi.

---

## 🚀 Panduan Instalasi (Menjalankan Secara Lokal)

Pastikan Anda telah menginstal **[Node.js](https://nodejs.org/)** sebelum memulai.

1. **Clone Repositori ini:**
   ```bash
   git clone https://github.com/USERNAME_ANDA/wedding-landing.git
   ```

2. **Masuk ke dalam folder project:**
   ```bash
   cd wedding-landing
   ```

3. **Instal seluruh dependensi:**
   ```bash
   npm install
   ```
   *(Atau gunakan `yarn install` / `pnpm install` jika Anda menggunakan package manager lain).*

4. **Jalankan *Development Server*:**
   ```bash
   npm run dev
   ```

5. **Lihat Hasilnya:**
   Buka browser Anda dan kunjungi 👉 [http://localhost:3000](http://localhost:3000)

---

## 📂 Struktur Direktori Utama

Pusat utama modifikasi ada pada folder `app/`:

```text
wedding-landing/
├── app/
│   ├── favicon.ico / icon.svg  # Logo / Ikon Tab Browser
│   ├── globals.css             # Tema Utama & Warna CSS
│   ├── layout.tsx              # Tata Letak Utama & Pengaturan Font
│   └── page.tsx                # Seluruh UI/UX Halaman Utama (Beranda)
├── public/
│   └── images/                 # Tempat menyimpan gambar, logo, dan aset lainnya
├── package.json                # Konfigurasi dependensi project
└── tailwind.config.ts          # Konfigurasi Tailwind (Jika ada)
```

---

## 🎨 Panduan Kustomisasi Dasar

* **Ubah Warna Tema:** Buka file `app/globals.css` dan edit variabel di dalam bagian `@theme`.
* **Ubah Teks & Gambar:** Semua tulisan, tautan, dan jalur gambar (`/images/...`) dapat Anda sesuaikan langsung di dalam file `app/page.tsx`.
* **Ubah Ikon Browser:** Ganti file `app/icon.svg` dengan logo Anda sendiri.

---

<div align="center">
  Dibuat dengan ❤️ untuk momen yang tak terlupakan. <br/>
  <b>© Dxuan Wedding. All Rights Reserved.</b>
</div>
