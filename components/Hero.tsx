"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 px-6 md:px-24 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff003c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 mb-6 text-sm font-bold text-[#00f0ff] border border-[#00f0ff] rounded-full bg-[#00f0ff]/10 font-mono">
            SYSTEM.STATUS: ONLINE
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-white glitch-wrapper">
            <span className="glitch-text" data-text="NETRUNNER_DEV">
              NEVER GOON TEAM
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Kami Adalah Siswa kelas 11 di SMK RAJASA, di Sekolah ini kami mendalami tentang{" "}
            <span className="text-[#ff003c] font-bold">TKJ</span> agar kami bisa mendapatkan ilmu yang{" "}
            <span className="text-[#00f0ff] font-bold">Bermanfaat</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-[#fcee0a] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300 font-mono"
            >
              Inisialisasi Kontak
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#00f0ff] text-[#00f0ff] font-bold uppercase tracking-wider hover:bg-[#00f0ff]/20 transition-colors duration-300 flex items-center gap-2 font-mono"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-0 font-mono text-xs text-gray-600 flex items-center gap-2"
        >
          
        </motion.div>
      </div>
    </section>
  );
}