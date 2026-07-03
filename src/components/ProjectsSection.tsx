import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Github, ExternalLink, Activity, CheckCircle2, Shield, ArrowUpRight, Code, Terminal, Image as ImageIcon, ChevronLeft, ChevronRight, Eye, Maximize2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';

export const ProjectsSection: React.FC = () => {

  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [activeProjectModal, setActiveProjectModal] = useState<PortfolioProject | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [isFullImageModalOpen, setIsFullImageModalOpen] = useState<boolean>(false);

  const tags = ['ALL', 'Featured', 'Observability', 'Microservice', 'Full Stack'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (selectedTag === 'ALL') return true;
    if (selectedTag === 'Featured') return proj.featured;
    if (selectedTag === 'Observability') return proj.logObservabilityUsed.length > 0;
    if (selectedTag === 'Microservice') {
      return proj.techStack.some(t => t.toLowerCase().includes('microservice') || t.toLowerCase().includes('nest') || t.toLowerCase().includes('spring') || t.toLowerCase().includes('express'));
    }
    if (selectedTag === 'Full Stack') {
      return proj.techStack.some(t => t.toLowerCase().includes('full stack') || t.toLowerCase().includes('react')) || proj.role.includes('풀스택');
    }
    return proj.techStack.some(t => t.toLowerCase().includes(selectedTag.toLowerCase()));
  });

  const openProjectModal = (project: PortfolioProject, startImageIdx = 0) => {
    setActiveProjectModal(project);
    setActiveImageIdx(startImageIdx);
    setIsFullImageModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-[#0B192C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-mono text-[#00D4FF] tracking-widest uppercase px-3 py-1 rounded-full bg-[#102A43] border border-[#00D4FF]/30 mb-3 inline-block">
            Production Grade Architectures
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            핵심 대표 프로젝트 &amp; 시스템
          </h2>
          <p className="text-base text-[#829AB1]">
            분산 트레이싱, 오염 방지 가드, 그리고 고가용성 백엔드 시스템을 직접 아키텍팅하고 구축한 프로젝트입니다.
          </p>
        </motion.div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-[#00D4FF] text-[#0B192C] shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                  : 'bg-[#102A43] text-[#829AB1] hover:text-white border border-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-[#102A43]/80 border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 p-6 shadow-xl glass-card-hover flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header Tag & Period */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#00D4FF] bg-[#0B192C] px-2.5 py-0.5 rounded-full border border-[#00D4FF]/30">
                    {project.role}
                  </span>
                  <span className="text-xs font-mono text-[#627D98]">{project.period}</span>
                </div>

                {/* Project Title */}
                <h3 
                  onClick={() => openProjectModal(project)}
                  className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors leading-snug cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-xs text-[#829AB1] leading-relaxed mb-4">
                  {project.subtitle}
                </p>

                {/* Optional Screenshot Preview Card for projects with screenshots (e.g. MES) */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div 
                    onClick={() => openProjectModal(project)}
                    className="mb-4 relative rounded-xl overflow-hidden border border-[#00D4FF]/30 group/img cursor-pointer bg-[#0B192C]"
                  >
                    <img 
                      src={project.screenshots[0].url} 
                      alt={project.screenshots[0].title} 
                      className="w-full h-36 object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-black/30 to-transparent flex items-end justify-between p-3">
                      <span className="text-[10px] font-mono font-bold text-[#00D4FF] bg-[#0B192C]/90 px-2 py-0.5 rounded border border-[#00D4FF]/30 backdrop-blur-sm">
                        {project.screenshots[0].tag}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-white bg-[#00D4FF]/80 text-[#0B192C] px-2.5 py-1 rounded-lg font-bold shadow-lg">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>화면 갤러리 ({project.screenshots.length}장)</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6 bg-[#0B192C]/60 p-3.5 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono text-[#829AB1] uppercase block mb-1">핵심 아키텍처</span>
                  {project.architectureHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F0F4F8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-1.5 shrink-0" />
                      <span className="leading-relaxed text-[11px]">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Observability Tools */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono text-[#829AB1] uppercase block mb-1.5">활용 관찰도구 (Observability)</span>
                  <div className="flex flex-wrap gap-1">
                    {project.logObservabilityUsed.map((tool, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Outcome & Action */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="text-xs font-mono font-bold text-[#00D4FF] mb-3 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{project.keyOutcome}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-wrap gap-1 max-w-[65%]">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-[#627D98]">
                        #{tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-[#00D4FF] bg-[#00D4FF]/10 hover:bg-[#00D4FF] hover:text-[#0B192C] px-2.5 py-1.5 rounded-lg border border-[#00D4FF]/40 transition-all"
                        title="라이브 서비스로 바로 이동"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>라이브</span>
                      </a>
                    )}
                    <button
                      onClick={() => openProjectModal(project)}
                      className="flex items-center gap-1 text-xs font-semibold text-[#00D4FF] bg-[#0B192C] px-3 py-1.5 rounded-lg border border-[#00D4FF]/30 hover:bg-[#00D4FF] hover:text-[#0B192C] transition-all"
                    >
                      <span>{project.screenshots ? '사진 & 상세보기' : '상세보기'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Project Detail & Screenshot Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="bg-[#102A43] border border-[#00D4FF]/40 rounded-2xl max-w-4xl w-full p-5 sm:p-8 max-h-[92vh] overflow-y-auto relative shadow-2xl glass-card text-white">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 text-[#829AB1] hover:text-white text-xs font-mono bg-[#0B192C] px-3 py-1.5 rounded-lg border border-white/10 z-10 hover:border-[#00D4FF] transition-all"
              >
                ✕ ESC (닫기)
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#00D4FF] bg-[#0B192C] px-2.5 py-0.5 rounded border border-[#00D4FF]/30">
                  {activeProjectModal.role}
                </span>
                <span className="text-xs font-mono text-[#627D98]">{activeProjectModal.period}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 pr-12">
                {activeProjectModal.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#829AB1] mb-6 leading-relaxed">
                {activeProjectModal.subtitle}
              </p>

              {/* Screenshot Gallery Box if available */}
              {activeProjectModal.screenshots && activeProjectModal.screenshots.length > 0 && (
                <div className="mb-8 bg-[#0B192C] p-4 rounded-2xl border border-[#00D4FF]/30">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-[#00D4FF]" />
                      <h4 className="text-sm font-heading font-bold text-white">
                        실제 시스템 모듈 화면 스크린샷 ({activeProjectModal.screenshots.length}장)
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-[#00D4FF] bg-[#102A43] px-2.5 py-1 rounded-md border border-[#00D4FF]/20">
                      {activeImageIdx + 1} / {activeProjectModal.screenshots.length}
                    </span>
                  </div>

                  {/* Main Selected Image Viewer */}
                  <div className="relative rounded-xl overflow-hidden bg-black border border-white/10 group mb-4">
                    <img
                      src={activeProjectModal.screenshots[activeImageIdx].url}
                      alt={activeProjectModal.screenshots[activeImageIdx].title}
                      className="w-full h-[260px] sm:h-[380px] object-contain bg-black/60 mx-auto transition-all"
                    />

                    {/* Navigation Buttons */}
                    <button
                      onClick={() => setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : activeProjectModal.screenshots!.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#00D4FF] hover:text-[#0B192C] text-white p-2 rounded-full border border-white/20 transition-all"
                      title="이전 사진"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveImageIdx((prev) => (prev < activeProjectModal.screenshots!.length - 1 ? prev + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#00D4FF] hover:text-[#0B192C] text-white p-2 rounded-full border border-white/20 transition-all"
                      title="다음 사진"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image Info Overlay Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-mono font-bold text-[#00D4FF] bg-[#0B192C]/90 px-3 py-1 rounded-lg border border-[#00D4FF]/40 backdrop-blur-md">
                        {activeProjectModal.screenshots[activeImageIdx].tag}
                      </span>
                    </div>

                    <button
                      onClick={() => setIsFullImageModalOpen(true)}
                      className="absolute bottom-3 right-3 bg-[#0B192C]/90 hover:bg-[#00D4FF] hover:text-[#0B192C] text-white text-xs font-mono px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 backdrop-blur-md transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>원본 확대 보기</span>
                    </button>
                  </div>

                  {/* Image Caption & Detailed Spec */}
                  <div className="bg-[#102A43] p-3.5 rounded-xl border border-white/5 mb-4">
                    <h5 className="text-sm font-bold text-[#00D4FF] mb-1">
                      {activeProjectModal.screenshots[activeImageIdx].title}
                    </h5>
                    <p className="text-xs text-[#829AB1] leading-relaxed">
                      {activeProjectModal.screenshots[activeImageIdx].description}
                    </p>
                  </div>

                  {/* Thumbnails Row */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {activeProjectModal.screenshots.map((screen, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`relative rounded-lg overflow-hidden border transition-all h-16 sm:h-20 ${
                          activeImageIdx === idx
                            ? 'border-[#00D4FF] ring-2 ring-[#00D4FF]/40 scale-[1.02]'
                            : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                        }`}
                      >
                        <img src={screen.url} alt={screen.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-end p-1">
                          <span className="text-[9px] font-mono text-white bg-black/70 px-1 py-0.5 rounded truncate w-full text-center">
                            {screen.tag}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary & System Architecture Highlights */}
              <div className="space-y-4 mb-6">
                <div className="bg-[#0B192C] p-4 sm:p-5 rounded-xl border border-white/10">
                  <h4 className="text-xs font-mono text-[#00D4FF] uppercase font-bold mb-2">개요 및 수행 내용</h4>
                  <p className="text-xs sm:text-sm text-[#F0F4F8] leading-relaxed mb-4">
                    {activeProjectModal.summary}
                  </p>

                  <h4 className="text-xs font-mono text-[#00D4FF] uppercase font-bold mb-2">구축 아키텍처 상세</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#F0F4F8]">
                    {activeProjectModal.architectureHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 shrink-0" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0B192C] p-4 rounded-xl border border-emerald-500/30">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase font-bold mb-1">최종 성과</h4>
                  <p className="text-xs sm:text-sm font-bold text-white font-mono">{activeProjectModal.keyOutcome}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono text-[#829AB1] uppercase mb-2">사용된 전체 기술 스택</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono text-[#00D4FF] bg-[#0B192C] px-2.5 py-1 rounded-lg border border-[#00D4FF]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                {activeProjectModal.demoUrl && (
                  <a
                    href={activeProjectModal.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#00D4FF] text-[#0B192C] font-bold hover:bg-[#00D4FF]/90 transition-all shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>라이브 서비스 바로가기</span>
                  </a>
                )}
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0B192C] text-white border border-white/20 hover:border-[#00D4FF]"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub 저장소</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#102A43] text-white border border-white/20 hover:border-white/50 transition-all"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Full Image Zoom Modal */}
        {isFullImageModalOpen && activeProjectModal && activeProjectModal.screenshots && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
            <div className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center">
              <button
                onClick={() => setIsFullImageModalOpen(false)}
                className="absolute top-2 right-2 text-white bg-[#102A43] hover:bg-rose-600 px-3 py-1.5 rounded-lg border border-white/20 text-xs font-mono z-20"
              >
                ✕ 닫기
              </button>

              <img
                src={activeProjectModal.screenshots[activeImageIdx].url}
                alt={activeProjectModal.screenshots[activeImageIdx].title}
                className="max-h-[80vh] w-auto object-contain rounded-xl border border-[#00D4FF]/30 shadow-2xl mb-3"
              />

              <div className="text-center bg-[#102A43] p-3 rounded-xl border border-white/10 max-w-xl w-full">
                <h4 className="text-sm font-bold text-[#00D4FF]">
                  {activeProjectModal.screenshots[activeImageIdx].title}
                </h4>
                <p className="text-xs text-[#829AB1] mt-1">
                  {activeProjectModal.screenshots[activeImageIdx].description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
