import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, ArrowRight, Play, Pause, CheckCircle2, AlertTriangle, Search, Activity } from 'lucide-react';
import { HERO_TAGLINE } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenAiAnalyzer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAiAnalyzer }) => {

  const [logs, setLogs] = useState<Array<{ id: number; type: string; time: string; msg: string }>>([
    { id: 1, type: 'INFO', time: '20:20:58.102', msg: 'Log-Tracker agent initialized. Monitoring 28 microservices...' },
    { id: 2, type: 'WARN', time: '20:20:58.341', msg: 'Latency spike detected on /api/payment/checkout (320ms)' },
    { id: 3, type: 'DEBUG', time: '20:20:58.590', msg: 'Trace-ID [tr_9a8f21] isolated -> Redis lock expiration mismatch' },
    { id: 4, type: 'RESOLVED', time: '20:20:58.845', msg: 'Auto-Renew Watchdog applied. Root cause neutralized in 2ms.' },
    { id: 5, type: 'INFO', time: '20:20:59.012', msg: 'User experience safeguarded with 0ms downtime. Systems 100% nominal.' },
  ]);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const streamInterval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
      
      const sampleEvents = [
        { type: 'INFO', msg: `HealthCheck OK on pod-k8s-cluster-${Math.floor(Math.random() * 8 + 1)}` },
        { type: 'DEBUG', msg: `AsyncLocalStorage context propagated trace_id=tr_${Math.random().toString(36).substring(2, 8)}` },
        { type: 'WARN', msg: `Slow query log captured: PG SeqScan duration ${Math.floor(Math.random() * 30 + 15)}ms` },
        { type: 'RESOLVED', msg: `Index optimization guard active. Query duration reduced to 1.8ms.` },
        { type: 'INFO', msg: `Zero-Downtime deployment canary health verified (100% pass)` }
      ];

      const nextEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];

      setLogs(prev => [
        ...prev.slice(-6),
        { id: Date.now(), type: nextEvent.type, time: timeStr, msg: nextEvent.msg }
      ]);
    }, 2500);

    return () => clearInterval(streamInterval);
  }, [isPaused]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-[#1E3A8A]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43] border border-[#00D4FF]/30 text-[#00D4FF] text-xs font-mono mb-6 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
            <Shield className="w-3.5 h-3.5 animate-pulse text-[#00D4FF]" />
            <span>LOG-TRACKER &amp; DIGITAL SENTINEL PORTFOLIO</span>
          </div>

          {/* Main Headline (User's Exact Tagline) */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-tight mb-6">
            &quot;로그 속의 보이지 않는 <br />
            단서를 추적하여, <br />
            <span className="text-gradient-cyan">
              사용자의 눈에 보이는 일상을 <br />
              빈틈없이 수호하는
            </span> 개발자&quot;
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-[#829AB1] leading-relaxed mb-8">
            {HERO_TAGLINE.bio}
          </p>

          {/* Action Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenAiAnalyzer}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#00D4FF] to-[#38BDF8] text-[#0B192C] hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] transition-all duration-300 hover:scale-105"
            >
              <Cpu className="w-4 h-4" />
              <span>AI 실시간 로그 분석기 체험</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#root-cause"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#102A43] hover:bg-[#1E3A8A] text-white border border-[#00D4FF]/30 hover:border-[#00D4FF] transition-all duration-300 shadow-sm"
            >
              <Search className="w-4 h-4 text-[#00D4FF]" />
              <span>근본 해결(Root-Cause) 사례 보기</span>
            </a>
          </div>
        </motion.div>

        {/* Live Terminal Log Stream Component */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto rounded-2xl bg-[#0B192C] border border-[#00D4FF]/30 shadow-2xl overflow-hidden glass-card"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#102A43]/80 border-b border-[#00D4FF]/20">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-[#829AB1] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#00D4FF]" />
                sentinel-live-log-stream.log
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                LIVE STREAM
              </span>
              <button 
                onClick={() => setIsPaused(!isPaused)}
                className="text-[#829AB1] hover:text-white transition-colors text-xs flex items-center gap-1"
                title={isPaused ? "스트림 재개" : "스트림 일시정지"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-[#00D4FF]" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-2.5 min-h-[220px] max-h-[280px] overflow-y-auto">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2.5 leading-relaxed animate-fade-in">
                <span className="text-[#627D98] shrink-0 font-light">{log.time}</span>
                
                {log.type === 'INFO' && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-950/80 text-blue-400 border border-blue-500/30 shrink-0">
                    INFO
                  </span>
                )}
                {log.type === 'WARN' && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-950/80 text-amber-400 border border-amber-500/30 shrink-0 flex items-center gap-1">
                    <AlertTriangle className="w-2.5 h-2.5" /> WARN
                  </span>
                )}
                {log.type === 'DEBUG' && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-950/80 text-purple-400 border border-purple-500/30 shrink-0">
                    DEBUG
                  </span>
                )}
                {log.type === 'RESOLVED' && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 shrink-0 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> RESOLVED
                  </span>
                )}

                <span className={
                  log.type === 'RESOLVED' 
                    ? 'text-emerald-300 font-medium' 
                    : log.type === 'WARN' 
                    ? 'text-amber-200' 
                    : 'text-[#F0F4F8]'
                }>
                  {log.msg}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-1 text-[#00D4FF] pt-1">
              <span className="w-2 h-4 bg-[#00D4FF] animate-pulse inline-block" />
              <span className="text-xs text-[#829AB1] font-mono">Real-time log forensics active...</span>
            </div>
          </div>

          {/* Terminal Footer Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 bg-[#102A43]/90 border-t border-[#00D4FF]/20 text-center py-3 px-2">
            <div>
              <div className="text-[10px] text-[#829AB1] uppercase font-mono tracking-wider">Service SLA</div>
              <div className="text-sm sm:text-base font-bold text-white font-mono">99.99%</div>
            </div>
            <div>
              <div className="text-[10px] text-[#829AB1] uppercase font-mono tracking-wider">Mean Time To Detect</div>
              <div className="text-sm sm:text-base font-bold text-[#00D4FF] font-mono">&lt; 1.5 min</div>
            </div>
            <div>
              <div className="text-[10px] text-[#829AB1] uppercase font-mono tracking-wider">Root Cause Rate</div>
              <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">100% Resolved</div>
            </div>
            <div>
              <div className="text-[10px] text-[#829AB1] uppercase font-mono tracking-wider">User Downtime</div>
              <div className="text-sm sm:text-base font-bold text-white font-mono">0 ms</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
