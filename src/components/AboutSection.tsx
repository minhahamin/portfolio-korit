import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Flame, Users, Briefcase, CheckCircle2, GraduationCap, Sparkles, Award } from 'lucide-react';
import { CAREER_HISTORY, EDUCATION_HISTORY } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0B192C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono text-[#00D4FF] tracking-widest uppercase px-3 py-1 rounded-full bg-[#102A43] border border-[#00D4FF]/30 mb-3 inline-block">
            About Developer &amp; Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            개발자 소개 &amp; 경력·교육 이력
          </h2>
          <p className="text-base text-[#829AB1]">
            2년차 풀스택 웹 개발자 홍민하입니다. 실무 개발 경험과 AI 국비 과정을 통해 지속 성장하고 있습니다.
          </p>
        </motion.div>

        {/* Career Timeline Section (Temporarily commented out)
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-[#00D4FF]" />
            <h3 className="text-xl font-heading font-bold text-white">
              실무 경력 이력 (Work Experience)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAREER_HISTORY.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-[#102A43] border border-[#00D4FF]/30 p-6 sm:p-8 shadow-xl glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#00D4FF] bg-[#0B192C] px-3 py-1 rounded-full border border-[#00D4FF]/30">
                      {item.role}
                    </span>
                    <span className="text-xs font-mono text-[#829AB1] bg-[#0B192C] px-2.5 py-0.5 rounded border border-white/10">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-2xl font-heading font-bold text-white mt-3 mb-1">
                    {item.company}
                  </h4>

                  <p className="text-sm font-semibold text-[#00D4FF] mb-4">
                    {item.summary}
                  </p>

                  <div className="space-y-2.5 bg-[#0B192C]/70 p-4 rounded-xl border border-white/5">
                    <span className="text-[11px] font-mono text-[#829AB1] uppercase block mb-1">담당 업무 및 성과</span>
                    {item.duties.map((duty, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#F0F4F8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{duty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-[#627D98]">
                  <span>Stack: React / Spring Boot / Node.js / MariaDB</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Education & AI Bootcamp Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5 text-[#00D4FF]" />
            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span>교육 및 수강 이력 (Education &amp; Training)</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30">
                AI &amp; Full Stack
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_HISTORY.map((edu) => {
              const isInProgress = edu.status.includes('수강 중');
              return (
                <div
                  key={edu.id}
                  className="rounded-2xl bg-[#102A43] border border-white/10 hover:border-[#00D4FF]/40 p-6 shadow-xl glass-card relative overflow-hidden flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border inline-flex items-center gap-1.5 ${
                        isInProgress 
                          ? 'text-emerald-400 bg-emerald-950/80 border-emerald-500/30' 
                          : 'text-sky-300 bg-sky-950/80 border-sky-500/30'
                      }`}>
                        {isInProgress ? <Sparkles className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
                        <span>{edu.status}</span>
                      </span>
                      <span className="text-[11px] font-mono text-[#829AB1] bg-[#0B192C] px-2.5 py-0.5 rounded-lg border border-white/10">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-heading font-bold text-white mb-1 leading-snug">
                      {edu.course}
                    </h4>
                    <p className="text-xs font-semibold text-[#00D4FF] mb-4">
                      {edu.institution}
                    </p>

                    <div className="space-y-2 bg-[#0B192C]/70 p-3.5 rounded-xl border border-white/5 mb-4">
                      <span className="text-[10px] font-mono text-[#829AB1] uppercase block mb-1">핵심 교육 과정 및 항목</span>
                      {edu.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#F0F4F8]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {edu.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B192C] text-[#829AB1] border border-white/10"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Values Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-white/10"
        >
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#102A43] border border-[#00D4FF]/30 p-6 sm:p-8 shadow-2xl glass-card relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-[#0B192C] border-2 border-[#00D4FF] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                <ShieldCheck className="w-8 h-8 text-[#00D4FF]" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                홍민하 | Hong Minha
              </h3>
              <p className="text-xs font-mono text-[#00D4FF] mb-4">
                Full Stack Web Developer
              </p>

              <p className="text-xs text-[#829AB1] leading-relaxed mb-6">
                &quot;보기 좋은 화면을 넘어, 대용량 데이터 환경에서도 멈춤 없이 안정적으로 동작하는 고품질 서비스를 만듭니다.&quot;
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-mono text-[#F0F4F8]">
                <div className="flex items-center justify-between">
                  <span className="text-[#627D98]">주요 스택</span>
                  <span className="text-[#00D4FF]">React, Spring Boot, Node.js</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#627D98]">데이터베이스</span>
                  <span className="text-emerald-400">MariaDB, PostgreSQL, MySQL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#627D98]">핵심 역량</span>
                  <span className="text-white">DB Optimization &amp; Race Condition Guard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Core Engineering Values */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="p-5 sm:p-6 rounded-2xl bg-[#102A43]/60 border border-white/10">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#00D4FF]" />
                <span>1. 문제의 원인을 끝까지 추적해 '뿌리'를 해결합니다</span>
              </h4>
              <p className="text-xs text-[#829AB1] leading-relaxed">
                N+1 쿼리, Full Table Scan, LOT 번호 동시성 중복 등 실무에서 발생하는 기술적 문제를 임시 임시방편이 아닌 인덱싱, 트랜잭션, 시퀀스 등 원인부터 분석해 완전 해결합니다.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#102A43]/60 border border-white/10">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00D4FF]" />
                <span>2. 기능 확장과 유지보수가 용이한 코드를 작성합니다</span>
              </h4>
              <p className="text-xs text-[#829AB1] leading-relaxed">
                기능 단위 컴포넌트 분리, 명확한 네이밍, Controller/Service 레이어드 아키텍처 적용으로 동료 개발자가 쉽게 이해하고 빠르게 확장할 수 있는 표준화된 코드를 작성합니다.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#102A43]/60 border border-white/10">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#00D4FF]" />
                <span>3. 검증된 안정성과 쾌적한 UX를 최우선으로 둡니다</span>
              </h4>
              <p className="text-xs text-[#829AB1] leading-relaxed">
                Axios Interceptor 401 감지 자동 세션 재발급, 가상 스크롤 페이징, Promise.all API 병렬 처리로 사용자가 작업 중 불편이나 지연을 전혀 겪지 않도록 차분히 보호합니다.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
