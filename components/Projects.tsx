"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const projects = [
  {
    title: "KONFIGURASI JARINGAN MIKROTIK",
    desc: "Konfigurasi dan manajemen jaringan menggunakan MikroTik RouterOS meliputi DHCP Server, Firewall, Bandwidth Management, dan Hotspot System untuk jaringan sekolah.",
    color: "#00f0ff",
    year: "2025",
  },
  {
    title: "WEB SERVER LINUX UBUNTU",
    desc: "Instalasi dan konfigurasi Web Server menggunakan Linux Ubuntu dengan Apache2, PHP, MySQL, dan phpMyAdmin sebagai praktik administrasi server jaringan.",
    color: "#ff003c",
    year: "2024",
  },
  {
    title: "SIMULASI CISCO PACKET TRACER",
    desc: "Simulasi jaringan komputer menggunakan Cisco Packet Tracer untuk memahami konsep jaringan dan protokol komunikasi.",
    color: "#fcee0a",
    year: "2024",
  },
  {
    title: "WEBSITE SEKOLAH DINAMIS",
    desc: "Pengembangan website profil sekolah menggunakan PHP dan MySQL dengan fitur manajemen konten, galeri foto, berita, dan halaman profil guru & siswa.",
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
          {/* Header */}
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white border-b border-gray-800 pb-4">
            <Terminal className="text-[#fcee0a]" />
            PROJECT DATABASE
          </h2>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="magic-neon-card p-6 rounded-xl group relative overflow-hidden"
              >
                {/* Neon Top Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  }}
                />

                {/* Title & Year */}
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

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}