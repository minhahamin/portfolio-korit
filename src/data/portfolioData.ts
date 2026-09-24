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

export const HERO_TAGLINE = {
  mainTitle: "로그 속의 보이지 않는\n단서를 추적하여,",
  subTitle: "사용자의 눈에 보이는 일상을 빈틈없이 수호합니다.",
  role: "2년차 풀스택 웹 개발자 | React, Spring Boot, Node.js",
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
      "React 기반 MES 프론트엔드 개발 (3개 제조사 납품 완료)",
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
    highlightText: "3개 제조사 MES 안정 납품 및 401 JWT 토큰 자동 재발급 세션 수호"
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
    title: "MES 생산관리 시스템 (Manufacturing Execution System)",
    subtitle: "제조업 현장의 생산, 자재, 품질, 영업 데이터를 통합 관리하는 엔터프라이즈 MES 시스템",
    role: "풀스택 웹 개발자 (React & Node.js / Nest.js)",
    period: "3개 제조사 납품 완료", // 씨에프티유한책임회사
    summary: "3개 제조 현장에 납품된 MES 시스템으로, 기준정보, 영업, 생산, 품질, 자재 모듈 전체의 화면 설계, React 대시보드, 달력 기반 일정 등록, REST API 서버 연동 및 DB 쿼리 최적화를 담당했습니다.",
    architectureHighlights: [
      "기준정보 / 영업 / 생산 / 품질 / 자재 등 5대 핵심 관리 모듈 화면 완벽 구현",
      "React 기반 인터랙티브 대시보드 및 달력 기반 일정/생산 현황 모니터링",
      "Node.js / Nest.js REST API 서버 구축 및 MariaDB / MySQL 스키마 연동",
      "대용량 생산 이력 조회 SQL 쿼리 최적화로 응답 속도 95% 개선 (5.2초 → 0.28초)",
      "Promise.all 병렬 API 처리로 초기 대시보드 로딩 속도 77% 개선 (3.5초 → 0.8초)"
    ],
    logObservabilityUsed: ["MariaDB Slow Query Log", "Chrome DevTools Waterfall", "Express Custom Logger"],
    keyOutcome: "3개 제조사 현장 성공 납품 완료 / 쿼리 응답속도 95% 개선 / LOT 동시성 중복 0건",
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
    title: "세이프위드 현장 안전관리 시스템 (SafeWith)",
    subtitle: "현장 운영, 안전 점검, 근로자 및 협력사 관리 기능을 하나로 통합한 엔터프라이즈 안전 플랫폼",
    role: "웹개발 / 책임 (Next.js & Node.js)",
    period: "대표 프로젝트",
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
    id: "project-prsense",
    title: "🔍 PrSense (피알센스 - GitHub PR 자동 리뷰 에이전트)",
    subtitle: "PR이 열리면 변경사항을 분석해 인라인 리뷰 코멘트를 자동으로 남기는 에이전트 — LangGraph 오케스트레이션 · 코드베이스 RAG · 구조화 출력 · 실시간 SSE 진행 표시",
    role: "풀스택 개발자 (개인 프로젝트 / AI 에이전트)",
    period: "개인 프로젝트",
    summary: "GitHub 웹훅으로 PR diff를 수집해 변경 유형·리스크를 분류하고, 파일별로 병렬 분석(각 파일마다 Chroma RAG로 관련 코드 조회)한 뒤 중복 제거·심각도 정렬·사람 톤 재작성을 거쳐 최종 리뷰를 만듭니다. 진행 상황은 SSE로 스트리밍하고, React 프런트의 diff 뷰어에서 인라인 코멘트를 확인한 뒤 GitHub에 게시할 수 있습니다.",
    architectureHighlights: [
      "LangGraph 워크플로우: classify(change_type + risk_level) → Send API로 파일별 analyze_file fan-out(파일 수에 따라 동적 병렬) → aggregate(중복제거·severity 정렬·recommendation) → rewrite(사람 톤) → finalize",
      "코드베이스 RAG: Python은 AST 기준 함수/클래스 단위, 그 외 언어는 120줄 윈도우로 청킹해 Chroma에 저장하고, 분석 시 관련 코드 top-k를 컨텍스트로 주입",
      "모든 LLM 호출에 with_structured_output(Pydantic)을 적용해 스키마 위반 코멘트가 GitHub에 게시되는 사고를 방지하고, confidence 0.6 미만은 '확인 필요' 배지로 격리(환각 의심 지적을 숨기지 않고 구분)",
      "SSE 진행 스트림: append-only 이벤트 저장소 폴링 방식으로 다중 클라이언트가 동시에 구독해도 이벤트 유실 없이 분류중→분석중→종합중→완료 단계 표시",
      "LangGraph state를 comments(reducer 누적)와 final_comments(overwrite)로 분리해 미선언 키 유실 및 reducer 중복 누적 문제 해결",
      "평가 스크립트로 사람 리뷰 대비 precision/recall/F1 측정(동일 파일 ±3줄 매칭), API 키 없이 동작하는 MOCK_LLM 모드 제공",
      "Railway에 backend(FastAPI) · frontend(React + nginx) · Postgres · Chroma 볼륨을 IaC(.railway/railway.ts)로 구성하고, 부팅 시 env.js로 백엔드 주소를 주입해 재빌드 없이 환경 전환"
    ],
    logObservabilityUsed: ["SSE 실행 진행 이벤트(run_id별)", "review_runs 실행 이력(Postgres)", "Railway Deploy/App Log"],
    keyOutcome: "Webhook → 분류 → RAG 기반 병렬 분석 → 재작성 → 인라인 코멘트 게시까지 이어지는 PR 리뷰 에이전트 구현 및 Railway 배포 완료",
    techStack: ["Full Stack", "Python", "FastAPI", "LangGraph", "Chroma (RAG)", "Pydantic", "React", "TypeScript", "PostgreSQL", "Railway"],
    githubUrl: "https://github.com/minhahamin/PrSense",
    demoUrl: "https://prsenseapp-production.up.railway.app/",
    featured: true
  },
  {
    id: "project-ai-agent-company",
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
    featured: true
  },
  {
    id: "project-pennywise",
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
    featured: true
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
