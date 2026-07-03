import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Send, CheckCircle2, AlertCircle, Phone, MapPin, Building, Sparkles, Inbox, RefreshCw, Trash2, X, ExternalLink } from 'lucide-react';

import { ContactFormData } from '../types';

interface StoredMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  type: string;
  createdAt: string;
  mailSentStatus?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'recruitment'
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionInfo, setSubmissionInfo] = useState<{ id?: string; timestamp?: string; mailSentStatus?: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Inbox state
  const [showInbox, setShowInbox] = useState(false);
  const [inboxMessages, setInboxMessages] = useState<StoredMessage[]>([]);
  const [inboxLoading, setInboxLoading] = useState(false);

  const fetchInbox = async () => {
    setInboxLoading(true);
    try {
      const res = await fetch('/api/contact/messages');
      if (res.ok) {
        const data = await res.json();
        setInboxMessages(data.messages || []);
      }
    } catch (err) {
      console.error('Failed to fetch inbox:', err);
    } finally {
      setInboxLoading(false);
    }
  };

  const handleOpenInbox = () => {
    setShowInbox(true);
    fetchInbox();
  };

  const handleDeleteMessage = async (id: string) => {
    try {
      const res = await fetch(`/api/contact/messages/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setInboxMessages(prev => prev.filter(m => m.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete message:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('성함, 회신받을 이메일, 작성 내용을 모두 입력해주세요.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || '메시지 전송 중 오류가 발생했습니다.');
      }

      setSubmissionInfo({
        id: resData.id,
        timestamp: resData.timestamp ? new Date(resData.timestamp).toLocaleString('ko-KR') : new Date().toLocaleString('ko-KR'),
        mailSentStatus: resData.mailSentStatus
      });
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || '메시지 전송에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0B192C] relative border-t border-[#00D4FF]/10 overflow-hidden">
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            홍민하 개발자와의 소통
          </h2>
          <p className="text-base text-[#829AB1]">
            채용 제안, 백엔드 아키텍처 컨설팅, 기술 교류 등 어떤 문의든 환영합니다.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#102A43] border border-[#00D4FF]/30 p-6 sm:p-8 shadow-xl glass-card">
              <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#00D4FF]" />
                  <span>직접 연락처 정보</span>
                </span>
                <button
                  onClick={handleOpenInbox}
                  className="px-2.5 py-1 rounded-lg bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 text-[#00D4FF] text-[11px] font-mono border border-[#00D4FF]/30 flex items-center gap-1.5 transition-all cursor-pointer"
                  title="서버 수신 메시지함 확인"
                >
                  <Inbox className="w-3.5 h-3.5" />
                  <span>수신함 확인</span>
                </button>
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#0B192C] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#102A43] border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#00D4FF]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#627D98] uppercase block">Primary Email</span>
                      <a href="mailto:hlkm1667haha@gmail.com" className="text-white hover:text-[#00D4FF] font-semibold transition-colors">
                        hlkm1667haha@gmail.com
                      </a>
                    </div>
                  </div>
                  <a
                    href="mailto:hlkm1667haha@gmail.com?subject=[포트폴리오 문의] 홍민하 개발자님께&body=안녕하세요, "
                    className="p-1.5 rounded-lg bg-[#102A43] hover:bg-[#00D4FF] text-[#829AB1] hover:text-[#0B192C] border border-white/10 transition-colors"
                    title="기본 메일 앱으로 직접 발송"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0B192C] border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#102A43] border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4 text-[#00D4FF]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#627D98] uppercase block">GitHub Profile</span>
                    <a href="https://github.com/minhahamin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00D4FF] font-semibold transition-colors">
                      github.com/minhahamin
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0B192C] border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#102A43] border border-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#00D4FF]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#627D98] uppercase block">Location</span>
                    <span className="text-white font-semibold">Busan, Korea</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 text-xs text-[#829AB1] space-y-2">
                <p className="leading-relaxed">
                  문의 주시면 평균 <strong>2시간 이내</strong>에 메일로 신속하게 답변 드리겠습니다.
                </p>
                <div className="p-3 rounded-xl bg-[#0B192C] border border-white/5 text-[11px] font-mono text-[#627D98] flex items-center justify-between">
                  <span>서버 메시지 수신 상태:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    API 활성 중
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#102A43] border border-[#00D4FF]/30 p-6 sm:p-8 shadow-xl glass-card">
              
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    메시지가 성공적으로 서버에 수신되었습니다!
                  </h3>
                  <p className="text-xs text-[#829AB1] max-w-md mx-auto mb-6 leading-relaxed">
                    실제 API인 <code>/api/contact</code> 엔드포인트로 정상 수신 및 데이터베이스 메시지함에 저장되었습니다.
                  </p>

                  {submissionInfo && (
                    <div className="max-w-md mx-auto p-4 rounded-xl bg-[#0B192C] border border-white/10 text-left text-xs font-mono mb-6 space-y-2 text-[#829AB1]">
                      <div className="flex items-center justify-between">
                        <span>전송 메시지 ID:</span>
                        <span className="text-[#00D4FF] font-semibold">{submissionInfo.id}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>접수 일시:</span>
                        <span className="text-white">{submissionInfo.timestamp}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>서버 메시지함 상태:</span>
                        <span className="text-emerald-400 font-semibold">저장 완료 (200 OK)</span>
                      </div>
                      {submissionInfo.mailSentStatus && (
                        <div className="flex items-center justify-between border-t border-white/5 pt-1.5 text-[11px]">
                          <span>메일 발송 상태:</span>
                          <span className="text-amber-400 font-semibold">{submissionInfo.mailSentStatus}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleOpenInbox}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#102A43] text-[#00D4FF] border border-[#00D4FF]/40 hover:bg-[#00D4FF]/10 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Inbox className="w-4 h-4" />
                      <span>수신 메시지함 실시간 확인</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSubmissionInfo(null);
                        setFormData({ name: '', email: '', company: '', message: '', type: 'recruitment' });
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#00D4FF] text-[#0B192C] hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all cursor-pointer"
                    >
                      새 메시지 보내기
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Category Type */}
                  <div>
                    <label className="block text-xs font-mono text-[#829AB1] uppercase mb-2">
                      문의 유형 선택
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'recruitment' })}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                          formData.type === 'recruitment'
                            ? 'bg-[#00D4FF] text-[#0B192C]'
                            : 'bg-[#0B192C] text-[#829AB1] border border-white/10'
                        }`}
                      >
                        채용 제안
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'project' })}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                          formData.type === 'project'
                            ? 'bg-[#00D4FF] text-[#0B192C]'
                            : 'bg-[#0B192C] text-[#829AB1] border border-white/10'
                        }`}
                      >
                        프로젝트 협업
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'coffee_chat' })}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                          formData.type === 'coffee_chat'
                            ? 'bg-[#00D4FF] text-[#0B192C]'
                            : 'bg-[#0B192C] text-[#829AB1] border border-white/10'
                        }`}
                      >
                        커피챗 / 질의
                      </button>
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#829AB1] uppercase mb-1">
                        성함 / 담당자명 *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="예: 홍길동"
                        className="w-full bg-[#0B192C] text-white text-xs p-3 rounded-xl border border-white/10 focus:border-[#00D4FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#829AB1] uppercase mb-1">
                        회신받을 이메일 *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@company.com"
                        className="w-full bg-[#0B192C] text-white text-xs p-3 rounded-xl border border-white/10 focus:border-[#00D4FF] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-[#829AB1] uppercase mb-1">
                      소속 회사 / 팀명 (선택)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="예: 테크 컴퍼니 백엔드 팀"
                      className="w-full bg-[#0B192C] text-white text-xs p-3 rounded-xl border border-white/10 focus:border-[#00D4FF] focus:outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-[#829AB1] uppercase mb-1">
                      문의 및 포지션 상세 내용 *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="프로젝트 개요, 채용 직무, 궁금하신 점을 작성해 주세요..."
                      rows={5}
                      className="w-full bg-[#0B192C] text-white text-xs p-3 rounded-xl border border-white/10 focus:border-[#00D4FF] focus:outline-none resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#00D4FF] to-[#38BDF8] text-[#0B192C] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? '백엔드 서버로 전송 처리 중...' : '백엔드 서버로 메시지 전송하기'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </motion.div>

      </div>

      {/* Admin Message Inbox Modal */}
      {showInbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#102A43] border border-[#00D4FF]/40 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl glass-card overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 bg-[#0B192C] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#102A43] border border-[#00D4FF]/30 text-[#00D4FF]">
                  <Inbox className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-white flex items-center gap-2">
                    <span>수신 메시지함 (Admin Inbox)</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30">
                      LIVE
                    </span>
                  </h3>
                  <p className="text-[11px] text-[#829AB1] font-mono">
                    GET /api/contact/messages · 실시간 백엔드 메시지 보관소
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={fetchInbox}
                  disabled={inboxLoading}
                  className="p-2 rounded-xl bg-[#102A43] hover:bg-[#00D4FF]/20 text-[#00D4FF] border border-white/10 text-xs transition-all flex items-center gap-1 cursor-pointer"
                  title="새로고침"
                >
                  <RefreshCw className={`w-4 h-4 ${inboxLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => setShowInbox(false)}
                  className="p-2 rounded-xl bg-[#102A43] hover:bg-red-500/20 text-[#829AB1] hover:text-red-400 border border-white/10 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Message List */}
            <div className="p-5 overflow-y-auto space-y-4 flex-1">
              {inboxLoading ? (
                <div className="text-center py-12 text-xs text-[#829AB1] font-mono flex flex-col items-center gap-2">
                  <RefreshCw className="w-6 h-6 text-[#00D4FF] animate-spin" />
                  <span>메시지 보관소에서 데이터 수신 중...</span>
                </div>
              ) : inboxMessages.length === 0 ? (
                <div className="text-center py-12 bg-[#0B192C]/50 rounded-2xl border border-white/5 p-8">
                  <Inbox className="w-10 h-10 text-[#627D98] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-white mb-1">수신된 메시지가 아직 없습니다</p>
                  <p className="text-xs text-[#829AB1]">
                    문의 폼을 통해 메시지를 전송하면 이곳에 실시간으로 기록됩니다.
                  </p>
                </div>
              ) : (
                inboxMessages.map((msg) => (
                  <div key={msg.id} className="p-4 rounded-xl bg-[#0B192C] border border-white/10 hover:border-[#00D4FF]/30 transition-all text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{msg.name}</span>
                        {msg.company && (
                          <span className="text-[11px] text-[#829AB1] bg-[#102A43] px-2 py-0.5 rounded">
                            {msg.company}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-[#00D4FF] bg-[#00D4FF]/10 px-2 py-0.5 rounded border border-[#00D4FF]/20">
                          {msg.type === 'recruitment' ? '채용 제안' : msg.type === 'project' ? '프로젝트 협업' : '커피챗'}
                        </span>
                      </div>

                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="p-1.5 text-[#627D98] hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all cursor-pointer"
                        title="메시지 삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-[#829AB1] font-mono text-[11px] mb-3 flex items-center gap-3">
                      <span>이메일: <a href={`mailto:${msg.email}`} className="text-white underline">{msg.email}</a></span>
                      <span>·</span>
                      <span>{new Date(msg.createdAt).toLocaleString('ko-KR')}</span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#102A43]/80 border border-white/5 text-white whitespace-pre-wrap leading-relaxed text-xs">
                      {msg.message}
                    </div>

                    <div className="mt-2 text-[10px] font-mono text-[#627D98] flex items-center justify-between pt-2 border-t border-white/5">
                      <span>ID: {msg.id}</span>
                      <span className="text-emerald-400">Status: {msg.mailSentStatus || 'Stored in DB'}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#0B192C] border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#829AB1]">
              <span>총 {inboxMessages.length} 건의 메시지 수신됨</span>
              <button
                onClick={() => setShowInbox(false)}
                className="px-4 py-1.5 rounded-lg bg-[#102A43] hover:bg-white/10 text-white transition-all cursor-pointer"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
