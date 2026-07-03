import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Server, Activity, Cloud, CheckCircle2, Cpu, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {

  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const currentCategory = SKILL_CATEGORIES[activeCategoryIdx];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-[#00D4FF]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#00D4FF]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#00D4FF]" />;
      default: return <Cpu className="w-5 h-5 text-[#00D4FF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#0B192C] relative border-t border-b border-[#00D4FF]/10 overflow-hidden">
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
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            보이지 않는 곳을 다루는 기술 역량
          </h2>
          <p className="text-base text-[#829AB1]">
            백엔드 아키텍처부터 관찰도구(Observability), 그리고 서버리스/컨테이너 배포까지 체계적인 도구 모음을 갖추고 있습니다.
          </p>
        </motion.div>

        {/* Category Selector Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = activeCategoryIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#102A43] border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.25)]'
                    : 'bg-[#102A43]/50 border-white/10 hover:border-[#00D4FF]/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B192C] border border-[#00D4FF]/30 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-base font-heading font-bold text-white">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-[#829AB1] leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Skill Progress List */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#102A43] border border-[#00D4FF]/30 p-6 sm:p-8 shadow-xl glass-card"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B192C] border border-[#00D4FF]/30 flex items-center justify-center">
                {getCategoryIcon(currentCategory.iconName)}
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {currentCategory.category}
                </h3>
                <span className="text-xs font-mono text-[#829AB1]">
                  {currentCategory.skills.length} 개의 핵심 기술 스택
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {currentCategory.skills.map((skill, idx) => (
              <div key={idx} className="bg-[#0B192C]/80 p-4 rounded-xl border border-white/5 hover:border-[#00D4FF]/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white font-heading">{skill.name}</span>
                    <div className="flex gap-1">
                      {skill.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-[#00D4FF] bg-[#102A43] px-2 py-0.5 rounded border border-[#00D4FF]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#00D4FF] font-bold">
                    숙련도 {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-[#829AB1] mb-3 leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-[#102A43] overflow-hidden p-0.5 border border-white/10">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-[#1E3A8A] via-[#38BDF8] to-[#00D4FF] transition-all duration-1000 shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
