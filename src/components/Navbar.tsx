import React, { useState, useEffect } from 'react';
import { ShieldCheck, Terminal, Rocket, Github, Mail, Menu, X, Code, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenVercelModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVercelModal, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "핵심 키워드", href: "#keywords" },
    { name: "AI 로그 분석기", href: "#ai-analyzer" },
    { name: "근본 해결 사례", href: "#root-cause" },
    { name: "프로젝트", href: "#projects" },
    { name: "기술 스택", href: "#skills" },
    { name: "소개", href: "#about" },
    { name: "문의", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B192C]/90 backdrop-blur-md border-b border-[#00D4FF]/20 py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#102A43] border border-[#00D4FF]/40 group-hover:border-[#00D4FF] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]">
            <Terminal className="w-5 h-5 text-[#00D4FF] group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00D4FF] rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00D4FF] rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-white group-hover:text-[#00D4FF] transition-colors flex items-center gap-1.5">
              HongMinHa
            </span>
            <span className="text-[10px] font-mono text-[#829AB1] tracking-wider uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Digital Sentinel
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#102A43]/50 p-1.5 rounded-full border border-[#00D4FF]/10 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00D4FF] text-[#0B192C] font-semibold shadow-[0_0_12px_rgba(0,212,255,0.5)]'
                    : 'text-[#829AB1] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenVercelModal}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#102A43] hover:bg-[#1E3A8A] text-[#00D4FF] border border-[#00D4FF]/30 hover:border-[#00D4FF] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,212,255,0.25)]"
            title="Next.js Vercel 배포 가이드"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Vercel 배포 가이드</span>
          </button>
          
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#00D4FF] to-[#38BDF8] text-[#0B192C] hover:opacity-95 transition-all duration-200 shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>연락하기</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#102A43] text-[#00D4FF] border border-[#00D4FF]/30"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B192C] border-b border-[#00D4FF]/20 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm text-[#829AB1] hover:text-[#00D4FF] hover:bg-[#102A43] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVercelModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#102A43] text-[#00D4FF] border border-[#00D4FF]/30"
            >
              <Rocket className="w-4 h-4" />
              <span>Next.js Vercel 배포 가이드</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#00D4FF] text-[#0B192C]"
            >
              <Mail className="w-4 h-4" />
              <span>연락하기</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
