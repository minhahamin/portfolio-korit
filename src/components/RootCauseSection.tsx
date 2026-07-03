import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Search, CheckCircle, ArrowRight, Code2, AlertTriangle, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import { INCIDENT_POST_MORTEMS } from '../data/portfolioData';
import { IncidentPostMortem } from '../types';

export const RootCauseSection: React.FC = () => {

  const [selectedPostMortem, setSelectedPostMortem] = useState<IncidentPostMortem>(INCIDENT_POST_MORTEMS[0]);
  const [activeCodeTab, setActiveCodeTab] = useState<'after' | 'before'>('after');
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Distributed System', 'Memory & Performance', 'Database Optimization'];

  const filteredIncidents = filterCategory === 'ALL' 
    ? INCIDENT_POST_MORTEMS 
    : INCIDENT_POST_MORTEMS.filter(item => item.category === filterCategory);

  return (
    <section id="root-cause" className="py-20 bg-[#0B192C] relative border-t border-b border-[#00D4FF]/10 overflow-hidden">
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
            Root Cause Elimination Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            근본 해결 (Root-Cause) 포스트모템 사례
          </h2>
          <p className="text-base text-[#829AB1]">
            임시 조치나 재시작에 의존하지 않고, 장애의 뿌리를 잘라내어 동일한 인시던트가 두 번 다시 발생하지 않도록 조치한 아키텍처 개선 기록입니다.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                filterCategory === cat
                  ? 'bg-[#00D4FF] text-[#0B192C] shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                  : 'bg-[#102A43] text-[#829AB1] hover:text-white border border-white/10'
              }`}
            >
              {cat === 'ALL' ? '전체 보기' : cat}
            </button>
          ))}
        </div>

        {/* Incidents Selection Grid & Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Incident List */}
          <div className="lg:col-span-5 space-y-4">
            {filteredIncidents.map((incident) => {
              const isSelected = selectedPostMortem.id === incident.id;
              return (
                <div
                  key={incident.id}
                  onClick={() => {
                    setSelectedPostMortem(incident);
                    setActiveCodeTab('after');
                  }}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#102A43] border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.25)]'
                      : 'bg-[#102A43]/50 border-white/10 hover:border-[#00D4FF]/30 hover:bg-[#102A43]/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#00D4FF] font-semibold bg-[#0B192C] px-2 py-0.5 rounded border border-[#00D4FF]/20">
                      {incident.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">
                      {incident.metricsAfter}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {incident.title}
                  </h3>

                  <p className="text-xs text-[#829AB1] line-clamp-2 leading-relaxed mb-3">
                    {incident.symptom}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {incident.techStack.map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-[#627D98] bg-[#0B192C] px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Post-Mortem Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#102A43] border border-[#00D4FF]/30 p-6 sm:p-8 shadow-2xl glass-card relative">
              
              {/* Incident Title & Category */}
              <div className="flex items-start justify-between gap-4 pb-4 mb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider block mb-1">
                    INCIDENT CASE STUDY #{selectedPostMortem.id.replace('post-mortem-', '')}
                  </span>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-snug">
                    {selectedPostMortem.title}
                  </h3>
                </div>

                <div className="shrink-0 text-right">
                  <div className="text-[10px] font-mono text-[#829AB1] uppercase">개선 성과</div>
                  <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-lg">
                    {selectedPostMortem.metricsAfter}
                  </div>
                </div>
              </div>

              {/* Symptom -> Log Clue -> Root Cause Chain */}
              <div className="space-y-4 mb-6">
                
                {/* Symptom */}
                <div className="p-3.5 rounded-xl bg-[#0B192C]/80 border border-amber-500/30">
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> 현상 (Symptom)
                  </span>
                  <p className="text-xs text-[#F0F4F8] leading-relaxed">
                    {selectedPostMortem.symptom}
                  </p>
                </div>

                {/* Log Clue */}
                <div className="p-3.5 rounded-xl bg-[#0B192C] border border-[#00D4FF]/30">
                  <span className="text-[10px] font-mono text-[#00D4FF] uppercase font-bold flex items-center gap-1 mb-1">
                    <Search className="w-3.5 h-3.5" /> 포착한 로그 단서 (Log Clue)
                  </span>
                  <p className="text-xs font-mono text-[#00D4FF] leading-relaxed">
                    {selectedPostMortem.logClue}
                  </p>
                </div>

                {/* Root Cause */}
                <div className="p-3.5 rounded-xl bg-[#0B192C] border border-purple-500/30">
                  <span className="text-[10px] font-mono text-purple-400 uppercase font-bold flex items-center gap-1 mb-1">
                    <Target className="w-3.5 h-3.5" /> 근본 원인 (Root Cause)
                  </span>
                  <p className="text-xs text-[#F0F4F8] leading-relaxed">
                    {selectedPostMortem.rootCause}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-3.5 rounded-xl bg-[#0B192C] border border-emerald-500/30">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 근본 해결책 (Architectural Solution)
                  </span>
                  <p className="text-xs text-[#F0F4F8] leading-relaxed">
                    {selectedPostMortem.solution}
                  </p>
                </div>

              </div>

              {/* Code Snippet Before / After Comparison */}
              {selectedPostMortem.codeSnippet && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#00D4FF] font-semibold flex items-center gap-1.5">
                      <Code2 className="w-4 h-4" />
                      {selectedPostMortem.codeSnippet.filename}
                    </span>

                    <div className="flex items-center gap-1 bg-[#0B192C] p-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => setActiveCodeTab('after')}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                          activeCodeTab === 'after'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'text-[#829AB1] hover:text-white'
                        }`}
                      >
                        [AFTER] 근본 해결 코드
                      </button>
                      <button
                        onClick={() => setActiveCodeTab('before')}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                          activeCodeTab === 'before'
                            ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                            : 'text-[#829AB1] hover:text-white'
                        }`}
                      >
                        [BEFORE] 원인 코드
                      </button>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#0B192C] border border-white/10 p-4 font-mono text-xs overflow-x-auto leading-relaxed max-h-[220px]">
                    {activeCodeTab === 'after' ? (
                      <pre className="text-emerald-300">
                        <code>{selectedPostMortem.codeSnippet.after}</code>
                      </pre>
                    ) : (
                      <pre className="text-red-300">
                        <code>{selectedPostMortem.codeSnippet.before}</code>
                      </pre>
                    )}
                  </div>
                </div>
              )}

              {/* Impact Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  최종 사용자 UX 임팩트: {selectedPostMortem.impact}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
