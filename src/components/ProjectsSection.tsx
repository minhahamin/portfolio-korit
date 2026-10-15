import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Briefcase, Github, ExternalLink, Activity, CheckCircle2, Shield, ArrowUpRight, Code, Terminal, Image as ImageIcon, ChevronLeft, ChevronRight, Eye, Maximize2, LayoutGrid, Star, Radar, Boxes, Layers3 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';

export const ProjectsSection: React.FC = () => {

  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [activeProjectModal, setActiveProjectModal] = useState<PortfolioProject | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [isFullImageModalOpen, setIsFullImageModalOpen] = useState<boolean>(false);


  const matchTag = (proj: PortfolioProject, selectedTag: string) => {
    if (selectedTag === 'ALL') return true;
    if (selectedTag === '실무 경험') return !!proj.experience;
    if (selectedTag === 'Featured') return proj.featured;
    if (selectedTag === 'Observability') return proj.logObservabilityUsed.length > 0;
    if (selectedTag === 'Microservice') {
      return proj.techStack.some(t => t.toLowerCase().includes('microservice') || t.toLowerCase().includes('nest') || t.toLowerCase().includes('spring') || t.toLowerCase().includes('express'));
    }
    if (selectedTag === 'Full Stack') {
      return proj.techStack.some(t => t.toLowerCase().includes('full stack') || t.toLowerCase().includes('react')) || proj.role.includes('풀스택');
    }
    return proj.techStack.some(t => t.toLowerCase().includes(selectedTag.toLowerCase()));
  };

  const tags = [
    { key: 'ALL', label: '전체', Icon: LayoutGrid },
    { key: '실무 경험', label: '실무 경험', Icon: Briefcase },
    { key: 'Featured', label: '대표작', Icon: Star },
    { key: 'Observability', label: '모니터링', Icon: Radar },
    { key: 'Microservice', label: '마이크로서비스', Icon: Boxes },
    { key: 'Full Stack', label: '풀스택', Icon: Layers3 },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => matchTag(proj, selectedTag));

  const openProjectModal = (project: PortfolioProject, startImageIdx = 0) => {
    setActiveProjectModal(project);
    setActiveImageIdx(startImageIdx);
    setIsFullImageModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-[#111113] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-mono text-[#f472b6] tracking-widest uppercase px-3 py-1 rounded-full bg-[#1c1c21] border border-[#f472b6]/30 mb-3 inline-block">
            Production Grade Architectures
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            핵심 대표 프로젝트 &amp; 시스템
          </h2>
          <p className="text-base text-[#a8a8b3]">
            분산 트레이싱, 오염 방지 가드, 그리고 고가용성 백엔드 시스템을 직접 아키텍팅하고 구축한 프로젝트입니다.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div role="tablist" className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-[#1c1c21] border border-white/10">
            {tags.map(({ key, label, Icon }) => {
              const active = selectedTag === key;
              const count = PORTFOLIO_PROJECTS.filter((p) => matchTag(p, key)).length;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedTag(key)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                    active ? 'text-[#111113]' : 'text-[#a8a8b3] hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-tab-pill"
                      className="absolute inset-0 rounded-xl bg-[#f472b6]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{label}</span>
                  <span className={`relative z-10 text-[11px] font-mono px-1.5 py-0.5 rounded-md ${
                    active ? 'bg-black/15' : 'bg-white/5 text-[#8c8c97]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
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
              className="rounded-2xl bg-[#1c1c21]/80 border border-white/10 hover:border-[#f472b6]/50 p-6 glass-card-hover flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header Tag & Period */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#f472b6] bg-[#111113] px-2.5 py-0.5 rounded-full border border-[#f472b6]/30 truncate max-w-[60%]">
                    {project.role}
                  </span>
                  <span className="text-xs font-mono text-[#8c8c97] shrink-0">{project.period}</span>
                </div>

                {project.experience && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-300 bg-amber-950/50 border border-amber-400/40 px-2.5 py-0.5 rounded-full mb-2">
                    <Briefcase className="w-3 h-3" />
                    {project.experience}
                  </span>
                )}

                {/* Project Title */}
                <h3 
                  onClick={() => openProjectModal(project)}
                  className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#f472b6] transition-colors leading-snug cursor-pointer line-clamp-2"
                >
                  {project.title}
                </h3>

                <p className="text-xs text-[#a8a8b3] leading-relaxed mb-4 line-clamp-2">
                  {project.subtitle}
                </p>

                {/* Optional Screenshot Preview Card for projects with screenshots (e.g. MES) */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div 
                    onClick={() => openProjectModal(project)}
                    className="mb-4 relative rounded-xl overflow-hidden border border-[#f472b6]/30 group/img cursor-pointer bg-[#111113]"
                  >
                    <img 
                      src={project.screenshots[0].url} 
                      alt={project.screenshots[0].title} 
                      className="w-full h-36 object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-black/30 to-transparent flex items-end justify-between p-3">
                      <span className="text-[10px] font-mono font-bold text-[#f472b6] bg-[#111113]/90 px-2 py-0.5 rounded border border-[#f472b6]/30 backdrop-blur-sm">
                        {project.screenshots[0].tag}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-white bg-[#f472b6]/80 text-[#111113] px-2.5 py-1 rounded-lg font-bold shadow-lg">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>화면 갤러리 ({project.screenshots.length}장)</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Architecture Highlights (top 2 only; full list in modal) */}
                <ul className="space-y-2 mb-5">
                  {project.architectureHighlights.slice(0, 2).map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#f4f4f5]">
                      <span className="w-1 h-1 rounded-full bg-[#f472b6] mt-1.5 shrink-0" />
                      <span className="leading-relaxed line-clamp-2">{hl}</span>
                    </li>
                  ))}
                  {project.architectureHighlights.length > 2 && (
                    <li className="text-[11px] font-mono text-[#8c8c97] pl-3">
                      +{project.architectureHighlights.length - 2}개 더 보기
                    </li>
                  )}
                </ul>
              </div>

              {/* Card Footer: Outcome & Action */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <div className="text-xs font-semibold text-[#f472b6] mb-3 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span className="line-clamp-2 leading-relaxed">{project.keyOutcome}</span>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-[#8c8c97]">
                        #{tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-[#f472b6] bg-[#f472b6]/10 hover:bg-[#f472b6] hover:text-[#111113] px-2.5 py-1.5 rounded-lg border border-[#f472b6]/40 transition-all"
                        title="라이브 서비스로 바로 이동"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>라이브</span>
                      </a>
                    )}
                    <button
                      onClick={() => openProjectModal(project)}
                      className="flex items-center gap-1 text-xs font-semibold text-[#f472b6] bg-[#111113] px-3 py-1.5 rounded-lg border border-[#f472b6]/30 hover:bg-[#f472b6] hover:text-[#111113] transition-all"
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
            <div className="bg-[#1c1c21] border border-[#f472b6]/40 rounded-2xl max-w-4xl w-full p-5 sm:p-8 max-h-[92vh] overflow-y-auto relative shadow-2xl glass-card text-white">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 text-[#a8a8b3] hover:text-white text-xs font-mono bg-[#111113] px-3 py-1.5 rounded-lg border border-white/10 z-10 hover:border-[#f472b6] transition-all"
              >
                ✕ ESC (닫기)
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#f472b6] bg-[#111113] px-2.5 py-0.5 rounded border border-[#f472b6]/30">
                  {activeProjectModal.role}
                </span>
                <span className="text-xs font-mono text-[#8c8c97]">{activeProjectModal.period}</span>
              </div>

              {activeProjectModal.experience && (
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-300 bg-amber-950/50 border border-amber-400/40 px-2.5 py-0.5 rounded-full mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  {activeProjectModal.experience}
                </span>
              )}

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 pr-12">
                {activeProjectModal.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#a8a8b3] mb-6 leading-relaxed">
                {activeProjectModal.subtitle}
              </p>

              {/* Screenshot Gallery Box if available */}
              {activeProjectModal.screenshots && activeProjectModal.screenshots.length > 0 && (
                <div className="mb-8 bg-[#111113] p-4 rounded-2xl border border-[#f472b6]/30">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-[#f472b6]" />
                      <h4 className="text-sm font-heading font-bold text-white">
                        실제 시스템 모듈 화면 스크린샷 ({activeProjectModal.screenshots.length}장)
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-[#f472b6] bg-[#1c1c21] px-2.5 py-1 rounded-md border border-[#f472b6]/20">
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
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#f472b6] hover:text-[#111113] text-white p-2 rounded-full border border-white/20 transition-all"
                      title="이전 사진"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveImageIdx((prev) => (prev < activeProjectModal.screenshots!.length - 1 ? prev + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#f472b6] hover:text-[#111113] text-white p-2 rounded-full border border-white/20 transition-all"
                      title="다음 사진"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image Info Overlay Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-mono font-bold text-[#f472b6] bg-[#111113]/90 px-3 py-1 rounded-lg border border-[#f472b6]/40 backdrop-blur-md">
                        {activeProjectModal.screenshots[activeImageIdx].tag}
                      </span>
                    </div>

                    <button
                      onClick={() => setIsFullImageModalOpen(true)}
                      className="absolute bottom-3 right-3 bg-[#111113]/90 hover:bg-[#f472b6] hover:text-[#111113] text-white text-xs font-mono px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 backdrop-blur-md transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>원본 확대 보기</span>
                    </button>
                  </div>

                  {/* Image Caption & Detailed Spec */}
                  <div className="bg-[#1c1c21] p-3.5 rounded-xl border border-white/5 mb-4">
                    <h5 className="text-sm font-bold text-[#f472b6] mb-1">
                      {activeProjectModal.screenshots[activeImageIdx].title}
                    </h5>
                    <p className="text-xs text-[#a8a8b3] leading-relaxed">
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
                            ? 'border-[#f472b6] ring-2 ring-[#f472b6]/40 scale-[1.02]'
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
                <div className="bg-[#111113] p-4 sm:p-5 rounded-xl border border-white/10">
                  <h4 className="text-xs font-mono text-[#f472b6] uppercase font-bold mb-2">개요 및 수행 내용</h4>
                  <p className="text-xs sm:text-sm text-[#f4f4f5] leading-relaxed mb-4">
                    {activeProjectModal.summary}
                  </p>

                  <h4 className="text-xs font-mono text-[#f472b6] uppercase font-bold mb-2">구축 아키텍처 상세</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#f4f4f5]">
                    {activeProjectModal.architectureHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f472b6] mt-2 shrink-0" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#111113] p-4 rounded-xl border border-emerald-500/30">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase font-bold mb-1">최종 성과</h4>
                  <p className="text-xs sm:text-sm font-bold text-white font-mono">{activeProjectModal.keyOutcome}</p>
                </div>
              </div>

              {activeProjectModal.logObservabilityUsed.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono text-[#a8a8b3] uppercase mb-2">활용 관찰도구 (Observability)</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProjectModal.logObservabilityUsed.map((tool, idx) => (
                      <span key={idx} className="text-xs font-mono text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xs font-mono text-[#a8a8b3] uppercase mb-2">사용된 전체 기술 스택</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono text-[#f472b6] bg-[#111113] px-2.5 py-1 rounded-lg border border-[#f472b6]/20">
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
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#f472b6] text-[#111113] font-bold hover:bg-[#f472b6]/90 transition-all shadow-lg"
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
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#111113] text-white border border-white/20 hover:border-[#f472b6]"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub 저장소</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#1c1c21] text-white border border-white/20 hover:border-white/50 transition-all"
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
                className="absolute top-2 right-2 text-white bg-[#1c1c21] hover:bg-rose-600 px-3 py-1.5 rounded-lg border border-white/20 text-xs font-mono z-20"
              >
                ✕ 닫기
              </button>

              <img
                src={activeProjectModal.screenshots[activeImageIdx].url}
                alt={activeProjectModal.screenshots[activeImageIdx].title}
                className="max-h-[80vh] w-auto object-contain rounded-xl border border-[#f472b6]/30 shadow-2xl mb-3"
              />

              <div className="text-center bg-[#1c1c21] p-3 rounded-xl border border-white/10 max-w-xl w-full">
                <h4 className="text-sm font-bold text-[#f472b6]">
                  {activeProjectModal.screenshots[activeImageIdx].title}
                </h4>
                <p className="text-xs text-[#a8a8b3] mt-1">
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
