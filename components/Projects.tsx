"use client";

import { motion } from "framer-motion";
import { Globe, Terminal } from "lucide-react";

const projects = [
  {
    title: "CYBER_DASHBOARD",
    desc: "Dashboard monitoring real-time dengan visualisasi data cyberpunk menggunakan Next.js dan Recharts.",
    tags: ["Next.js", "TypeScript", "Recharts"],
    color: "#00f0ff",
    year: "2025",
  },
  {
    title: "NEON_STORE",
    desc: "Platform e-commerce futuristik dengan animasi Framer Motion dan sistem pembayaran terintegrasi.",
    tags: ["React", "Tailwind", "Stripe"],
    color: "#ff003c",
    year: "2024",
  },
  {
    title: "GHOST_API",
    desc: "REST API backend dengan autentikasi JWT, rate limiting, dan dokumentasi Swagger otomatis.",
    tags: ["Node.js", "Express", "MongoDB"],
    color: "#fcee0a",
    year: "2024",
  },
  {
    title: "MATRIX_CHAT",
    desc: "Aplikasi chat real-time berbasis WebSocket dengan enkripsi end-to-end dan UI gelap.",
    tags: ["Socket.io", "React", "Node.js"],
    color: "#00f0ff",
    year: "2023",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white border-b border-gray-800 pb-4">
            <Terminal className="text-[#fcee0a]" /> PROJECT_DATABASE
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="magic-neon-card p-6 rounded-xl group cursor-pointer relative overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0,5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  }}
                />

                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="font-mono font-bold text-lg"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-gray-600">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono text-gray-400 border border-gray-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-1 text-xs font-mono text-gray-500 hover:text-[#00f0ff] transition-colors">
                    <Globe size={14} /> LIVE_DEMO
                  </button>
                  <button className="flex items-center gap-1 text-xs font-mono text-gray-500 hover:text-[#fcee0a] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    SOURCE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}