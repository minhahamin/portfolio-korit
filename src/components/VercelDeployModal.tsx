import React, { useState } from 'react';
import { Rocket, Copy, Check, ExternalLink, Code2, Terminal, Layers, FileCode } from 'lucide-react';
import { VERCEL_NEXTJS_FILES } from '../data/portfolioData';

interface VercelDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelDeployModal: React.FC<VercelDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeFileTab, setActiveFileTab] = useState<'page' | 'api' | 'vercel' | 'package'>('page');

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#102A43] border border-[#00D4FF]/40 rounded-2xl max-w-3xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl glass-card text-xs">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#829AB1] hover:text-white font-mono bg-[#0B192C] px-2.5 py-1 rounded-lg border border-white/10"
        >
          ✕ ESC
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#0B192C] border border-[#00D4FF] flex items-center justify-center">
            <Rocket className="w-5 h-5 text-[#00D4FF]" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span>Next.js Vercel 1-Click 배포 가이드</span>
            </h3>
            <p className="text-xs text-[#829AB1]">
              이 포트폴리오 프로젝트를 Next.js App Router로 Vercel에 정식 배포하는 과정입니다.
            </p>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-4 mb-6">
          
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-[#0B192C] border border-white/10 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#00D4FF] text-[#0B192C] font-bold flex items-center justify-center shrink-0 font-mono text-xs">1</span>
            <div>
              <h4 className="font-bold text-white mb-1">GitHub 저장소 연동 / Export</h4>
              <p className="text-[#829AB1]">
                우측 상단 메뉴에서 <strong>[Export to GitHub]</strong> 또는 ZIP 다운로드를 눌러 내 GitHub 계정에 저장소를 생성합니다.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-[#0B192C] border border-white/10 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#00D4FF] text-[#0B192C] font-bold flex items-center justify-center shrink-0 font-mono text-xs">2</span>
            <div className="w-full">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-white">Vercel New Project 생성</h4>
                <a
                  href="https://vercel.com/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-[#00D4FF] hover:underline flex items-center gap-1"
                >
                  <span>Vercel 대시보드 바로가기</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[#829AB1]">
                Vercel에서 Import Git Repository를 선택한 후, 생성한 GitHub 저장소를 지정합니다.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-[#0B192C] border border-white/10 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#00D4FF] text-[#0B192C] font-bold flex items-center justify-center shrink-0 font-mono text-xs">3</span>
            <div>
              <h4 className="font-bold text-white mb-1">환경 변수(Environment Variable) 설정</h4>
              <p className="text-[#829AB1]">
                Vercel 프로젝트 설정의 Environment Variables 항목에 <code className="text-[#00D4FF] font-mono bg-[#102A43] px-1.5 py-0.5 rounded">GEMINI_API_KEY</code>를 등록합니다.
              </p>
            </div>
          </div>

        </div>

        {/* Generated Next.js Code Files Preview Tabs */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-white flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-[#00D4FF]" />
              Next.js 15 App Router 파일 소스 코드
            </span>

            <div className="flex gap-1 bg-[#0B192C] p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setActiveFileTab('page')}
                className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold ${
                  activeFileTab === 'page' ? 'bg-[#00D4FF] text-[#0B192C]' : 'text-[#829AB1]'
                }`}
              >
                app/page.tsx
              </button>
              <button
                onClick={() => setActiveFileTab('api')}
                className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold ${
                  activeFileTab === 'api' ? 'bg-[#00D4FF] text-[#0B192C]' : 'text-[#829AB1]'
                }`}
              >
                app/api/route.ts
              </button>
              <button
                onClick={() => setActiveFileTab('vercel')}
                className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold ${
                  activeFileTab === 'vercel' ? 'bg-[#00D4FF] text-[#0B192C]' : 'text-[#829AB1]'
                }`}
              >
                vercel.json
              </button>
            </div>
          </div>

          <div className="relative rounded-xl bg-[#0B192C] border border-[#00D4FF]/20 p-4 font-mono text-[11px] overflow-x-auto max-h-[200px]">
            <button
              onClick={() => {
                const textToCopy = 
                  activeFileTab === 'page' ? VERCEL_NEXTJS_FILES.pageTsx :
                  activeFileTab === 'api' ? VERCEL_NEXTJS_FILES.apiRouteTs :
                  activeFileTab === 'vercel' ? VERCEL_NEXTJS_FILES.vercelJson :
                  VERCEL_NEXTJS_FILES.packageJson;
                handleCopy(textToCopy, activeFileTab);
              }}
              className="absolute top-2 right-2 px-2.5 py-1 rounded bg-[#102A43] hover:bg-[#1E3A8A] text-[#00D4FF] border border-[#00D4FF]/30 flex items-center gap-1 text-[10px]"
            >
              {copiedKey === activeFileTab ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedKey === activeFileTab ? '복사됨!' : '코드 복사'}</span>
            </button>

            <pre className="text-[#00D4FF]">
              <code>
                {activeFileTab === 'page' && VERCEL_NEXTJS_FILES.pageTsx}
                {activeFileTab === 'api' && VERCEL_NEXTJS_FILES.apiRouteTs}
                {activeFileTab === 'vercel' && VERCEL_NEXTJS_FILES.vercelJson}
              </code>
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[#627D98] font-mono text-[11px]">
            Build Target: Next.js 15 + Vercel Serverless
          </span>

          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#00D4FF] text-[#0B192C] hover:opacity-95"
          >
            <span>Vercel에서 바로 배포하기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
