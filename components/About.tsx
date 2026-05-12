"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Hacker",
    company: "CyberCorp Ltd.",
    period: "2024 - Present",
    desc: "Meretas dan merakit ulang arsitektur web modern menggunakan Next.js dan Framer Motion. Mengoptimalkan performa hingga 99% pada audit Lighthouse.",
    active: true,
  },
  {
    role: "UI/UX Replicator",
    company: "Neon Studio",
    period: "2022 - 2024",
    desc: "Mendesain antarmuka futuristik dan mengimplementasikan desain sistem berbasis Tailwind CSS.",
    active: false,
  },
  {
    role: "Junior Web Dev",
    company: "PixelForge",
    period: "2020 - 2022",
    desc: "Membangun landing page dan aplikasi web sederhana menggunakan React dan REST API.",
    active: false,
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white border-b border-gray-800 pb-4">
            <Terminal className="text-[#fcee0a]" /> LOG_PENGALAMAN
          </h2>

          {/* Bio */}
          <div className="mb-12 p-6 magic-neon-card rounded-xl">
            <p className="text-gray-400 leading-relaxed">
              Seorang{" "}
              <span className="text-[#00f0ff] font-bold">Frontend Developer</span>{" "}
              dengan passion membangun antarmuka yang tidak hanya indah secara
              visual, tapi juga performatif dan aksesibel. Terobsesi dengan detail
              animasi dan pengalaman pengguna yang{" "}
              <span className="text-[#ff003c] font-bold">imersif</span>.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 border-l-2 border-gray-800 pl-8 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-10.25 top-1 h-4 w-4 rounded-full transition-all ${
                    exp.active
                      ? "bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]"
                      : "bg-gray-800 border-2 border-gray-500"
                  }`}
                />

                <h3
                  className={`text-2xl font-bold ${
                    exp.active ? "text-white" : "text-gray-300"
                  }`}
                >
                  {exp.role}
                </h3>
                <p
                  className={`font-mono mt-1 text-sm ${
                    exp.active ? "text-[#00f0ff]" : "text-gray-500"
                  }`}
                >
                  {exp.company} // {exp.period}
                </p>
                <p className="text-gray-400 mt-3 leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}