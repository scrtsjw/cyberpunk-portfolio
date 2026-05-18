"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white border-b border-gray-800 pb-4">
            <Mail className="text-[#00f0ff]" /> INISIALISASI KONTAK
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left info */}
            <div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Siap untuk berkolaborasi dalam proyek berikutnya? Kirim sinyal dan
                saya akan merespons dalam{" "}
                <span className="text-[#00f0ff] font-bold">24 jam</span>.
              </p>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="text-[#00f0ff]">&gt;</span>
                  <span>hello@netrunner.dev</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="text-[#ff003c]">&gt;</span>
                  <span>Surabaya, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="text-[#fcee0a]">&gt;</span>
                  <span>Available for freelance</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-gray-500 mb-2 tracking-widest">
                  NAMA_INPUT
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-[#00f0ff] transition-colors placeholder-gray-700"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-gray-500 mb-2 tracking-widest">
                  EMAIL_INPUT
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-[#00f0ff] transition-colors placeholder-gray-700"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-gray-500 mb-2 tracking-widest">
                  PESAN_INPUT
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Deskripsikan projekmu..."
                  className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-[#00f0ff] transition-colors placeholder-gray-700 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#fcee0a] text-black font-bold font-mono uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                {sent ? (
                  <span className="text-green-700">✓ SINYAL TERKIRIM</span>
                ) : (
                  <>
                    <Send size={16} /> KIRIM SINYAL
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}