import { KeywordItem, IncidentPostMortem, PortfolioProject, SkillCategory, CareerItem } from '../types';
import mesRecipeBomImg from '../assets/images/mes_recipe_bom_1783057599970.jpg';
import mesWorkOrderImg from '../assets/images/mes_work_order_1783057612541.jpg';
import mesHaccpTempImg from '../assets/images/mes_haccp_temp_1783057625762.jpg';
import mesKpiDefectsImg from '../assets/images/mes_kpi_defects_1783057638554.jpg';
import mesReceivingLotImg from '../assets/images/mes_receiving_lot_1783057653549.jpg';
import mesPayrollAccountingImg from '../assets/images/mes_payroll_accounting_1783057665917.jpg';
import safewithGisDashboardImg from '../assets/images/safewith_gis_dashboard_1783058058444.jpg';
import safewithSafetyEquipmentImg from '../assets/images/safewith_safety_equipment_1783058073647.jpg';
import safewithSiteListImg from '../assets/images/safewith_site_list_1783058085343.jpg';
import aiagentTimelineImg from '../assets/images/aiagent_timeline.jpg';
import aiagentReportImg from '../assets/images/aiagent_report.jpg';
import learnpathHomeImg from '../assets/images/learnpath_home.jpg';
import learnpathRoadmapImg from '../assets/images/learnpath_roadmap.jpg';
import medirailChatImg from '../assets/images/medirail_chat.jpg';
import medirailSoapImg from '../assets/images/medirail_soap.jpg';
import pennywiseTransactionsImg from '../assets/images/pennywise_transactions.jpg';
import pennywiseInsightsImg from '../assets/images/pennywise_insights.jpg';
import mestoryAiAnalysisImg from '../assets/images/mestory_ai_analysis.jpg';
import mestoryReportImg from '../assets/images/mestory_report.jpg';
import mestoryDowntimeImg from '../assets/images/mestory_downtime.jpg';
import erpilotDashboardImg from '../assets/images/erpilot_dashboard.jpg';
import erpilotAiAssistantImg from '../assets/images/erpilot_ai_assistant.jpg';
import erpilotInventoryImg from '../assets/images/erpilot_inventory.jpg';
import chefearLoginImg from '../assets/images/chefear_login.jpg';
import chefearStartImg from '../assets/images/chefear_start.jpg';
import chefearCookingImg from '../assets/images/chefear_cooking.jpg';
import chefearRegisterImg from '../assets/images/chefear_register.jpg';
import chefearMyRecipesImg from '../assets/images/chefear_my_recipes.jpg';

export const HERO_TAGLINE = {
  mainTitle: "로그 속의 보이지 않는\n단서를 추적하여,",
  subTitle: "사용자의 눈에 보이는 일상을 빈틈없이 수호합니다.",
  role: "2년차 풀스택 AI·웹 개발자 | React, Spring Boot, Node.js",
  bio: "안녕하세요, 홍민하입니다. 프론트엔드, 백엔드, 배포까지 서비스 전체 흐름을 책임지고 구현합니다. 단순한 구현에 그치지 않고 대용량 DB 쿼리 최적화, Race Condition 방지, JWT 세션 자동 유지를 통해 안정적으로 동작하는 고품질 제품을 만듭니다.",
};

export const CAREER_HISTORY: CareerItem[] = [
  {
    id: "insight",
    company: "(주)인사이트",
    role: "웹개발 / 책임",
    period: "재직 경험",
    summary: "세이프위드 현장 안전관리 시스템 개발",
    duties: [
      "현장 운영 / 안전 / 근로자 / 협력사 관리 기능을 통합한 웹 시스템 설계 및 개발",
      "Next.js 및 Node.js 기반 프론트엔드/백엔드 풀스택 개발",
      "역할 기반 데이터 처리 및 권한 관리 로직 구현 (RBAC)",
      "유지보수와 기능 확장을 고려한 모듈형 풀스택 아키텍처 설계"
    ]
  },
  {
    id: "cft",
    company: "씨에프티유한책임회사",
    role: "개발 연구원 / 팀원",
    period: "1년 10개월",
    summary: "MES(제조실행시스템) 개발 및 납품",
    duties: [
      "React 기반 MES 프론트엔드 개발 (5개 제조사 납품 완료)",
      "Node.js / Nest.js REST API 서버 구축 및 MariaDB 연동",
      "기준정보 / 영업 / 생산 / 품질 / 자재 등 통합 관리 모듈 화면 설계 및 구현",
      "대용량 데이터 조회 쿼리 최적화 (응답 시간 95% 개선)"
    ]
  }
];

export interface EducationItem {
  id: string;
  institution: string;
  course: string;
  period: string;
  status: string;
  details: string[];
  skills: string[];
}

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: "est-camp-ai-human",
    institution: "코리아IT아카데미 부산점 (이스트캠프)",
    course: "[이스트캠프] AI 휴먼(멀티모달, TTS, STT, 프롬프트 엔지니어링, RAG) (7회차)",
    period: "2026-06-23 ~ 2026-11-18 (수강 중)",
    status: "수강 중",
    details: [
      "멀티모달 AI 연동 및 TTS / STT 기반 음성·언어 데이터 처리 실습",
      "프롬프트 엔지니어링 및 RAG(검색 증강 생성) 기법을 활용한 지식 인텔리전스 엔진 구축",
      "Gemini AI API & LLM 파이프라인 연동 실시간 데이터 분석 및 AI 에이전트 설계"
    ],
    skills: ["AI Human", "Multimodal", "TTS / STT", "Prompt Engineering", "RAG", "Gemini API"]
  },
  {
    id: "aws-framework-dev",
    institution: "KG아이티뱅크 부산해운대점",
    course: "(디지털컨버전스) AWS 클라우드 활용 프레임워크 융합 개발자 양성",
    period: "2023-03-08 ~ 2023-09-12",
    status: "수강 완료",
    details: [
      "AWS 클라우드 인프라 환경 구축 및 클라우드 배포 파이프라인 실습",
      "Java / Spring Framework & Node.js 웹 프레임워크 융합 개발",
      "관계형 데이터베이스(RDBMS) 아키텍처 설계, SQL 최적화 및 RESTful API 구현",
      "팀 단위 웹 풀스택 프로젝트 개발 및 프레임워크 기반 서비스 구축"
    ],
    skills: ["AWS", "Java", "Spring Framework", "Node.js", "RDBMS", "SQL Optimization", "REST API"]
  }
];

export const KEYWORDS: KeywordItem[] = [
  {
    id: "log-tracker",
    tag: "#로그_추적자",
    englishTag: "Log-Tracker",
    title: "데이터에서 진실을 찾아내는 집요한 분석력",
    description: "에러 스택 트레이스, DB Slow Query Log, 브라우저 DevTools Network 타임라인에서 시스템 내 이상 원인을 정밀 추적합니다.",
    iconName: "Search",
    highlightText: "대용량 DB 쿼리 원인 추적으로 응답 속도 95% 개선 (5.2s → 0.28s)"
  },
  {
    id: "root-cause",
    tag: "#근본_해결",
    englishTag: "Root-Cause",
    title: "임시방편이 아닌 문제의 뿌리를 뽑는 철저함",
    description: "Race Condition으로 인한 LOT 번호 중복 생성, N+1 Full Table Scan 이슈를 구조적으로 분석하여 재발률 0%의 무결점을 실현합니다.",
    iconName: "Target",
    highlightText: "LOT 번호 중복 0건 달성 / 복합 인덱스 & 시퀀스 동시성 가드 구축"
  },
  {
    id: "sentinel",
    tag: "#디지털_파수꾼",
    englishTag: "Sentinel",
    title: "보이지 않는 곳에서 시스템의 안정성을 지키는 책임감",
    description: "제조 현장의 24시간 MES 시스템과 안전 관리 플랫폼의 API 응답성과 세션 연속성을 철저히 지킵니다.",
    iconName: "ShieldCheck",
    highlightText: "5개 제조사 MES 안정 납품 및 401 JWT 토큰 자동 재발급 세션 수호"
  },
  {
    id: "relentless",
    tag: "#집요함",
    englishTag: "Relentless",
    title: "끝내 해답을 찾아내는 포기하지 않는 태도",
    description: "독립적인 API의 순차적인 호출 지연, 동시성 이슈 등 까다로운 보조 병목까지 직접 테스트하고 최적화해냅니다.",
    iconName: "Flame",
    highlightText: "Promise.all 병렬 처리로 대시보드 로딩 77% 단축 (3.5s → 0.8s)"
  },
  {
    id: "ux-guard",
    tag: "#사용자_경험_수호",
    englishTag: "UX-Guard",
    title: "기술적 해결을 넘어 사용자의 불편을 해소하는 목적의식",
    description: "작업 중 토큰 만료로 인한 튕김 현상을 Axios Interceptor로 감지 및 자동 복구하여 사용자 작업을 끊김 없이 수호합니다.",
    iconName: "Users",
    highlightText: "작업 중 강제 로그아웃 문제 완전 제거 및 사용자 작업 연속성 보장"
  }
];

export const INCIDENT_POST_MORTEMS: IncidentPostMortem[] = [
  {
    id: "post-mortem-1",
    title: "MES 생산관리 시스템: 대용량 데이터 조회 최적화",
    category: "Database Optimization",
    symptom: "생산 이력 조회 화면에서 5,000건 이상 데이터 조회 시 응답 시간 5초 이상 소요 및 화면 멈춤 발생",
    logClue: "MariaDB Slow Query Log에서 `Seq Scan on production_history` (cost=0.00..15200.00) 및 반복적인 N+1 SELECT Query 감지",
    rootCause: "인덱스 미설정 컬럼(생산일자, LOT번호) 조건 조회로 인한 Full Table Scan, JOIN 미사용으로 N+1 쿼리 발생, 서버/클라이언트 페이징 미구현",
    solution: "조회 조건 컬럼에 복합 인덱스(prod_date, lot_number) 추가, JOIN 기반 쿼리로 N+1 제거, 서버 페이징 처리 및 프론트 가상 스크롤(Virtual Scroll) 적용",
    impact: "평균 응답 시간 5,200ms → 280ms (약 95% 성능 개선), 대용량 이력 조회 시 쾌적한 UX 제공",
    techStack: ["Node.js", "MariaDB", "SQL Optimization", "React", "Virtual Scroll"],
    metricsBefore: "응답시간 5,200ms / Full Table Scan",
    metricsAfter: "응답시간 280ms / Index Scan (95% 개선)",
    codeSnippet: {
      filename: "production-history-query.ts",
      before: `// [문제 원인]: 인덱스 미설정 컬럼 조건 조회 & N+1 Loop 쿼리
const history = await db.query("SELECT * FROM production_history WHERE prod_date = ?", [date]);
for (let item of history) {
  item.lotDetail = await db.query("SELECT * FROM lot_details WHERE lot_id = ?", [item.lot_id]);
}`,
      after: `// [근본 해결]: 복합 인덱스 (prod_date, lot_number) 추가 & Single JOIN + 서버 페이징
const history = await db.query(\`
  SELECT ph.*, ld.detail_name 
  FROM production_history ph
  LEFT JOIN lot_details ld ON ph.lot_id = ld.lot_id
  WHERE ph.prod_date = ?
  ORDER BY ph.id DESC LIMIT ? OFFSET ?
\`, [date, limit, offset]);`
    }
  },
  {
    id: "post-mortem-2",
    title: "MES 생산관리 시스템: API 병렬 호출로 대시보드 성능 개선",
    category: "Memory & Performance",
    symptom: "대시보드 초기 로딩 시 여러 API를 순차적으로 호출하여 3~4초 동안 하얀 화면 로딩 대기 발생",
    logClue: "Chrome DevTools Network waterfall: `getProductionStatus` (1100ms) → `getKpiData` (900ms) → `getInventoryStatus` (850ms) → `getNotices` (650ms) 순차 대기 누적",
    rootCause: "독립적인 API(생산 현황, KPI, 재고, 공지사항)를 await로 순차 호출하는 구조로 인해 불필요한 네트워크 대기 시간 누적",
    solution: "Promise.all을 활용해 독립 API를 병렬 호출로 전환, 변경 주기가 긴 기준 정보 데이터에 클라이언트 캐싱 적용",
    impact: "대시보드 초기 로딩 3,500ms → 800ms (약 77% 개선), 초기 진입 체감 속도 혁신적 향상",
    techStack: ["React", "JavaScript", "Promise.all", "Client Cache"],
    metricsBefore: "대시보드 로딩 3,500ms",
    metricsAfter: "대시보드 로딩 800ms (77% 개선)",
    codeSnippet: {
      filename: "dashboard-data-fetch.ts",
      before: `// [문제 원인]: 독립적인 API 4개를 await로 순차 호출하여 3.5초 대기 누적
const status = await api.getProductionStatus();
const kpi = await api.getKpiData();
const inventory = await api.getInventoryStatus();
const notice = await api.getNotices();`,
      after: `// [근본 해결]: Promise.all 병렬 호출 + 클라이언트 메모리 캐싱 적용
const [status, kpi, inventory, notice] = await Promise.all([
  api.getProductionStatus(),
  api.getKpiData(),
  api.getInventoryStatus(),
  api.getNotices()
]);`
    }
  },
  {
    id: "post-mortem-3",
    title: "MES 생산관리 시스템: LOT 번호 자동 생성 중복 이슈 해결",
    category: "Distributed System",
    symptom: "여러 사용자가 동시에 LOT 번호를 생성할 때 중복 번호가 발행되어 DB Unique Violation 에러 발생",
    logClue: "MariaDB Error `ER_DUP_ENTRY: Duplicate entry 'LOT-20260702-0042' for key 'PRIMARY'` 발생 로그 포착",
    rootCause: "DB에서 `MAX(lot_no) + 1` 방식으로 번호를 채번하는 로직에서 동시 요청 시 여러 스레드가 같은 기존 MAX 값을 읽어 Race Condition 발생",
    solution: "DB 트랜잭션 격리 수준 조정 및 DB 시퀀스 기반 자동증가 방식으로 채번 로직 전면 개편, UNIQUE INDEX 가드 추가 후 충돌 시 재시도(Retry) 구현",
    impact: "LOT 번호 중복 발생 0건 달성, 피크 타임 다중 사용자 동시 생성 환경에서도 완벽한 동시성 안전 보장",
    techStack: ["Node.js", "MariaDB", "SQL Optimization", "Race Condition Guard"],
    metricsBefore: "동시 생성 시 중복 발행 오류 원인",
    metricsAfter: "중복 발생 0건 (100% 동시성 안정성 보장)",
    codeSnippet: {
      filename: "lot-number-generator.ts",
      before: `// [문제 원인]: MAX(lot_no) + 1 방식 -> 동시 요청 시 동일 MAX 값 읽음
const lastLot = await db.query("SELECT MAX(lot_no) as maxNo FROM lot_table");
const newLotNo = parseAndIncrement(lastLot.maxNo);
await db.query("INSERT INTO lot_table (lot_no) VALUES (?)", [newLotNo]);`,
      after: `// [근본 해결]: DB Sequence / DB Atomic Increment & UNIQUE INDEX + Retry Loop
try {
  const [result] = await db.query("INSERT INTO lot_table (lot_no) VALUES (GENERATE_LOT_NO())");
} catch (err) {
  if (err.code === 'ER_DUP_ENTRY') return await retryGenerateLot(3);
}`
    }
  },
  {
    id: "post-mortem-4",
    title: "현장 안전관리 시스템: JWT 토큰 만료 후 API 요청 처리 및 자동 세션 연장",
    category: "Security & Auth",
    symptom: "액세스 토큰 만료 시 사용자가 데이터 입력 중 갑자기 로그인 화면으로 튕기며 작업 내용이 손실되는 UX 불편 발생",
    logClue: "Axios API response error `401 Unauthorized`: `jwt expired` 수신 시 화면 리다이렉트 발생",
    rootCause: "토큰 만료 시 재발급 처리 없이 401 에러 감지 즉시 강제 로그아웃시키는 단순 인증 아키텍처",
    solution: "Axios Interceptor에서 401 응답 감지 시 Refresh Token으로 Access Token을 자동 재발급받은 후, 차단되었던 원본 요청(originalRequest)을 즉시 재시도하는 투명한 연장 로직 구현",
    impact: "토큰 만료로 인한 불필요한 로그아웃 100% 제거, 사용자의 안전 점검 일지 입력 중단 없이 세션 유지",
    techStack: ["React", "Axios", "JWT", "Node.js", "Express.js"],
    metricsBefore: "토큰 만료 시 작업 내용 손실 및 강제 로그아웃",
    metricsAfter: "401 발생 시 자동 재발급 및 세션 보존 (손실 0건)",
    codeSnippet: {
      filename: "axios-auth-interceptor.ts",
      before: `// [문제 원인]: 401 에러 발생 시 단순 에러 발생 및 로그인 화면 리다이렉트
axios.interceptors.response.use(res => res, error => {
  if (error.response?.status === 401) window.location.href = "/login";
  return Promise.reject(error);
});`,
      after: `// [근본 해결]: 401 감지 시 Refresh Token으로 자동 재발급 후 originalRequest 재시도
axios.interceptors.response.use(res => res, async error => {
  const originalRequest = error.config;
  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const { accessToken } = await authService.refreshToken();
    originalRequest.headers.Authorization = \`Bearer \${accessToken}\`;
    return axios(originalRequest); // 원본 요청 투명 재시도
  }
  return Promise.reject(error);
});`
    }
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-mes",
    category: "work",
    title: "MES 생산관리 시스템 (Manufacturing Execution System)",
    subtitle: "제조업 현장의 생산, 자재, 품질, 영업 데이터를 통합 관리하는 엔터프라이즈 MES 시스템",
    role: "풀스택 웹 개발자 (React & Node.js / Nest.js)",
    period: "5개 제조사 납품 완료", // 씨에프티유한책임회사
    experience: "실무 경험",
    summary: "5개 제조 현장에 납품된 MES 시스템으로, 기준정보, 영업, 생산, 품질, 자재 모듈 전체의 화면 설계, React 대시보드, 달력 기반 일정 등록, REST API 서버 연동 및 DB 쿼리 최적화를 담당했습니다.",
    architectureHighlights: [
      "기준정보 / 영업 / 생산 / 품질 / 자재 등 5대 핵심 관리 모듈 화면 완벽 구현",
      "React 기반 인터랙티브 대시보드 및 달력 기반 일정/생산 현황 모니터링",
      "Node.js / Nest.js REST API 서버 구축 및 MariaDB / MySQL 스키마 연동",
      "대용량 생산 이력 조회 SQL 쿼리 최적화로 응답 속도 95% 개선 (5.2초 → 0.28초)",
      "Promise.all 병렬 API 처리로 초기 대시보드 로딩 속도 77% 개선 (3.5초 → 0.8초)"
    ],
    logObservabilityUsed: ["MariaDB Slow Query Log", "Chrome DevTools Waterfall", "Express Custom Logger"],
    keyOutcome: "5개 제조사 현장 성공 납품 완료 / 쿼리 응답속도 95% 개선 / LOT 동시성 중복 0건",
    techStack: ["Full Stack", "React", "Node.js", "Express.js", "Nest.js", "MariaDB", "MySQL", "Microservice", "SQL Optimization"],
    githubUrl: "https://github.com/minhahamin",
    featured: true,
    screenshots: [
      {
        url: mesRecipeBomImg,
        title: "기준정보 > 레시피정보 & 공정 BOM 관리",
        description: "제품 목록, 제품별 해동/자숙/포장 공정 단계 설정 및 공정 BOM 아이템(수량/작업) 통합 관리 화면",
        tag: "기준정보 / BOM"
      },
      {
        url: mesWorkOrderImg,
        title: "생산관리 > 생산지시 & 계획 현황",
        description: "기간별 생산계획일자 및 품목별 계획/지시수량 모니터링, 작업자 할당 및 공정 진행상태 관리",
        tag: "생산지시 관리"
      },
      {
        url: mesHaccpTempImg,
        title: "HACCP 관리 > 냉장·냉동창고 온도기록일지",
        description: "1층/2층/3층 원료·완제품·반제품 창고별 오전/오후 실시간 온도 점검 및 이상 이탈 모니터링",
        tag: "HACCP / 온도일지"
      },
      {
        url: mesKpiDefectsImg,
        title: "KPI 관리 > 완제품 불량률 분석 차트",
        description: "일자별 총 생산량 대비 불량수량 통계 분석, 목표 불량률(3%) 비교 임계값 차트 및 지표 관리",
        tag: "KPI / 불량률 분석"
      },
      {
        url: mesReceivingLotImg,
        title: "영업/자재 관리 > 입고관리 & LOT 번호 발급",
        description: "매입처별 입고 차수, 발주/입고/미입고 수량 관리, 바코드 LOT 번호(LOT20251124) 자동 부여 시스템",
        tag: "입고 & LOT 관리"
      },
      {
        url: mesPayrollAccountingImg,
        title: "회계 & 노무비 관리 > 거래처 원장 & 노무비 출력",
        description: "월별 매입/매출 거래처 원장, 세금계산서 과세/영세 발행 및 현장별 노무비 일지 PDF 인쇄 모듈",
        tag: "회계 & 노무비"
      }
    ]
  },
  {
    id: "project-safewith",
    category: "work",
    title: "세이프위드 현장 안전관리 시스템 (SafeWith)",
    subtitle: "현장 운영, 안전 점검, 근로자 및 협력사 관리 기능을 하나로 통합한 엔터프라이즈 안전 플랫폼",
    role: "웹개발 / 책임 (Next.js & Node.js)",
    period: "대표 프로젝트",
    experience: "실무 경험",
    summary: "스마트 건설 현장의 위성 GIS 관제 대시보드부터 개인 보호구 지급 현황, 근로자 출역 관리 및 현장 등록/위험성 평가까지 통합 관리하는 시스템입니다. Next.js / React 프론트엔드와 Node.js 백엔드 REST API를 풀스택으로 설계하고 개발하였습니다.",
    architectureHighlights: [
      "Next.js & Node.js REST API 아키텍처 및 React SPA 전체 UI/UX 구축",
      "위성 지도(GIS) 기반 위험구역(고소/화재/중장비 등) 마커 및 실시간 출역 현황 대시보드 구현",
      "PostgreSQL 스키마 설계 및 Sequelize / ORM 엔티티 연관관계 설정",
      "역할 기반 접근 제어(RBAC) 권한 관리 로직 구현으로 현장별/역할별 데이터 접근 보호",
      "Axios Interceptors 기반 401 감지 및 Refresh Token 자동 재발급으로 점검 일지 작성 중 세션 보존",
      "유지보수와 기능 확장을 고려한 모듈형 백엔드/프론트엔드 풀스택 아키텍처 적용"
    ],
    logObservabilityUsed: ["Node.js Server Log", "Axios Interceptor Log", "JWT Token Auth Guard"],
    keyOutcome: "현장 통합 안전/근로자 관제 시스템 성공 구축 / 세션 단절 0건 안심 UX 수호",
    techStack: ["Full Stack", "Next.js", "Node.js", "React", "Express.js", "PostgreSQL", "REST API", "JWT"],
    githubUrl: "https://github.com/minhahamin",
    featured: true,
    screenshots: [
      {
        url: safewithGisDashboardImg,
        title: "세이프위드 메인 GIS 관제 대시보드 UI",
        description: "고소작업/화재/감전 등 위험구역 위성 지도 지도 마커, 실시간 일정&공지, 현장 근로자 출역 현황 및 금주 위험성 평가 모듈",
        tag: "GIS 관제 대시보드"
      },
      {
        url: safewithSafetyEquipmentImg,
        title: "현장 안전관리 > 개인 안전 보호구 지급 현황",
        description: "안전모, 안전화, 신호수조끼, 안전벨트 등 개인 보호구 항목별 전월누계, 금월현황, 총누계 통합 관리 데이터 테이블",
        tag: "안전보호구 지급관리"
      },
      {
        url: safewithSiteListImg,
        title: "현장 등록 & 관리자 설정 > 건설 현장 목록 및 출역 기준 관리",
        description: "전체 건설 현장별 공사기간, 혈압/음주/교육 기준 연동 및 현장 추가/수정/삭제 권한 관리 모듈",
        tag: "현장 등록 & 출역 관리"
      }
    ]
  },
  {
    id: "project-mestory",
    category: "team",
    title: "🏭 MESTORY (설비 다운타임 원인 분석 리포트 자동 생성 서비스)",
    subtitle: "정지 로그·에러코드 사전·정비이력을 근거로 원인·심각도·근거·권장 조치를 담은 리포트를 자동 생성하는 서비스 — 최종 확정과 조치는 항상 사람이 하고, AI는 판단 근거만 제공",
    role: "백엔드 (출력계약 리드) · 3인 팀 프로젝트",
    period: "팀 프로젝트",
    summary: "설비가 멈출 때마다 정지 로그를 수작업으로 뒤져 자료를 만들던 MES 담당자를 위한 서비스입니다. LangChain 에이전트가 MCP 도구로 정지 로그·에러코드·정비이력을 정확한 키로 조회하고, 도메인 판단 기준(SKILL.md)을 근거로 JSON 리포트를 생성합니다. 텍스트·설비 화면 이미지·음성(STT/TTS) 입력을 지원하며, 대시보드·다운타임 분석·AI 원인분석 채팅·리포트·설비 현황·알림 6개 화면이 모두 실제 API에 연동되어 있습니다.",
    architectureHighlights: [
      "FastAPI 백엔드의 LLM 호출 단일 창구(services/llm.py): Pydantic 스키마 검증 → 실패 시 프롬프트 보강 → 축소 스키마의 3단계 재시도, 모두 실패하면 빈 리포트로 감추지 않고 503 반환(출력계약 담당)",
      "MCP 서버(FastMCP) 도구 6개(정지 로그·에러코드·정비이력·설비·기종별 빈도·외부 웹검색)를 exact-key 조회로 제공, 벡터DB/RAG 없이 Episodic Memory 방식 적용 — 외부 클라이언트는 토큰 보호된 /mcp(Streamable HTTP)로 접속",
      "질문 유형·이미지 유무별 모델 라우팅(원인·심각도는 gpt-5-nano, 조치·집계·이미지는 gpt-5-mini)으로 해당 유형 비용 -79%, 전체 -11%, 품질 유지 / 장애·타임아웃 시 폴백 모델로 자동 페일오버",
      "평가 체계: 텍스트 69건·멀티모달 50건 평가셋, LLM judge로 판정 일치·정직성 측정(판정 일치 0.860 → 0.903, 치명 문항 3.7건 → 1.0건), 출시 게이트 미달 항목(지연·치명 1건)도 숨기지 않고 HOLD로 보고",
      "Langfuse로 모든 요청의 입력·출력·토큰·지연 트레이스를 기록하고, SKILL.md를 Langfuse Prompt로 관리해 재배포 없이 교체·롤백",
      "JWT 인증, 리포트 작성자·공유 대상만 열람하는 접근 제어, 사용자가 준 조건(설비·라인·기간)은 LLM 출력을 믿지 않고 코드가 덮어쓰는 방어 로직",
      "파인튜닝한 Whisper(STT)·MMS-TTS(TTS) 기반 음성 서비스를 별도 FastAPI로 분리하고, Next.js 14 프론트엔드·백엔드·Postgres를 Railway에 서비스별 배포 (docker compose 한 줄 로컬 실행)"
    ],
    logObservabilityUsed: ["Langfuse 트레이스(입력/출력/토큰/지연)", "/health 버전 정보(git_commit · prompt_version · skill_sha)", "Railway Deploy/App Log"],
    keyOutcome: "정지 로그 → MCP 조회 → 근거 기반 리포트 생성까지 이어지는 다운타임 분석 서비스 구현, 계약 준수율 1.000 달성 및 Railway 배포 완료",
    techStack: ["Full Stack", "Python", "FastAPI", "LangChain", "MCP", "Pydantic", "Langfuse", "Next.js", "React", "PostgreSQL", "Railway"],
    githubUrl: "https://github.com/aihuman-7th/proj2-2",
    demoUrl: "https://mestory-app.up.railway.app/",
    featured: true,
    screenshots: [
      {
        url: mestoryAiAnalysisImg,
        title: "AI 원인 분석 – 대화형 분석 & 분석 인사이트",
        description: "설비 다운타임 원인을 대화로 묻고, 분석된 원인 건수·현장 확인 필요 여부와 원인별 심각도(M-204 주축 기어박스 파손, 중대)를 우측 패널에서 함께 확인하는 화면",
        tag: "AI 원인분석"
      },
      {
        url: mestoryReportImg,
        title: "원인 분석 리포트",
        description: "심각도 배너, 총 다운타임·발생 건수, 주요 다운타임 TOP 3, 원인별 분석을 한 화면에 정리하고 메일 발송·엑셀 다운로드·PDF 저장·요약 듣기를 지원하는 리포트",
        tag: "분석 리포트"
      },
      {
        url: mestoryDowntimeImg,
        title: "다운타임 분석 – 원인별 비중 & 상세",
        description: "기간·라인·설비·상태 필터로 다운타임을 조회하고, 원인별 비중과 총 다운타임·최대 영향 설비 인사이트, 원인별 발생 건수·총 시간·최근 발생 상세 표를 제공하는 화면",
        tag: "다운타임 분석"
      }
    ]
  },
  {
    id: "project-chefear",
    category: "team",
    title: "🎙️ ChefEar (셰프이어 - 음성으로 레시피를 안내하는 AI 요리 에이전트)",
    subtitle: "손에 물기와 재료가 묻어 화면을 볼 수 없는 순간에도, 음성만으로 레시피를 한 단계씩 안내하는 AI 에이전트 — Whisper STT·Qwen3-TTS 도메인 파인튜닝, 로컬 LLM(EXAONE), Streamlit",
    role: "TTS 파인튜닝 · UI · 계정 (3인 팀 프로젝트)",
    period: "팀 프로젝트",
    summary: "AI Human 7기 1차 팀 프로젝트(2026-08-14 ~ 09-08, 3인 팀)로 만든 음성 레시피 에이전트입니다. 사용자는 정해진 명령어가 아니라 자유발화로 요리를 요청하고 다음/다시/이전 단계를 말로 진행합니다. 저는 요리 도메인 TTS(Qwen3-TTS) LoRA 파인튜닝과 체크포인트 검증·평가, Streamlit 화면 구현, 로그인·구글 OAuth·마이레시피 계정 기능, 소유자 격리 보안 결함 수정을 담당했습니다. (STT 파인튜닝·오케스트레이션·배포는 팀원 담당)",
    architectureHighlights: [
      "Qwen3-TTS-12Hz-1.7B를 KSS 데이터셋(12,854문장)으로 LoRA 파인튜닝(Colab A100)하고 체크포인트를 검증 — epoch-24에서 TTS→STT 재인식 CER이 평균 1.37 → 14.26으로 급등하고 반복 발화가 늘어 과적합으로 판단, epoch-13을 채택해 5문장 재인식 CER 0.00 달성",
      "TTS 파인튜닝 방식 비교 실험: Base / Full FT / LoRA / QLoRA 비교에서 Full FT는 MOS 2.10으로 회귀, LoRA가 블라인드 MOS 4.67로 1위(13명·909건 평가, 지인 편의표본이라 통계적 대표성은 없음)",
      "TTS CPU 추론 속도를 측정(문장당 약 26초)해 CPU 배포 불가를 판단, GPU 상시 배포로 방향을 잡는 근거 제공 / max_new_tokens 재조정·시드 고정으로 합성 결과 재현성 확보",
      "기획 화면 목업 기반 UI 프로토타입(HTML 11화면 + Streamlit)을 만들고 화면별 컴포넌트로 분리 — 로그인·시작·조리 단계(진행 점·파형)·요리 완료·레시피 등록·마이레시피 화면 구현",
      "로컬 회원가입/로그인 + 구글 OAuth, 로그인 유지, 마이레시피(목록/수정/삭제) 구현 — 레시피 등록은 로그인 필수, 등록한 레시피는 등록자 본인에게만 노출되도록 전환",
      "소유자 격리 보안 결함 수정: 파이프라인의 owner_id 누락, 비로그인 상태 노출, IDOR(타인 레시피 접근), 저장 가드 보완",
      "Supabase recipes / recipe_steps 테이블 스키마 설계와 레시피 데이터 적재 스크립트 작성"
    ],
    logObservabilityUsed: [],
    keyOutcome: "LoRA TTS 블라인드 MOS 4.67(1위)·재인식 CER 0.00(5문장) 달성, 로그인·구글 OAuth·마이레시피와 소유자 격리 보안 수정까지 구현",
    techStack: ["Python", "Streamlit", "Qwen3-TTS", "LoRA Fine-tuning", "Supabase", "Google OAuth", "TTS / STT"],
    githubUrl: "https://github.com/chefear-team/ChefEar_ai",
    demoUrl: "https://chefear-landingpage.vercel.app",
    featured: true,
    screenshots: [
      {
        url: chefearStartImg,
        title: "시작 화면 – 말로 요리 요청",
        description: "숫자 메뉴 없이 \"된장찌개 어떻게 만들어?\"처럼 하고 싶은 말을 그대로 말하면 시작하는 음성 중심 첫 화면 (마이크 연결 안내 포함)",
        tag: "음성 시작",
        focus: "center"
      },
      {
        url: chefearCookingImg,
        title: "조리 단계 안내 (1/7 단계)",
        description: "현재 단계 카드와 진행 점, 음성 파형 표시, 오늘의 재료 칩을 한 화면에 보여주며 이전/다음 버튼과 음성 명령으로 단계를 이동하는 조리 화면",
        tag: "조리 안내"
      },
      {
        url: chefearLoginImg,
        title: "로그인 – 구글 OAuth & 아이디 로그인",
        description: "구글로 로그인 또는 아이디/비밀번호 로그인, 회원가입, 비로그인으로 둘러보기를 제공하는 계정 화면",
        tag: "계정"
      },
      {
        url: chefearRegisterImg,
        title: "레시피 등록 (2/3 단계 · 재료)",
        description: "등록할 요리의 재료를 칩으로 확인하고 쉼표로 여러 개를 한 번에 추가할 수 있는 등록 화면 (등록은 로그인 필수)",
        tag: "레시피 등록"
      },
      {
        url: chefearMyRecipesImg,
        title: "마이레시피 – 내가 등록한 레시피 관리",
        description: "로그인한 사용자가 등록한 레시피 목록과 수정·삭제, 로그아웃을 제공하는 화면 (등록한 레시피는 등록자 본인에게만 노출)",
        tag: "마이레시피"
      }
    ]
  },
  {
    id: "project-medirail",
    category: "personal",
    title: "🏥 MediRail (근거 기반 의료 AI 에이전트)",
    subtitle: "진단·처방은 하지 않고 모든 답변에 출처를 붙이며 최종 판단은 의료진에게 위임 — 안전을 프롬프트가 아니라 코드 레벨의 가드레일(Rail)로 보장하는 의료 AI 에이전트",
    role: "풀스택 개발자 (개인 프로젝트 / AI 에이전트)",
    period: "개인 프로젝트",
    summary: "문진 요약과 SOAP 초안 작성, 예약 안내, PubMed 문헌 검색, 식약처 DUR 약물 상호작용 조회를 돕는 의료 AI 에이전트입니다. 환자·간호사·의사·원무 4개 역할별로 도구와 데이터 접근 범위가 달라지며, 응급 감지·출력 검증·감사 로그를 코드로 강제합니다. 모든 데이터는 합성 데이터이며 포트폴리오·학습용입니다.",
    architectureHighlights: [
      "다층 방어 설계: 역할별 도구 노출 제한 → 실행 시 재검사 → 서비스 계층 권한 검사 → 감사 로그. 환자가 타인의 문진 기록을 요구해도 세 겹의 코드 검사가 독립적으로 차단",
      "응급 가드레일: LLM 호출 전에 규칙 기반으로 응급 문장을 감지해 LLM 없이 즉시 119(자해 표현은 109 포함)를 안내, 재현율 우선 설계",
      "출력 검증과 자가 교정: 도구 결과에 없는 출처·존재하지 않는 PMID·확정 진단/처방 표현·약물 병용 '안전' 단정을 사후 차단하고, 위반 사유를 알려 1회 재작성시킨 뒤 반복되면 폐기하거나 안전 문구로 대체",
      "MCP 서버 2종(PubMed, 식약처 DUR)을 독립 프로세스로 분리해 Claude Code/Desktop 등 다른 MCP 클라이언트에서도 사용 가능, 브리지는 지연 기동·프로세스 사망 시 자동 재기동",
      "DUR 성분정보(1,836행뿐임을 발견)를 전체 로컬 인덱스로 재설계하고, 유사 표기 성분명은 자동 확정하지 않고 후보를 제시(needs_confirmation), '목록에 없음 ≠ 안전' 고지",
      "최소 권한과 human-in-the-loop: SOAP 승인 도구는 어떤 역할의 LLM에도 부여하지 않고 의사가 REST로만 승인, 시스템 관리자의 임상 데이터 열람은 사유 기록(break-glass) 필수, 감사 로그에는 원문 없이 도구명·이벤트·길이만 기록",
      "평가 하네스: 45문항·7개 카테고리 규칙 기반 채점(LLM 판사 없음), 4개 모델 비교에서 qwen3.7-flash가 정확도 98%·근거 인용 100%·환각률 2%(45문항 약 $0.0009), 모델 간 차이는 1~2문항 수준이라 유의하지 않음을 명시",
      "pytest 337개(SQLite·PostgreSQL 양쪽) + Playwright E2E 39개(가짜 LLM, 변이 테스트로 회귀 검출 확인), GitHub Actions 5개 병렬 작업 CI, FastAPI + React 19 + Railway 배포"
    ],
    logObservabilityUsed: ["감사 로그(도구명·이벤트·길이)", "요청 제한(사용자/IP/일일 상한)", "Railway Deploy/App Log"],
    keyOutcome: "코드 레벨 가드레일 기반 의료 AI 에이전트 구현 — 평가 정확도 98%·근거 인용 100%, pytest 337 + E2E 39 CI 통과 및 Railway 배포 완료",
    techStack: ["Full Stack", "Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "MCP", "Function Calling", "RBAC", "Playwright", "Docker", "Railway"],
    githubUrl: "https://github.com/minhahamin/mediRail",
    demoUrl: "https://medirail-web-production.up.railway.app",
    featured: true,
    screenshots: [
      {
        url: medirailChatImg,
        title: "상담 – 식약처 DUR 근거 인용 답변",
        description: "의사 계정에서 졸피뎀의 연령별 주의사항을 질문하면 식약처 DUR 도구 결과에만 근거해 답하고, 문장마다 출처([D1])를 붙이며 '최종 판단은 의사와 상담' 고지를 강제하는 화면 (응급 감지·출처 검증·권한 검사 상시 활성)",
        tag: "근거 기반 상담"
      },
      {
        url: medirailSoapImg,
        title: "SOAP 노트 – 의사만 승인 (human-in-the-loop)",
        description: "AI는 S·O·A·P 초안만 만들 수 있고, 승인 도구는 AI에 존재하지 않아 의사가 이 화면에서만 '검토 후 승인'할 수 있도록 분리한 화면 (초안/승인됨 필터 제공)",
        tag: "SOAP 초안 · 승인"
      }
    ]
  },
  {
    id: "project-ai-agent-company",
    category: "personal",
    title: "🏢 AI Agent Company (멀티에이전트 협업 플랫폼)",
    subtitle: "목표 한 줄을 입력하면 CEO · Planner · Developer · Reviewer · Reporter 5개 AI 에이전트가 회의를 거쳐 산출물과 최종 보고서를 만들어내는 멀티에이전트 협업 플랫폼",
    role: "풀스택 개발자 (개인 프로젝트 / AI 에이전트)",
    period: "개인 프로젝트",
    summary: "예를 들어 '신입 온보딩 가이드 만들기'를 입력하면 CEO가 일을 나누고, Planner가 계획을 세우고, Developer가 초안을 쓰고, Reviewer가 검토하고(미흡하면 재작업 지시), Reporter가 최종 보고서를 정리합니다. 전체 과정은 LangGraph 상태 그래프로 오케스트레이션되며 Next.js 대시보드에서 단계별 출력을 확인할 수 있습니다.",
    architectureHighlights: [
      "LangGraph StateGraph로 CEO → Planner → Developer → Reviewer → Reporter 흐름을 설계하고, Reviewer가 NEEDS_FIX를 내리면 Developer로 회귀하는 조건부 분기 및 재작업 루프 구현(최대 재시도 횟수로 무한 루프 방지)",
      "CompanyState(TypedDict)에 각 노드 출력·승인 여부·재작업 횟수·이벤트 로그를 담아 노드 간 컨텍스트 전달 및 타임라인 UI의 데이터 소스로 활용",
      "llm.py 추상화: LLM_MODE=auto면 키 존재 여부에 따라 OpenRouter → OpenAI → MOCK 순으로 자동 선택, 노드 코드는 chat() 하나만 호출해 환경 변수만으로 모델 교체 가능",
      "에이전트 공용 도구(web_search · run_python · save_text) 분리 — Tavily 키가 있으면 실검색, 없으면 MOCK",
      "DB 이중화: DATABASE_URL이 있으면 Postgres(SQLAlchemy 2.0)에 tasks 영속화, 없으면 인메모리로 폴백하여 로컬/배포 겸용",
      "Next.js 14 대시보드에서 에이전트별 출력을 탭으로 탐색하고 최종 보고서 하이라이트, /api/health로 백엔드 상태 및 LLM 모드 확인",
      "Railway에 Backend(FastAPI) · Frontend(Next.js) · Postgres 3개 서비스를 분리 배포하고, NEXT_PUBLIC_* 빌드 타임 주입 특성에 맞춰 Backend → 도메인 확보 → Frontend 순으로 배포 순서 설계"
    ],
    logObservabilityUsed: ["에이전트별 실행 이벤트 로그(events)", "/api/health 헬스체크", "Railway Deploy/App Log"],
    keyOutcome: "5개 역할 에이전트의 재작업 루프 포함 협업 파이프라인 구현, 실모델(OpenRouter) + Postgres 연동 상태로 Railway 배포 완료",
    techStack: ["Full Stack", "Python", "FastAPI", "LangGraph", "Next.js", "TypeScript", "PostgreSQL", "Railway"],
    githubUrl: "https://github.com/minhahamin/ai-agent-company",
    demoUrl: "https://ai-agent-company-production.up.railway.app/",
    featured: true,
    screenshots: [
      {
        url: aiagentTimelineImg,
        title: "목표 입력 & 에이전트 협업 타임라인",
        description: "목표 한 줄을 입력하면 CEO → Planner → Developer → Reviewer → Reporter 순서로 단계별 출력이 타임라인에 쌓이고, Reviewer가 NEEDS_FIX를 내리면 재작업하는 흐름을 확인하는 메인 화면",
        tag: "협업 타임라인"
      },
      {
        url: aiagentReportImg,
        title: "협업 결과 & 최종 보고서",
        description: "에이전트별 출력을 탭으로 탐색하고, Reporter가 정리한 최종 보고서를 확인하는 결과 화면 (보고서 PDF / 산출물 zip 다운로드 제공)",
        tag: "최종 보고서"
      },
    ]
  },
  {
    id: "project-pennywise",
    category: "personal",
    title: "💰 PennyWise (페니와이즈 - 개인 재무 관리 AI 에이전트)",
    subtitle: "은행/카드 거래내역(CSV)이나 영수증 사진을 올리면 LLM이 지출을 분류·분석해 예산 초과 알림과 데이터 기반 절약 팁을 제공하는 풀스택 서비스",
    role: "풀스택 개발자 (개인 프로젝트 / AI 에이전트)",
    period: "개인 프로젝트",
    summary: "카드사마다 다른 CSV 헤더를 자동 매핑하고 영수증은 비전 LLM으로 구조화 추출해 거래로 저장합니다. LangGraph 파이프라인이 입력 정규화 → 카테고리 분류 → 패턴 분석 → 예산 체크 → 절약 팁 생성 → 리포트 종합을 수행하며, React 대시보드에서 월 리포트·예산 진행률·인사이트를 확인할 수 있습니다.",
    architectureHighlights: [
      "LangGraph 워크플로우 2종(업로드 파이프라인 / 월 리포트 파이프라인): normalize → classify → trend → budget → tips → report",
      "비용 최적화: 가맹점 키워드 규칙 기반 분류를 우선 적용하고 실패 시에만 LLM 호출, MerchantCache + 퍼지매칭으로 재분류 방지, CSV는 BATCH_SIZE 단위로 묶어 한 프롬프트에 배치 분류",
      "CSV 업로드 시 컬럼 자동 매핑(모호하면 LLM 헤더 추론 폴백)과 중복 거래 감지, 영수증 이미지는 비전 LLM으로 가맹점·날짜·금액을 구조화 추출 + 중복 체크",
      "사용자가 카테고리를 수정하면 Feedback을 축적하고 MerchantCache를 갱신해 이후 분류에 반영, confidence가 낮은 거래는 '확인 필요'로 표시",
      "OPENAI_API_KEY가 없어도 규칙 기반 휴리스틱 모드로 동작 — 라벨 테스트셋 100건 기준 분류 정확도 100%(주요 가맹점), 합성 영수증 추출 테스트 및 핵심 로직 테스트 스위트 통과",
      "React(Vite) + TypeScript + Recharts 대시보드(Dashboard / Transactions / Upload / Insights), 카테고리별 예산 설정 및 초과·임박 알림",
      "Railway 배포: 백엔드/프런트 분리, SQLite를 5GB 볼륨(/data)에 저장해 재배포에도 데이터 유지, 로컬은 Docker Compose 지원"
    ],
    logObservabilityUsed: ["업로드 내역(저장/중복 건수·처리 상태)", "/health 헬스체크", "Railway Deploy/App Log"],
    keyOutcome: "CSV·영수증 → LLM 분류 → 예산 알림·월 리포트·절약 팁으로 이어지는 개인 재무 에이전트 구현 및 Railway 배포 완료",
    techStack: ["Full Stack", "Python", "FastAPI", "LangGraph", "LangChain", "Pandas", "SQLite", "React", "TypeScript", "Recharts", "Railway"],
    githubUrl: "https://github.com/minhahamin/PennyWise",
    demoUrl: "https://pennywise-production-9cf8.up.railway.app/",
    featured: true,
    screenshots: [
      {
        url: pennywiseTransactionsImg,
        title: "거래 내역 & 자동 카테고리 분류",
        description: "업로드한 CSV 거래내역이 가맹점별로 식비·카페·교통·쇼핑·고정비 등으로 자동 분류되어 나열되고, 가맹점 검색·카테고리 필터·수동 수정이 가능한 화면",
        tag: "거래 내역"
      },
      {
        url: pennywiseInsightsImg,
        title: "월간 인사이트 – 예산 초과 알림 & 절약 팁",
        description: "월 총 지출 요약, 카테고리별 예산 초과 알림(색상으로 위험도 구분), 지난달 대비 증감과 계산 근거를 함께 제시하는 데이터 기반 절약 팁 화면",
        tag: "인사이트"
      },
    ]
  },
  {
    id: "project-erpilot",
    category: "personal",
    title: "🏭 ERPilot (SmartERP - ERP + AI 업무 도우미 B2B SaaS)",
    subtitle: "직원·급여·재고·생산·거래처를 관리하는 ERP에 자연어로 데이터를 조회하고 사내 문서를 검색하는 AI 챗봇(Copilot)을 결합한 B2B SaaS 플랫폼",
    role: "풀스택 개발자 (개인 프로젝트 / NestJS & React)",
    period: "개인 프로젝트",
    summary: "단순 CRUD가 아니라 중소기업 도입을 가정해 RBAC, 멀티테넌시, 동시성 처리, AI 권한 격리까지 고려한 실무형 ERP입니다. Gemini Function Calling 기반 AI 어시스턴트가 '재고 100개 이하 품목', '이번 달 매출 요약' 같은 질문에 실데이터로 답하고, '연차 신청해줘' 같은 요청은 초안만 만들어 사용자가 확인해야 반영되도록 설계했습니다.",
    architectureHighlights: [
      "AI 어시스턴트: Gemini 2.5 Flash Function Calling 오케스트레이션(턴당 최대 4회 도구 호출, 최근 10턴 유지), 재고·영업·생산·인사·공지·사내문서 등 조회 도구 11종",
      "AI 권한 이중 방어: 노출 단계에서 READ 권한이 없는 도구는 목록에서 제외하고, 실행 단계에서 모든 쿼리에 companyId 스코프를 걸고 EMPLOYEE는 조회 대상을 본인으로 강제 — LLM이 인자를 잘못 채워도 서버가 실제 권한으로 덮어씀",
      "제안 → 사람 확인 → 확정 패턴: AI는 연차·공지·생산 상태 변경의 초안(Draft)만 생성하고 확인 카드에서 사용자가 눌러야 반영(10분 후 만료), 확정 시 기존 도메인 서비스의 검증·트랜잭션 경로를 그대로 사용",
      "FAQ 자동화(Human-in-the-loop): 반복 질문을 집계해 임계치 이상만 Gemini로 클러스터링하고 서버가 재검증한 뒤, 관리자가 게시/반려하는 검수 큐를 거쳐 노출",
      "SaaS 멀티테넌시: Company 단위 데이터 격리와 Role-Permission 매핑으로 회사별 권한 체계 지원, JWT(Access/Refresh) 인증 및 Swagger API 문서화",
      "ERP 핵심 화면: 대시보드, 직원·부서·급여·근태·RBAC 권한, 거래처·제품·재고·입출고·생산·수주, 문서 관리(업로드 + AI 요약), 공지·FAQ, 통계 분석, 캘린더 일정 관리",
      "설계와 구현의 트레이드오프를 문서화: 초기 설계(OpenAI + LangChain, pgvector, Redis/BullMQ, AWS)를 포트폴리오 규모에 맞춰 Gemini 직접 호출·키워드 검색·동기 처리·Railway 배포로 의도적 단순화(pgvector는 스키마만 준비)",
      "Docker 멀티스테이지 빌드로 Frontend(Nginx)/Backend(NestJS)를 Railway에 개별 배포"
    ],
    logObservabilityUsed: ["AI Function Calling 도구 호출 기록", "Audit Log 데코레이터", "Swagger(OpenAPI) 문서", "Railway Deploy/App Log"],
    keyOutcome: "ERP + AI 챗봇 B2B SaaS 구현 — AI 계층까지 일관된 RBAC와 사람 확인 기반 액션 제안 구조로 Railway 배포 완료",
    techStack: ["Full Stack", "React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Gemini API", "Function Calling", "RBAC", "Docker", "Railway"],
    githubUrl: "https://github.com/minhahamin/SmartERP",
    demoUrl: "https://smart-erp-fe-production.up.railway.app",
    featured: true,
    screenshots: [
      {
        url: erpilotDashboardImg,
        title: "대시보드 – 매출 추이 & 재고 경고",
        description: "이번 달 매출·재직 인원·재고 경고·생산 지연 KPI, 최근 6개월 매출 추이 차트, 안전재고 미달 품목 목록과 최근 공지사항을 한눈에 보여주는 메인 화면",
        tag: "대시보드"
      },
      {
        url: erpilotAiAssistantImg,
        title: "AI 업무 도우미 – 자연어 조회 & 휴가 신청 초안",
        description: "자연어로 연차 잔여 일수를 조회하고(getLeaveBalance), 휴가 신청 초안을 작성(draftLeaveRequest)한 뒤 확인 카드에서 사용자가 직접 확정하는 Function Calling 기반 AI 챗봇 화면",
        tag: "AI 어시스턴트"
      },
      {
        url: erpilotInventoryImg,
        title: "재고 관리 – 창고별 현황 & 안전재고 알림",
        description: "창고별 재고 현황을 조회하고 현재고가 안전재고 미만인 품목을 '부족' 상태와 상단 경고로 강조하며, 재고 실사 시작·창고 관리로 이어지는 화면",
        tag: "재고 관리"
      }
    ]
  },
  {
    id: "project-learnpath",
    category: "personal",
    title: "🧭 LearnPath (Learning Curator - AI 학습 로드맵 큐레이터)",
    subtitle: "관심 주제를 입력하면 AI 에이전트가 직접 웹을 검색·평가해 난이도별 학습 로드맵을 만들어주는 ReAct 기반 개인 학습 콘텐츠 큐레이터",
    role: "풀스택 개발자 (개인 프로젝트 / AI 에이전트)",
    period: "개인 프로젝트",
    summary: "LLM에게 학습 자료를 물으면 존재하지 않는 링크를 추천하는 문제를 해결하기 위해, ReAct(Thought → Action → Observation) 패턴으로 실제 웹 검색 결과에 근거해서만 자료를 추천하도록 강제했습니다. 판단 과정을 타임라인으로 실시간 노출하고, 자료별 학습 진행률 체크리스트를 제공합니다.",
    architectureHighlights: [
      "ReAct 에이전트 루프(최대 5회, 토큰 예산 내): Gemini가 다음 검색어를 결정(Thought) → Tavily 웹 검색(Action) → 난이도·신뢰도 평가(Observation) → react_steps 저장, 프런트는 1.5초 폴링으로 진행 상황 표시",
      "Hallucination 코드 차단(Output Contract): 검색 Observation의 URL을 화이트리스트로 모아 최종 로드맵의 모든 URL과 대조, 지어낸 URL이 있으면 실패 사유를 피드백으로 재요청(최대 2회) 후에도 실패하면 수집 자료를 코드로 직접 조립해 partial 결과 반환",
      "Gemini tool_config를 mode=ANY + allowed_function_names로 강제해 Thought/Observation/최종 생성 모두 정해진 JSON 스키마의 함수 호출로만 응답받아 파싱 오류 원천 차단",
      "종료·재시도 같은 안전장치의 최종 결정권은 LLM이 아니라 컨트롤러 코드(_enough_collected 등)가 보유 — 모델이 잘못 판단해도 정상 진행",
      "프로바이더 중립 tool 스키마 설계: Anthropic Claude에서 Gemini로 교체할 때 _call_tool()과 설정 필드만 수정하고 프롬프트·스키마·검증·DB·프런트는 무변경",
      "PostgreSQL(JSONB)에 로드맵 저장, 학습 완료 체크 실시간 저장 및 난이도별/전체 진행률 표시, Observation 상세보기(채택/제외 여부·판단 근거)로 추천 과정 투명화",
      "503 과부하는 지수 백오프로 재시도하고 429(무료 티어 쿼터 소진)는 run_logs에 사유를 남기고 에러 화면 + 재시도 버튼 노출, Docker 포트 충돌 등 트러블슈팅을 README에 기록",
      "FastAPI(async) + SQLAlchemy + Alembic 백엔드, React(Vite) + React Query 프런트, Railway 배포"
    ],
    logObservabilityUsed: ["run_logs(토큰/실패 사유)", "react_steps(Thought/Action/Observation 타임라인)", "Railway Deploy/App Log"],
    keyOutcome: "실제 검색 결과 기반 URL 검증을 통과한 학습 로드맵 생성(예: React Hooks 3회전·29.5초·자료 9개, 재시도 0회) 및 Railway 배포 완료",
    techStack: ["Full Stack", "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "React", "Vite", "Gemini API", "Tavily", "ReAct", "Railway"],
    githubUrl: "https://github.com/minhahamin/LearnPath",
    demoUrl: "https://frontend-production-c5ba.up.railway.app",
    featured: true,
    screenshots: [
      {
        url: learnpathHomeImg,
        title: "학습 주제 입력 (새 큐레이션)",
        description: "관심 주제를 입력하면 에이전트가 ReAct(Thought → Action → Observation) 루프로 웹을 검색·평가해 학습 로드맵을 만들어주는 시작 화면",
        tag: "큐레이션 시작"
      },
      {
        url: learnpathRoadmapImg,
        title: "난이도별 학습 로드맵 & 진행률",
        description: "입문 단계부터 자료를 추천하고 자료별 신뢰도(높음/보통)를 표시하며, 체크리스트로 학습 진행률(예: 2/9 완료)을 저장하는 로드맵 화면",
        tag: "학습 로드맵"
      },
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Development",
    iconName: "Code",
    description: "사용자가 직관적이고 빠르게 조작할 수 있는 웹 프론트엔드 구축",
    skills: [
      { name: "React", level: 92, description: "컴포넌트 분리, State 관리, Custom Hooks, 가상 스크롤(Virtual Scroll)", tags: ["Frontend", "Core"] },
      { name: "JavaScript / TypeScript", level: 90, description: "ES6+, Async/Await, Promise.all 병렬 처리, 타입 안정성", tags: ["Language"] },
      { name: "Tailwind CSS", level: 95, description: "반응형 Layout, 커스텀 유틸리티, 깔끔하고 스케일 가능한 UI 구현", tags: ["Styling"] },
      { name: "Axios & REST API Interceptor", level: 92, description: "요청/응답 인터셉터, JWT 토큰 자동 재발급, 에러 공통 처리", tags: ["Network"] }
    ]
  },
  {
    category: "Backend & Server Architecture",
    iconName: "Server",
    description: "안정적이고 확장 가능한 백엔드 REST API 및 비즈니스 로직 설계",
    skills: [
      { name: "Node.js / Express.js / Nest.js", level: 90, description: "REST API 서버 구축, Controller/Service 레이어드 아키텍처", tags: ["Backend", "Node"] },
      { name: "Java / Spring Boot", level: 88, description: "Layered Architecture, Spring Security, RESTful API 구축", tags: ["Backend", "Java"] },
      { name: "JWT & RBAC Auth Guard", level: 90, description: "역할 기반 권한 관리, Refresh/Access Token 세션 보안", tags: ["Security"] },
      { name: "Race Condition & Concurrency Guard", level: 85, description: "DB Sequence, UNIQUE Index, Retry Loop로 동시성 이슈 완전 방지", tags: ["Architecture"] }
    ]
  },
  {
    category: "Database & Performance Optimization",
    iconName: "Database",
    description: "데이터베이스 설계 및 대용량 DB 쿼리 실행계획 최적화",
    skills: [
      { name: "MariaDB / MySQL / PostgreSQL", level: 90, description: "테이블 스키마 설계, 복합 인덱스(Composite Index) 생성", tags: ["Database"] },
      { name: "SQL Optimization & Indexing", level: 92, description: "N+1 쿼리 제거, Slow Query 개선, EXPLAIN 실행계획 분석", tags: ["Optimization"] },
      { name: "Sequelize ORM / JPA", level: 85, description: "엔티티 및 연관관계(1:N, N:M) 구성, 트랜잭션 관리", tags: ["ORM"] }
    ]
  }
];

export const SAMPLE_LOG_PRESETS = [
  {
    name: "🔴 [LOT 번호 동시성 이슈] MariaDB ER_DUP_ENTRY Race Condition",
    type: "error" as const,
    log: `2026-07-02T14:32:01.102Z [ERROR] [mes-api-server] [worker-thread-4] MariaDB Error 1062 (23000): Duplicate entry 'LOT-20260702-0042' for key 'PRIMARY'
  at Query.Sequence._packetToError (/app/node_modules/mysql2/lib/packets/sequence.js:38:14)
  at Query.execute (/app/node_modules/mysql2/lib/packets/query.js:139:10)
  at async generateLotNumber (/app/dist/services/lotService.js:42:18)
2026-07-02T14:32:01.105Z [WARN] [mes-api-server] Concurrent requests detected: MAX(lot_no) read collision between thread-4 and thread-9`
  },
  {
    name: "🟠 [Slow Query & N+1] MES 대용량 생산 이력 조회 지연",
    type: "performance" as const,
    log: `2026-07-02T15:10:44.891Z [SLOW QUERY] [mariadb-mes-prod] duration: 5218.40ms statement: SELECT * FROM production_history WHERE prod_date = '2026-07-01';
  Plan: Full Table Scan on production_history (cost=0.00..15200.00 rows=5200)
  Filter: (prod_date = '2026-07-01')
2026-07-02T15:10:45.100Z [WARN] [mes-api-server] N+1 Query loop detected: 5200 child queries executed for lot_details lookup
2026-07-02T15:10:45.200Z [ERROR] [http-server] GET /api/v1/production/history HTTP/1.1 504 Gateway Timeout (Latency: 5310ms)`
  },
  {
    name: "🟡 [JWT 세션 만료] Axios 401 Unauthorized Session Timeout",
    type: "security" as const,
    log: `2026-07-02T16:20:11.455Z [WARN] [safewith-api] JWT Token Expired for user_id=emp_8821 (exp: 1783011600)
2026-07-02T16:20:11.458Z [HTTP] POST /api/v1/safety/inspection-logs -> 401 Unauthorized
2026-07-02T16:20:11.460Z [CLIENT] AxiosInterceptor: Detected 401 response on protected endpoint. Requesting token refresh via /api/v1/auth/refresh...`
  }
];

export const VERCEL_NEXTJS_FILES = {
  packageJson: `{
  "name": "hongminha-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@google/genai": "^2.4.0",
    "lucide-react": "^0.546.0",
    "motion": "^12.23.24",
    "tailwindcss": "^4.0.0"
  }
}`,
  pageTsx: `// Next.js App Router Entry Point (app/page.tsx)
import PortfolioClientApp from "@/components/PortfolioClientApp";

export const metadata = {
  title: "홍민하 | 2년차 풀스택 웹 개발자 포트폴리오",
  description: "로그 속의 보이지 않는 단서를 추적하여, 사용자의 눈에 보이는 일상을 빈틈없이 수호합니다. React, Spring Boot, Node.js, MariaDB",
};

export default function Home() {
  return <PortfolioClientApp />;
}`,
  apiRouteTs: `// Next.js Route Handler for Gemini AI Log Analyzer (app/api/gemini/analyze-log/route.ts)
import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { logText } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        error: "GEMINI_API_KEY가 설정되지 않았습니다. Vercel Environment Variables에 추가해주세요."
      }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = \`
당신은 '로그 추적자(Log-Tracker)'이자 수석 웹 엔지니어 홍민하입니다.
제시된 로그/에러 스택 트레이스를 정밀 분석하여 다음 JSON 구조로 한국어로 답변해 주세요:

{
  "detectedIssue": "감지된 이슈 이름",
  "severity": "CRITICAL" | "HIGH" | "MEDIUM" | "LOW",
  "hiddenClue": "로그에서 찾아낸 결정적인 숨겨진 단서",
  "rootCauseAnalysis": "임시 대처가 아닌 문제의 근본 원인 분석",
  "suggestedFixCode": "문제 해결을 위한 가드 코드 예시",
  "uxProtectionStrategy": "사용자가 불편을 느끼지 않도록 수호하는 UX 전략",
  "preventativeMetrics": "동일 재발 방지를 위한 모니터링 메트릭 제안"
}

로그 데이터:
\${logText}
\`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });

    const result = JSON.parse(response.text || "{}");
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}`,
  vercelJson: `{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}`
};
