export interface CareerItem {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  duties: string[];
}

export interface KeywordItem {
  id: string;
  tag: string;
  englishTag: string;
  title: string;
  description: string;
  iconName: string;
  highlightText: string;
}

export interface IncidentPostMortem {
  id: string;
  title: string;
  category: 'Distributed System' | 'Memory & Performance' | 'Database Optimization' | 'Security & Auth';
  symptom: string;
  logClue: string;
  rootCause: string;
  solution: string;
  impact: string;
  techStack: string[];
  metricsBefore: string;
  metricsAfter: string;
  codeSnippet?: {
    filename: string;
    before: string;
    after: string;
  };
}

export interface ProjectScreenshot {
  url: string;
  title: string;
  description: string;
  tag: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  summary: string;
  architectureHighlights: string[];
  logObservabilityUsed: string[];
  keyOutcome: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  screenshots?: ProjectScreenshot[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    description: string;
    tags: string[];
  }[];
}

export interface LogAnalysisRequest {
  logText: string;
  logType?: 'error' | 'performance' | 'security' | 'custom';
}

export interface LogAnalysisResult {
  detectedIssue: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  hiddenClue: string;
  rootCauseAnalysis: string;
  suggestedFixCode: string;
  uxProtectionStrategy: string;
  preventativeMetrics: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  type: 'recruitment' | 'project' | 'coffee_chat';
}
