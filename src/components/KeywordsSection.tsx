import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Target, ShieldCheck, Flame, Users, Sparkles, CheckCircle, ArrowRight, Palette } from 'lucide-react';
import { KEYWORDS } from '../data/portfolioData';
import { KeywordItem } from '../types';

export const KeywordsSection: React.FC = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<KeywordItem | null>(KEYWORDS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6 text-[#f472b6]" />;
      case 'Target': return <Target className="w-6 h-6 text-[#f472b6]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#f472b6]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#f472b6]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#f472b6]" />;
      default: return <Sparkles className="w-6 h-6 text-[#f472b6]" />;
    }
  };

  return (
    <section id="keywords" className="py-20 bg-[#111113] relative border-t border-b border-[#f472b6]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono text-[#f472b6] tracking-widest uppercase px-3 py-1 rounded-full bg-[#1c1c21] border border-[#f472b6]/30 mb-3 inline-block">
            Core Identity &amp; Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            개발자로서의 5가지 핵심 키워드
          </h2>
          <p className="text-base text-[#a8a8b3]">
            시스템 로그부터 사용자의 일상까지, 어떠한 결함도 용납하지 않는 제 가치관과 분석적 역량을 표현합니다.
          </p>
        </motion.div>

        {/* 5 Keyword Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {KEYWORDS.map((item, idx) => {
            const isSelected = selectedKeyword?.id === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedKeyword(item)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1c1c21] border-2 border-[#f472b6] shadow-[0_0_25px_rgba(244,114,182,0.3)] scale-[1.03]'
                    : 'bg-[#1c1c21]/50 border border-white/10 hover:border-[#f472b6]/40 hover:bg-[#1c1c21]/80'
                }`}
              >

                {isSelected && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#f472b6]/30 to-transparent pointer-events-none" />
                )}

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#111113] border border-[#f472b6]/20 flex items-center justify-center mb-4">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="text-xs font-mono text-[#f472b6] font-semibold mb-1">
                    {item.tag}
                  </div>
                  <h3 className="text-base font-heading font-bold text-white mb-2 leading-snug">
                    {item.englishTag}
                  </h3>
                  <p className="text-xs text-[#a8a8b3] line-clamp-3 leading-relaxed">
                    {item.title}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#8c8c97]">
                  <span>클릭 시 상세 보기</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#f472b6] translate-x-1' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Keyword Detailed Highlight Showcase */}
        {selectedKeyword && (
          <div className="rounded-2xl bg-[#1c1c21] border border-[#f472b6]/30 p-6 sm:p-8 shadow-xl glass-card relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#111113] border border-[#f472b6]/40 flex items-center justify-center shrink-0">
                  {getIcon(selectedKeyword.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono text-[#f472b6] font-bold">{selectedKeyword.tag}</span>
                    <span className="text-xs text-[#8c8c97]">/ {selectedKeyword.englishTag}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                    {selectedKeyword.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#a8a8b3] leading-relaxed">
                    {selectedKeyword.description}
                  </p>
                </div>
              </div>

              <div className="bg-[#111113] p-4 rounded-xl border border-[#f472b6]/20 shrink-0 md:max-w-xs">
                <div className="text-[11px] font-mono text-[#8c8c97] uppercase mb-1 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-[#f472b6]" />
                  실제 프로젝트 검증 성과
                </div>
                <div className="text-xs font-semibold text-[#f472b6] leading-normal font-mono">
                  {selectedKeyword.highlightText}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Color Palette Section */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <Palette className="w-5 h-5 text-[#f472b6]" />
            <h3 className="text-xl font-heading font-bold text-white">
              브랜드 ID 및 컬러 아이덴티티
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Color */}
            <div className="p-5 rounded-2xl bg-[#1c1c21] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#a8a8b3] uppercase">Main Color</span>
                  <span className="text-xs font-mono text-white font-bold bg-[#111113] px-2 py-0.5 rounded border border-white/10">#111113</span>
                </div>
                <div className="w-full h-12 rounded-xl bg-[#111113] border border-white/20 mb-3 shadow-inner flex items-center justify-center text-xs font-mono text-[#a8a8b3]">
                  Deep Charcoal
                </div>
                <h4 className="text-sm font-bold text-white mb-1">깊은 시스템과 로그의 세계</h4>
                <p className="text-xs text-[#a8a8b3] leading-relaxed">
                  어두운 로그 화면 속 깊은 곳을 상징하며, 군더더기 없이 차분한 전문가의 신뢰감을 줍니다.
                </p>
              </div>
            </div>

            {/* Point Color */}
            <div className="p-5 rounded-2xl bg-[#1c1c21] border border-[#f472b6]/40 shadow-[0_0_20px_rgba(244,114,182,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#f472b6] uppercase font-bold">Point Color</span>
                  <span className="text-xs font-mono text-[#f472b6] font-bold bg-[#111113] px-2 py-0.5 rounded border border-[#f472b6]/30">#f472b6</span>
                </div>
                <div className="w-full h-12 rounded-xl bg-[#f472b6] mb-3 shadow-[0_0_15px_rgba(244,114,182,0.4)] flex items-center justify-center text-xs font-mono font-bold text-[#111113]">
                  Signal Pink
                </div>
                <h4 className="text-sm font-bold text-white mb-1">섬광처럼 찾아낸 결정적 단서</h4>
                <p className="text-xs text-[#a8a8b3] leading-relaxed">
                  수많은 데이터 속에서 발견한 핵심 Insight와 기술적 예리함을 선명하게 부각시킵니다.
                </p>
              </div>
            </div>

            {/* Sub Color */}
            <div className="p-5 rounded-2xl bg-[#1c1c21] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#a8a8b3] uppercase">Sub Color</span>
                  <span className="text-xs font-mono text-white font-bold bg-[#111113] px-2 py-0.5 rounded border border-white/10">#8c8c97</span>
                </div>
                <div className="w-full h-12 rounded-xl bg-[#8c8c97] mb-3 flex items-center justify-center text-xs font-mono font-bold text-[#111113]">
                  Soft Graphite
                </div>
                <h4 className="text-sm font-bold text-white mb-1">시스템을 지탱하는 견고함</h4>
                <p className="text-xs text-[#a8a8b3] leading-relaxed">
                  흔들리지 않는 중립 톤으로 기복 없이 24/7 시스템을 조화롭게 지탱하는 침착성을 나타냅니다.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
