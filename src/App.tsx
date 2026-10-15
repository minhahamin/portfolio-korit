import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeywordsSection } from './components/KeywordsSection';
import { AiLogAnalyzer } from './components/AiLogAnalyzer';
import { RootCauseSection } from './components/RootCauseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('keywords');
  const [showTopBtn, setShowTopBtn] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);

      const sections = ['keywords', 'ai-analyzer', 'root-cause', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAiAnalyzer = () => {
    const el = document.getElementById('ai-analyzer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#111113] text-[#f4f4f5] font-sans selection:bg-[#f472b6]/30 selection:text-[#f472b6]">
      
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f472b6] via-[#f472b6] to-[#fbcfe8] origin-left z-[100] shadow-[0_0_12px_rgba(244,114,182,0.8)]"
      />

      {/* Fixed Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <HeroSection onOpenAiAnalyzer={handleOpenAiAnalyzer} />

      {/* 5 Core Keywords Section */}
      <KeywordsSection />

      {/* Gemini AI Live Log Analyzer */}
      <AiLogAnalyzer />

      {/* Incident Post-Mortems / Root Cause Cases */}
      <RootCauseSection />

      {/* Portfolio Projects */}
      <ProjectsSection />

      {/* Technical Arsenal / Skills Matrix */}
      <SkillsSection />

      {/* Developer Philosophy & Bio */}
      <AboutSection />

      {/* Contact & Recruitment */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#1c1c21]/90 hover:bg-[#f472b6] text-[#f472b6] hover:text-[#111113] border border-[#f472b6]/40 shadow-[0_0_20px_rgba(244,114,182,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-110 group"
          title="페이지 맨 위로 이동"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}

    </div>
  );
}

