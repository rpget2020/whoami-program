export const profile = {
  nameKo: '이병욱',
  nameEn: 'LEE BYEONGWOOK',
  role: 'Backend Developer',
  roleKo: '백엔드 개발자',
  birthDate: '1994.02.16',
  email: 'rpget2020@naver.com',
  phone: '010-7766-1503',
  location: '서울 관악구',
  summary:
    '약 5년간 Java 및 Spring Boot 기반 백엔드 개발자로 근무하며, 서비스 개발부터 운영·배포까지 전 과정을 경험했습니다. 전자서명 SaaS 플랫폼 신규 구축, CSAP 인증 대응, API 연동 등 안정적이고 확장 가능한 서비스를 만드는 데 집중해왔습니다.',
  tags: ['Java', 'Spring Boot', 'MSA', 'Kubernetes', 'Docker', 'CI/CD', 'API Design'],
}

export const education = [
  {
    period: '2013.03 – 2020.08',
    school: '중부대학교',
    major: '정보통신공학',
    grade: '3.9 / 4.5',
    status: '졸업',
  },
  {
    period: '2009.02 – 2013.02',
    school: '신성고등학교',
    major: '-',
    grade: '-',
    status: '졸업',
  },
]

export const certifications = [
  { name: '정보처리기사', issuer: 'Q-net', date: '2022.06' },
  { name: 'TOEIC', issuer: 'YBM', date: '2019.06' },
]

export const career = {
  company: '유비디시전',
  department: '개발팀',
  position: '연구위원',
  period: '2021.04 – 2026.03',
  description: 'Java 및 웹서비스 개발',
}

export const projects = [
  {
    id: 'esign',
    title: '전자서명 웹서비스 개발 및 인터페이스',
    period: '2024.11 – 2026.02',
    highlight: true,
    tasks: [
      'Spring Boot 기반 전자서명 백엔드 시스템 구축 (템플릿 생성, 서명 요청, 이력 조회 등)',
      'JWT 기반 로그인 및 사용자 인증/인가 처리',
      'Vue.js 기반 프론트엔드 개발 (대시보드, 문서 서명 UI, 발송 관리 등)',
      'Docker 기반 CI/CD 환경 구성 및 Jenkins 배포 자동화 설정',
      'Swagger를 통한 API 문서 자동화 및 QA 테스트 문서화 지원',
      '고객사 인터페이스: 서울대학교, 우리금융F&I, 스포애니, 교통연구원, 유니에스, 중앙노동위원회, 파라다이스시티',
    ],
    achievements: [
      '전자서명 서비스 출시 후 1년간 20여 개 고객사 구축 프로젝트 수행',
      '전자서명 SaaS 플랫폼 신규 구축 및 상용 서비스 오픈',
    ],
    tech: ['Spring Boot', 'Vue.js', 'JWT', 'Docker', 'Jenkins', 'Swagger'],
  },
  {
    id: 'csap',
    title: 'CSAP 인증 대응 및 보안 개선',
    period: '2024.09 – 2024.12',
    highlight: true,
    tasks: [
      '전자서명 웹서비스를 MSA 방식으로 서비스별 프로젝트 재구성',
      'Kubernetes Secret 기반 민감정보 관리 체계 구축',
      'RSA-OAEP 기반 웹 암호화 적용',
      'CSP, XSS, CSRF 대응 보안 정책 적용',
      'SonarQube, Sparrow 정적 분석 대응',
      'NCP 기반 Jenkins Pipeline 구축',
    ],
    achievements: ['CSAP 인증 통과'],
    tech: ['Kubernetes', 'MSA', 'SonarQube', 'Jenkins', 'Spring Security'],
  },
  {
    id: 'editor',
    title: '문서 편집 툴 개발',
    period: '2024.07 – 2024.10',
    tasks: [
      '전자서명 문서 템플릿 편집 기능 개발',
      'Pdf.js / Fabric.js 기반 문서 편집 기능 구현',
      'JSON 기반 필드 정보 저장 및 동기화',
      'UI/UX 개선 및 유효성 검증 기능 구현',
    ],
    achievements: [
      '전자서명 웹서비스 핵심 기능 개발',
      '템플릿 편집 기능을 Node.js 모듈로 분리·Webpack 빌드 후 배포, 재사용성 향상 및 의존성 감소',
    ],
    tech: ['Pdf.js', 'Fabric.js', 'JavaScript', 'Vue.js', 'Node.js', 'Webpack'],
  },
  {
    id: 'sharing',
    title: '웹 화면 공유(Sharing) 기능 개발',
    period: '2023.04 – 2023.06',
    tasks: [
      '순수 JavaScript 기반 웹 화면 공유 기능 개발',
      'Spring Boot 기반 메시지 서버 개발',
      'WebSocket을 활용한 실시간 통신 환경 구현',
      '실시간 연결 상태 모니터링 및 복구 로직 구현',
      '화면 공유 이벤트 제어 기능 개발',
    ],
    achievements: [
      '브라우저 기반 화면 공유 기능 구축 — 별도 프로그램 설치 없이 비대면 상담 환경 제공',
    ],
    tech: ['Spring Boot', 'WebSocket', 'JavaScript', 'Message Queue'],
  },
  {
    id: 'converter',
    title: '자사 리포트 파일 컨버터 프로그램 개발',
    period: '2022.01 – 2022.06',
    tasks: [
      '자사 리포트 포맷(JRF)을 타사 리포트 포맷으로 변환하는 컨버터 개발',
    ],
    achievements: [
      '3개 타사 리포트 포맷 연동 지원 — 타사 기능 변환율 80%',
      'DX팀 수작업 변환 프로세스 자동화 — 대량 리포트 변환 업무 효율 향상',
      '기존 타사 문서 자산 재활용을 통한 고객사 전환 비용 절감',
    ],
    tech: ['Java'],
  },
]

export const about = {
  growth: `어릴 때부터 새로운 기술을 배우고 원리를 이해하는 것을 좋아했습니다. 대학에서 정보통신공학을 전공하며 소프트웨어 개발에 흥미를 느꼈고, 단순히 프로그램을 만드는 것을 넘어 사용자가 실제로 활용하는 서비스를 개발하는 개발자가 되고자 노력했습니다.

최근에는 신사업 프로젝트(전자서명 웹서비스 "유비컨텐츠")를 수행하며 기술적 난관에 부딪힐 때마다 포기하지 않고 원인을 분석하고 해결하는 습관을 길러왔습니다. 특히 서비스 후에는 고객사별 요구사항이 다른 시스템 연동 업무를 수행하면서 문제를 끝까지 파고들어 해결하는 책임감과 끈기를 갖추게 되었습니다.`,
  strengths: [
    {
      title: '구조적 문제 해결',
      description:
        '전자서명 서비스 구축 과정에서 다양한 고객사의 시스템과 API를 연동하며 데이터 구조와 업무 프로세스를 분석하고 표준화된 인터페이스를 설계했습니다. 장애나 성능 이슈에 대해 로그와 데이터를 기반으로 원인을 분석하고 빠르게 개선하는 과정을 반복하며 안정적인 서비스 운영 역량을 키웠습니다.',
    },
    {
      title: '지속적인 학습',
      description:
        'JPA, Docker, Kubernetes, CI/CD, 시큐어 코딩까지 인프런 강의로 직접 코딩해보며 프로젝트에 적용해왔습니다. 최근에는 Agentic AI를 학습하며 AI 에이전트 기반 서비스를 직접 설계하고 구현하는 프로젝트를 실습해보고 있습니다.',
    },
  ],
  weakness:
    '대용량 트래픽 환경에서의 서비스 운영 경험이 아직 부족한 점이 저의 약점입니다. 다만 캐싱, 비동기 처리, 메시지 큐 등 대용량 처리를 위한 기술을 꾸준히 학습하고 있으며, 실제 트래픽이 집중되는 상황에서의 성능 분석·병목 해결·확장 설계 역량을 키워 안정적인 대규모 서비스 운영에 기여하고자 합니다.',
  experience: `약 5년간 Java 및 Spring Boot 기반 백엔드 개발자로 근무하며 서비스 개발부터 운영, 배포까지 전 과정을 경험하였습니다.

전자서명 웹서비스를 신규 구축하며 템플릿 생성, 서명 요청, 문서 이력 관리 등 핵심 기능을 설계 및 개발하였고, 서비스를 성공적으로 출시하여 약 20여 개 고객사를 확보하였습니다. CSAP 인증 대응 프로젝트를 수행하며 MSA 구조로 개선하고 Kubernetes Secret 기반 민감정보 관리 체계를 구축하였습니다.`,
  vision: {
    short: '서비스 구조와 비즈니스 도메인을 빠르게 이해하고, Spring Boot 기반 백엔드 개발 경험과 API 설계 역량을 활용하여 서비스 품질 향상과 운영 효율성 개선에 집중하겠습니다.',
    long: '대용량 데이터 처리와 클라우드 기반 아키텍처 설계 역량을 더욱 발전시켜 핵심 플랫폼을 설계하고 운영할 수 있는 개발자로 성장하고 싶습니다. DevOps와 데이터 플랫폼 분야까지 역량을 확장하여 고객이 안심하고 사용할 수 있는 서비스를 제공하는 데 기여하겠습니다.',
    goal: '기술을 통해 사용자의 삶에 실질적인 가치를 제공하는 개발자가 되는 것이 저의 목표입니다.',
  },
}

export const skills = {
  backend: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'JWT', 'WebSocket'],
  frontend: ['Vue.js', 'JavaScript', 'Pdf.js', 'Fabric.js'],
  infra: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'NCP'],
  security: ['CSAP', 'RSA-OAEP', 'XSS/CSRF/CSP', 'SonarQube', 'Sparrow'],
  tools: ['Swagger', 'Git', 'Message Queue'],
}
