"use client";

import { Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 md:px-0 mt-8 pt-8 border-t border-gray-900 text-center text-gray-600 font-mono text-sm flex justify-between items-center">
      <p>© 2026 CYBERPUNK_PORTFOLIO.EXE</p>
      <div className="flex gap-4">
        <Globe
          className="hover:text-[#00f0ff] cursor-pointer transition-colors"
          size={20}
        />
        <a href="#contact">
          <Mail
            className="hover:text-[#ff003c] cursor-pointer transition-colors"
            size={20}
          />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
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
            className="hover:text-[#fcee0a] cursor-pointer transition-colors"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </div>
    </footer>
  );
}