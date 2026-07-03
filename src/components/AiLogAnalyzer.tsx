import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Sparkles, AlertTriangle, CheckCircle, Code2, ShieldAlert, FileText, ArrowRight, RefreshCw, Layers } from 'lucide-react';
import { SAMPLE_LOG_PRESETS } from '../data/portfolioData';
import { LogAnalysisResult } from '../types';

export const AiLogAnalyzer: React.FC = () => {

  const [logText, setLogText] = useState(SAMPLE_LOG_PRESETS[0].log);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LogAnalysisResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handlePresetSelect = (presetLog: string) => {
    setLogText(presetLog);
    setResult(null);
    setErrorMsg(null);
  };

  const handleAnalyze = async () => {
    if (!logText.trim()) {
      setErrorMsg("분석할 로그 텍스트를 입력하거나 예시 preset을 선택해 주세요.");
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setResult(null);

    try {
      const response = await fetch('/api/gemini/analyze-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logText })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error || '로그 분석 처리 실패');
      }

      const data: LogAnalysisResult = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error('Log analysis error:', err);
      setErrorMsg(err.message || '로그 분석 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-analyzer" className="py-20 bg-[#0B192C] relative overflow-hidden">
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
            Gemini 2.5 AI Powered Forensics
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Cpu className="w-8 h-8 text-[#00D4FF]" />
            <span>AI 실시간 로그 추적기</span>
          </h2>
          <p className="text-base text-[#829AB1]">
            수많은 스택 트레이스 속에서 오직 <span className="text-[#00D4FF] font-semibold">1줄의 결정적 단서</span>를 찾아내 근본 원인과 UX 수호책을 도출합니다.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          
          {/* Left Column: Log Input & Presets */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Presets Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#829AB1] uppercase flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#00D4FF]" />
                  실제 장애 로그 Preset 선택
                </span>
              </div>

              {/* Preset Buttons */}
              <div className="space-y-2 mb-4">
                {SAMPLE_LOG_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePresetSelect(preset.log)}
                    className="w-full text-left p-3 rounded-xl bg-[#102A43]/70 hover:bg-[#102A43] border border-white/10 hover:border-[#00D4FF]/40 text-xs text-[#F0F4F8] transition-all duration-200 flex items-center justify-between group"
                  >
                    <span className="font-mono truncate">{preset.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#627D98] group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>

              {/* Console Input Area */}
              <div className="rounded-2xl bg-[#102A43]/90 border border-[#00D4FF]/30 p-4 shadow-xl glass-card relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#00D4FF]" />
                    <span className="text-xs font-mono text-white font-semibold">LOG CONSOLE INPUT</span>
                  </div>
                  <button
                    onClick={() => setLogText('')}
                    className="text-[11px] font-mono text-[#829AB1] hover:text-white transition-colors"
                  >
                    Clear
                  </button>
                </div>

                <textarea
                  value={logText}
                  onChange={(e) => setLogText(e.target.value)}
                  placeholder="분석할 에러 스택 트레이스나 시스템 로그를 이곳에 붙여넣으세요..."
                  rows={9}
                  className="w-full bg-[#0B192C] text-[#F0F4F8] font-mono text-xs p-3 rounded-xl border border-white/10 focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF] transition-all resize-none leading-relaxed"
                />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#627D98]">
                    Line count: {logText.split('\n').length} | Char: {logText.length}
                  </span>

                  <button
                    onClick={handleAnalyze}
                    disabled={loading}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#00D4FF] to-[#38BDF8] text-[#0B192C] hover:opacity-95 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] disabled:opacity-50 hover:scale-105"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>로그 추적 스캔 중...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>로그 근본 원인 추적 실행</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {errorMsg && (
              <div className="mt-4 p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>

          {/* Right Column: AI Analysis Output Report */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex-1 rounded-2xl bg-[#102A43] border border-[#00D4FF]/30 p-5 sm:p-6 shadow-xl glass-card flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                    LOG TRACKER REPORT OUTPUT
                  </span>
                </div>
                {result && (
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${
                    result.severity === 'CRITICAL' ? 'bg-red-950 text-red-400 border-red-500/50' :
                    result.severity === 'HIGH' ? 'bg-amber-950 text-amber-400 border-amber-500/50' :
                    'bg-blue-950 text-blue-400 border-blue-500/50'
                  }`}>
                    {result.severity} SEVERITY
                  </span>
                )}
              </div>

              {/* Empty/Loading State */}
              {!result && !loading && (
                <div className="flex-1 min-h-[340px] flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-white/10 rounded-xl">
                  <div className="w-16 h-16 rounded-2xl bg-[#0B192C] border border-[#00D4FF]/20 flex items-center justify-center mb-4">
                    <Cpu className="w-8 h-8 text-[#627D98]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    로그 분석 대기 중
                  </h3>
                  <p className="text-xs text-[#829AB1] max-w-sm leading-relaxed">
                    왼쪽 패널의 로그 Preset을 선택하거나 직접 로그를 입력하고 [로그 근본 원인 추적 실행] 버튼을 눌러주세요.
                  </p>
                </div>
              )}

              {/* Scanning Loader State */}
              {loading && (
                <div className="flex-1 min-h-[340px] flex flex-col items-center justify-center text-center p-6">
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-2xl border-2 border-[#00D4FF] animate-ping opacity-50" />
                    <div className="w-16 h-16 rounded-2xl bg-[#0B192C] border border-[#00D4FF] flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-[#00D4FF] animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-base font-mono font-bold text-[#00D4FF] mb-2">
                    ANALYTICS IN PROGRESS...
                  </h3>
                  <p className="text-xs text-[#829AB1] font-mono animate-pulse">
                    로그 스택 트레이스 상의 Async Storage 및 스레드 격차 분석 중...
                  </p>
                </div>
              )}

              {/* Result State */}
              {result && !loading && (
                <div className="space-y-4 text-xs">
                  
                  {/* Issue Title */}
                  <div className="p-3.5 rounded-xl bg-[#0B192C] border border-[#00D4FF]/30">
                    <span className="text-[10px] font-mono text-[#829AB1] uppercase block mb-1">감지된 핵심 이슈</span>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-[#00D4FF] shrink-0" />
                      {result.detectedIssue}
                    </h4>
                  </div>

                  {/* Hidden Clue */}
                  <div className="p-3.5 rounded-xl bg-[#0B192C]/80 border border-amber-500/30">
                    <span className="text-[10px] font-mono text-amber-400 uppercase font-bold flex items-center gap-1 mb-1">
                      <Sparkles className="w-3 h-3" /> 결정적 숨겨진 단서 (Hidden Clue)
                    </span>
                    <p className="text-xs font-mono text-amber-200 leading-relaxed">
                      {result.hiddenClue}
                    </p>
                  </div>

                  {/* Root Cause Analysis */}
                  <div>
                    <span className="text-[10px] font-mono text-[#829AB1] uppercase block mb-1">근본 원인 분석 (Root Cause)</span>
                    <p className="text-xs text-[#F0F4F8] leading-relaxed bg-[#0B192C]/50 p-3 rounded-lg border border-white/5">
                      {result.rootCauseAnalysis}
                    </p>
                  </div>

                  {/* Suggested Fix Code */}
                  {result.suggestedFixCode && (
                    <div>
                      <span className="text-[10px] font-mono text-[#00D4FF] uppercase flex items-center gap-1 mb-1">
                        <Code2 className="w-3 h-3" /> 추천 가드 코드 (Guard Code)
                      </span>
                      <pre className="p-3 rounded-xl bg-[#0B192C] border border-[#00D4FF]/20 text-[#00D4FF] font-mono text-[11px] overflow-x-auto leading-normal">
                        <code>{result.suggestedFixCode}</code>
                      </pre>
                    </div>
                  )}

                  {/* UX Protection Strategy & Preventative Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-[#0B192C] border border-emerald-500/30">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">사용자 UX 수호 전략</span>
                      <p className="text-[11px] text-[#829AB1] leading-relaxed">
                        {result.uxProtectionStrategy}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0B192C] border border-blue-500/30">
                      <span className="text-[10px] font-mono text-blue-400 uppercase font-bold block mb-1">예방 모니터링 메트릭</span>
                      <p className="text-[11px] text-[#829AB1] leading-relaxed font-mono">
                        {result.preventativeMetrics}
                      </p>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
