"use client";

import { motion } from "framer-motion";
import { ExternalLink, User, Code2, Terminal } from "lucide-react";

const team = [
  {
    name: "PANDU RIDHO WICAKSONO",
    role: "LEAD_DEVELOPER",
    id: "01",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Spesialis Arsitektur Cloud dan sistem terdistribusi.",
    color: "from-[#00f0ff] to-[#0066ff]",
    borderColor: "border-[#00f0ff]/50",
    shadowColor: "shadow-[#00f0ff]/20",
  },
  {
    name: "MUHAMMAD HIDAYAH MAULANA",
    role: "UI/UX_DESIGNER",
    id: "02",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Menciptakan pengalaman digital yang intuitif dan estetik.",
    color: "from-[#ff003c] to-[#ff00ff]",
    borderColor: "border-[#ff003c]/50",
    shadowColor: "shadow-[#ff003c]/20",
  },
  {
    name: "RAKA GALUH DINATA",
    role: "BACKEND_ENGINEER",
    id: "03",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Fokus pada optimasi database dan keamanan API.",
    color: "from-[#00ff41] to-[#008f11]",
    borderColor: "border-[#00ff41]/50",
    shadowColor: "shadow-[#00ff41]/20",
  },
];

export default function CyberTeam() {
  return (
    <section id="team" className="py-32 px-6 bg-[#050505] relative overflow-hidden font-mono">
      {/* Background Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Cyberpunk Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ff003c]/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-[#00f0ff]/10 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-[#ff003c]"
          >
            <Terminal size={20} />
            <span className="tracking-[0.5em] text-xs font-bold uppercase underline decoration-2 underline-offset-8">
              System_Authorized
            </span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white italic tracking-tighter"
          >
            TIM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#ff003c] to-[#00f0ff] bg-[length:200%_auto] animate-gradient">KREATIF</span>
          </motion.h3>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* ID Number Overlay */}
              <span className="absolute -top-8 -left-2 text-6xl font-black text-white/5 italic group-hover:text-[#00f0ff]/10 transition-colors">
                {member.id}
              </span>

              {/* The Cyber Card */}
              <div className={`relative p-[1px] bg-gradient-to-br ${member.borderColor} transition-all duration-500 overflow-hidden shadow-2xl ${member.shadowColor}`}>
                {/* Clipped Corner SVG Masking (CSS approach) */}
                <div className="bg-[#0a0a0a] p-6 relative" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>
                  
                  {/* Hexagon-like Image Frame */}
                  <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden border border-white/10 group-hover:border-[#00f0ff]/50 transition-colors">
                    <motion.img 
                      src={member.image} 
                      className="w-full h-full object-cover filter contrast-125 brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    
                    {/* Scanning Line Animation */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,240,255,0.1)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
                  </div>

                  {/* Info */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-black text-white tracking-wide group-hover:text-[#00f0ff] transition-colors italic">
                        {member.name}
                      </h4>
                      <p className={`text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r ${member.color}`}>
                        // {member.role}
                      </p>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-[#ff003c] pl-4">
                      {member.bio}
                    </p>

                    {/* Interactive Buttons */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex gap-4">
                        <Code2 className="text-gray-600 hover:text-[#00f0ff] transition-colors cursor-pointer" size={20} />
                        <User className="text-gray-600 hover:text-[#ff003c] transition-colors cursor-pointer" size={20} />
                      </div>
                      
                      <motion.div 
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/5 p-2 border border-white/10 group-hover:bg-[#00f0ff] group-hover:text-black transition-all cursor-pointer"
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative Cyber Elements */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff003c] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-[#00f0ff] animate-pulse rounded-full blur-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
}