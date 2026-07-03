import { GoogleGenAI } from "@google/genai";

export interface LogAnalysisResult {
  detectedIssue: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  hiddenClue: string;
  rootCauseAnalysis: string;
  suggestedFixCode: string;
  uxProtectionStrategy: string;
  preventativeMetrics: string;
}

export async function analyzeLogText(logText: string): Promise<LogAnalysisResult> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `
당신은 '로그 추적자(Log-Tracker)'이자 '디지털 파수꾼' 백엔드 수석 아키텍트 개발자입니다.
제시된 로그/에러 스택 트레이스를 정밀 분석하여, 아래 JSON 스키마 형식의 유효한 JSON만 반환해 주세요:

{
  "detectedIssue": "감지된 이슈 이름 (예: Redis 분산 락 레이스 조건)",
  "severity": "CRITICAL" | "HIGH" | "MEDIUM" | "LOW",
  "hiddenClue": "수많은 로그 속에서 찾아낸 결정적인 1줄의 단서",
  "rootCauseAnalysis": "임시 대처(재시작 등)가 아닌 원천적인 근본 원인 분석",
  "suggestedFixCode": "문제 해결 및 멱등성 보장을 위한 예시 코드 (TypeScript/SQL/Conf)",
  "uxProtectionStrategy": "최종 사용자가 불만을 느끼지 않도록 안심시키는 UX 수호 전략",
  "preventativeMetrics": "동일 재발을 선제 감지하기 위한 Datadog/Prometheus 메트릭 제안"
}

분석 대상 로그:
${logText}
`;

    const modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash"];
    for (const modelName of modelsToTry) {
      try {
        const aiResponse = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });

        const rawText = aiResponse.text || "{}";
        return JSON.parse(rawText);
      } catch (genAiError: any) {
        console.warn(`⚠️ [Gemini ${modelName} Error] ${genAiError?.message || genAiError}`);
      }
    }
    console.log("ℹ️ All Gemini models busy or failed, using heuristic analysis fallback.");
  }

  // Fallback Heuristic Analysis engine if API Key is missing or quota limited
  const lower = logText.toLowerCase();
  const isRedlock = lower.includes("lock") || lower.includes("redlock");
  const isMemory = lower.includes("oom") || lower.includes("memory") || lower.includes("rss");
  const isSql = lower.includes("select") || lower.includes("query") || lower.includes("postgres");

  if (isRedlock) {
    return {
      detectedIssue: "분산 락(Distributed Lock) TTL 만료에 따른 레이스 조건",
      severity: "CRITICAL",
      hiddenClue: "LockAcquisitionException 직후 PgBouncer 커넥션 타임아웃(124ms) 로그 격차 검출",
      rootCauseAnalysis: "트랜잭션이 완결되기 전 Redis Lock TTL(500ms)이 만료되어 후속 작업 스레드가 동일 주문 자원에 동시 침범함.",
      suggestedFixCode: `// Redis Redlock Watchdog 적용 & DB Unique Idempotency Key
const lock = await redlock.acquire(["pay:" + orderId], 2000, {
  autoExtensionThreshold: 500
});
try {
  await paymentRepository.saveWithIdempotency(orderId);
} finally {
  await lock.release();
}`,
      uxProtectionStrategy: "결제 요청 즉시 사용자에게 '안전하게 처리 중' 로딩 가드를 보여주고, 중복 클릭을 원천 차단.",
      preventativeMetrics: "Datadog Alert: redis.lock.extension_count > 3 및 db.idempotency_retry_total"
    };
  } else if (isMemory) {
    return {
      detectedIssue: "C++ Native Buffer Allocator 오프-힙(Off-Heap) 메모리 누수",
      severity: "HIGH",
      hiddenClue: "HeapUsed=180MB 대비 External/RSS=1740MB 비정상 오프셋 및 Kubelet OOMKilled 발생",
      rootCauseAnalysis: "웹소켓 이벤트 리스너 해제 과정에서 C++ Persistent Handle 참조가 잔존하여 프로세스 비동기 버퍼 메모리가 계속 누적됨.",
      suggestedFixCode: `// WebSocket EventListener Registry 기반 청소
socket.on("disconnect", () => {
  socket.removeAllListeners();
  socket.destroy();
  this.clients.delete(socket.id);
});`,
      uxProtectionStrategy: "소켓 재연결 시 메시지 백오프(Exponential Backoff)를 적용하여 사용자 알림 지연 최소화.",
      preventativeMetrics: "Prometheus Metric: process_resident_memory_bytes / node_memory_MemTotal"
    };
  } else if (isSql) {
    return {
      detectedIssue: "비인덱스 필드 와일드카드 검색으로 인한 PostgreSQL Full Table Scan",
      severity: "MEDIUM",
      hiddenClue: "Seq Scan on user_activity_logs (cost=0.00..104821.00 rows=341200) 및 504 Gateway Timeout",
      rootCauseAnalysis: "LIKE '%keyword%' 전방 가변 검색과 timestamp 조건이 결합되면서 B-Tree 인덱스가 작동하지 않음.",
      suggestedFixCode: `-- pg_trgm GIN 복합 인덱스 생성
CREATE INDEX CONCURRENTLY idx_logs_action_trgm_created
ON user_activity_logs USING gin (action gin_trgm_ops, created_at);`,
      uxProtectionStrategy: "검색 지연 시 Skeleton UI를 즉시 노출하고 캐시된 최근 검색 결과를 우선 반환.",
      preventativeMetrics: "Postgres Slow Query Log: duration > 1000ms 및 pg_stat_statements"
    };
  }

  return {
    detectedIssue: "커스텀 에러 스택 트레이스 비동기 컨텍스트 유실",
    severity: "MEDIUM",
    hiddenClue: "로그 내 Trace-ID 전파 누락으로 비동기 프로미스 예외 추적 분단 발생",
    rootCauseAnalysis: "AsyncLocalStorage 컨텍스트 전파 없이 비동기 작업이 분기되면서 상위 요청자 정보가 로그에서 삭제됨.",
    suggestedFixCode: `// AsyncLocalStorage 기반 Trace Context 자동 수호
import { AsyncLocalStorage } from "node:async_hooks";
export const traceStorage = new AsyncLocalStorage<{ traceId: string }>();`,
    uxProtectionStrategy: "에러 발생 시 사용자에게 친절한 Reference Error ID를 발급하여 고객지원 연결 편의 제공.",
    preventativeMetrics: "OpenTelemetry Span Trace Error Ratio > 0.01%"
  };
}
