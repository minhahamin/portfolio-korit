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
import { VercelDeployModal } from './components/VercelDeployModal';

export default function App() {
  const [isVercelModalOpen, setIsVercelModalOpen] = useState(false);
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
    <div className="min-h-screen bg-[#0B192C] text-[#F0F4F8] font-sans selection:bg-[#00D4FF]/30 selection:text-[#00D4FF]">
      
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#38BDF8] to-[#93C5FD] origin-left z-[100] shadow-[0_0_12px_rgba(0,212,255,0.8)]"
      />

      {/* Fixed Navigation Header */}
      <Navbar 
        onOpenVercelModal={() => setIsVercelModalOpen(true)} 
        activeSection={activeSection}
      />

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
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#102A43]/90 hover:bg-[#00D4FF] text-[#00D4FF] hover:text-[#0B192C] border border-[#00D4FF]/40 shadow-[0_0_20px_rgba(0,212,255,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-110 group"
          title="페이지 맨 위로 이동"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}

      {/* Vercel Next.js Deployment Guide Modal */}
      <VercelDeployModal 
        isOpen={isVercelModalOpen} 
        onClose={() => setIsVercelModalOpen(false)} 
      />

    </div>
  );
}

