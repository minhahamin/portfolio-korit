import React from 'react';
import { Terminal, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B192C] border-t border-[#00D4FF]/20 py-12 relative text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#102A43] border border-[#00D4FF]/40 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-[#00D4FF]" />
            </div>
            <span className="font-heading font-bold text-white text-sm">
              Log-Tracker Portfolio
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
              SYSTEM ONLINE
            </span>
          </div>

          <p className="text-[#627D98] text-center md:text-left max-w-md">
            &quot;로그 속의 보이지 않는 단서를 추적하여, 사용자의 눈에 보이는 일상을 빈틈없이 수호합니다.&quot;
          </p>
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-[#829AB1]">
          <span className="font-mono text-[11px]">
            &copy; {new Date().getFullYear()} Hong Minha. All Rights Reserved.
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#102A43] hover:bg-[#1E3A8A] text-[#00D4FF] border border-[#00D4FF]/30 transition-all text-xs font-mono"
            title="맨 위로 이동"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
