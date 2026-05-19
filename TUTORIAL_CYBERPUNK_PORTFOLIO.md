# 🚀 Tutorial Membangun Cyberpunk Portfolio dengan Next.js & GitHub Pages

> Website: https://scrtsjw.github.io/cyberpunk-portfolio/
> Stack: Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion · GitHub Pages

---

## 📋 Daftar Isi

1. [Persiapan & Setup Awal](#1-persiapan--setup-awal)
2. [Struktur Project](#2-struktur-project)
3. [Konfigurasi Static Export](#3-konfigurasi-static-export)
4. [Komponen yang Dibangun](#4-komponen-yang-dibangun)
5. [Deploy ke GitHub Pages](#5-deploy-ke-github-pages)
6. [Troubleshooting](#6-troubleshooting)
7. [Cara Prompt AI untuk Membangun Website Ini](#7-cara-prompt-ai-untuk-membangun-website-ini)

---

## 1. Persiapan & Setup Awal

### Prasyarat
- Node.js v20 atau lebih baru
- Git
- Akun GitHub
- VS Code (disarankan)

### Membuat Project Baru

```bash
npx create-next-app@latest cyberpunk-portfolio
cd cyberpunk-portfolio
```

Pilihan saat setup:
- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- App Router: **Yes**

### Install Dependencies Tambahan

```bash
npm install framer-motion lucide-react react-icons clsx tailwind-merge
```

---

## 2. Struktur Project

```
cyberpunk-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions untuk auto-deploy
├── app/
│   ├── layout.tsx              # Root layout & global styles
│   └── page.tsx                # Halaman utama (merangkai semua komponen)
├── components/
│   ├── Navbar.tsx              # Navigasi sticky dengan hamburger mobile
│   ├── Hero.tsx                # Section landing utama
│   ├── Team.tsx                # Grid kartu anggota tim
│   ├── Projects.tsx            # Grid kartu project
│   ├── About.tsx               # Timeline pengalaman
│   ├── Contact.tsx             # Form kontak
│   └── Footer.tsx              # Footer dengan ikon sosial
├── public/
│   └── images/
│       └── team/
│           ├── pandu.jpeg
│           ├── dayat.jpeg
│           └── raka.jpeg
├── next.config.ts              # Konfigurasi Next.js (wajib untuk deploy)
└── package.json
```

---

## 3. Konfigurasi Static Export

Agar bisa di-deploy ke GitHub Pages, Next.js harus di-export sebagai file statis.

### `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // Generate folder /out berisi HTML statis
  images: {
    unoptimized: true,        // Wajib untuk static export
  },
  basePath: "/cyberpunk-portfolio", // Sesuaikan dengan nama repo GitHub
};

export default nextConfig;
```

### `package.json` — Nonaktifkan Turbopack

```json
"scripts": {
  "dev": "next dev",
  "build": "next build --no-turbo",
  "start": "next start",
  "lint": "eslint"
}
```

> ⚠️ Turbopack tidak kompatibel dengan `output: "export"`, wajib tambahkan `--no-turbo`.

### Penting: Path Gambar dengan basePath

Karena menggunakan `basePath`, semua path gambar lokal harus menyertakan prefix:

```tsx
// ❌ Salah
image: "/images/team/pandu.jpeg"

// ✅ Benar
const basePath = "/cyberpunk-portfolio";
image: `${basePath}/images/team/pandu.jpeg`
```

---

## 4. Komponen yang Dibangun

### Navbar
- Sticky di atas halaman
- Berubah background saat scroll (glassmorphism)
- Hamburger menu untuk mobile
- Link anchor ke setiap section

### Hero
- Full-screen landing section
- Background grid cyberpunk dengan CSS
- Glitch text effect pada judul
- Tombol CTA dan link GitHub

### Team
- Grid 3 kolom (responsive ke 1 kolom di mobile)
- Kartu dengan efek hover (lift + border glow)
- Foto anggota dengan filter cyberpunk (contrast + brightness)
- Scan line overlay effect
- Social links (GitHub, Instagram, TikTok)
- Animasi gradient teks bergerak

### Projects
- Grid 2 kolom
- Neon top border per kartu (warna berbeda tiap project)
- Animasi masuk saat scroll (whileInView Framer Motion)

### About
- Timeline vertikal pengalaman
- Dot aktif dengan glow effect
- Bio singkat dalam card

### Contact
- Form dengan input cyberpunk style
- Info kontak (email, lokasi, status freelance)
- Feedback visual saat form terkirim

---

## 5. Deploy ke GitHub Pages

### Buat File GitHub Actions

Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

env:
  FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 24

      - name: Install & Build
        run: |
          npm install
          npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Setting GitHub Pages

1. Buka repo GitHub → **Settings → Pages**
2. Source: pilih branch **`gh-pages`**
3. Folder: **`/ (root)`**
4. Save

### Alur Deploy

```
git add .
git commit -m "pesan commit"
git push origin main
```

GitHub Actions otomatis berjalan → build → deploy ke `gh-pages` branch → website live.

---

## 6. Troubleshooting

| Masalah | Penyebab | Solusi |
|---|---|---|
| README muncul di website | `next.config.ts` belum dikonfigurasi | Tambahkan `output: "export"` dan `basePath` |
| Build gagal dengan Turbopack | Turbopack tidak support static export | Tambahkan `--no-turbo` di script build |
| Gambar tidak muncul | Path tidak menyertakan `basePath` | Prefix path dengan `/nama-repo` |
| Push ditolak (rejected) | Remote lebih baru dari lokal | `git pull origin main --rebase` dulu |
| Actions gagal exit code 128 | Tidak ada permission write | Tambahkan `permissions: contents: write` di workflow |

---

## 7. Cara Prompt AI untuk Membangun Website Ini

Berikut contoh prompt yang efektif untuk membangun setiap bagian website ini menggunakan AI (Claude, ChatGPT, dll):

---

### 🔧 Setup & Konfigurasi

```
Saya membuat portfolio cyberpunk menggunakan Next.js 16 dengan TypeScript 
dan Tailwind CSS v4. Saya ingin deploy ke GitHub Pages dengan nama repo 
"cyberpunk-portfolio". Tolong buatkan:
1. next.config.ts yang sudah dikonfigurasi untuk static export
2. GitHub Actions workflow untuk auto-deploy
3. Penjelasan mengapa --no-turbo diperlukan
```

---

### 🎨 Komponen Navbar

```
Buatkan komponen Navbar.tsx untuk website cyberpunk portfolio dengan:
- Font monospace, tema gelap (#000000 background)
- Logo teks "> AKATSUKI_" dengan animasi cursor berkedip warna kuning (#fcee0a)
- Link navigasi: HOME, TEAM, PROJECTS, ABOUT, CONTACT
- Efek glassmorphism (bg-black/80 backdrop-blur) saat scroll
- Hamburger menu [=] / [X] untuk mobile
- Warna aksen: cyan (#00f0ff), merah (#ff003c), kuning (#fcee0a)
- Gunakan Framer Motion untuk animasi masuk
```

---

### 👥 Komponen Team

```
Buatkan komponen Team.tsx cyberpunk dengan:
- 3 anggota tim dalam grid 3 kolom (responsive)
- Setiap kartu punya: foto, nama, role, bio, social links (GitHub, Instagram, TikTok)
- Efek hover: kartu naik (y: -10), border glow cyan
- Foto dengan filter contrast-125 brightness-75, menjadi terang saat hover
- Scan line overlay di atas foto
- Gradient teks beranimasi untuk judul "TIM KREATIF"
- Background grid pattern cyberpunk
- Gunakan Framer Motion whileInView untuk animasi masuk
- Warna per anggota berbeda (cyan, merah, hijau)
```

---

### 💼 Komponen Projects

```
Buatkan komponen Projects.tsx dengan:
- Grid 2 kolom untuk menampilkan 4 project
- Setiap kartu punya: judul, deskripsi, tahun, warna aksen unik
- Neon line di bagian atas kartu dengan gradient sesuai warna aksen
- Efek hover: kartu naik sedikit
- Animasi masuk staggered (delay berbeda tiap kartu) dengan Framer Motion
- Tema dark cyberpunk, font monospace untuk judul
```

---

### 📬 Komponen Contact

```
Buatkan komponen Contact.tsx dengan:
- Form dengan field: nama, email, pesan
- Styling input cyberpunk: transparent background, border abu-abu, 
  border cyan saat focus
- Label dengan font monospace uppercase dan letter-spacing lebar
- Tombol submit kuning (#fcee0a) dengan teks "KIRIM SINYAL"
- Feedback visual "✓ SINYAL TERKIRIM" selama 3 detik setelah submit
- Info kontak di sebelah kiri: email, lokasi, status freelance
- Gunakan useState untuk handle form state
```

---

### 🐛 Debugging & Fix

```
Website Next.js saya di-deploy ke GitHub Pages dengan basePath 
"/cyberpunk-portfolio" tapi gambar tidak muncul. Path gambar saya 
saat ini: "/images/team/pandu.jpeg". Bagaimana cara memperbaikinya?
```

```
GitHub Actions saya gagal dengan error "exit code 128" saat step deploy. 
Berikut workflow saya: [paste workflow]. Bagaimana cara memperbaikinya?
```

---

### 💡 Tips Prompting yang Efektif

1. **Sebutkan tech stack secara spesifik** — "Next.js 16 dengan TypeScript dan Tailwind CSS v4" lebih baik dari sekadar "Next.js"
2. **Sebutkan warna hex** — "#00f0ff" lebih jelas dari "warna cyan"
3. **Sebutkan library yang ingin dipakai** — "gunakan Framer Motion untuk animasi"
4. **Berikan konteks tema** — "tema cyberpunk dark, font monospace"
5. **Minta fitur spesifik** — "efek hover: kartu naik y:-10 dengan border glow"
6. **Sertakan error message lengkap** saat debugging agar AI bisa langsung analisis

---

## 📚 Referensi

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

*Dibuat oleh Tim Akatsuki — SMK RAJASA Surabaya, 2026*
