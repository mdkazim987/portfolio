export const personal = {
  name: 'Md Kazim',
  title: 'System Analyst | Java Backend Engineer | NSE Trading Systems',
  tagline: 'Building High-Availability Financial Systems for NSE Trading Infrastructure',
  location: 'Mumbai, Maharashtra, India',
  email: 'mdkazim987@gmail.com',
  phone: '+91-8368471473',
  linkedin: 'https://linkedin.com/in/mdkazim-6391201a0',
  resumeUrl: '/resume.pdf',
  bio: 'Experienced Java Backend Engineer with 3+ years of hands-on expertise building scalable, production-grade web applications for mission-critical financial systems. Specializing in Java, Spring Boot, and Hibernate with deep experience in Oracle, MySQL, and MongoDB. Proven track record of delivering high-availability solutions for NSE trading infrastructure with a security-first mindset.',
}

export const stats = [
  { value: '3+', label: 'Years Experience', sublabel: 'Production Systems' },
  { value: 'NSE', label: 'Trading Systems', sublabel: 'Live Production' },
  { value: '15+', label: 'APIs Delivered', sublabel: 'REST & Integration' },
  { value: '99.9%', label: 'Uptime Target', sublabel: 'HA Architecture' },
]

export const experience = [
  {
    id: 1,
    company: 'NuSummit Technologies',
    role: 'System Analyst',
    period: 'Nov 2024 – Present',
    duration: 'Present',
    client: 'NSE (National Stock Exchange)',
    project: 'Collateral Management System',
    location: 'Mumbai, India',
    type: 'Full-time',
    description:
      'Leading backend development for NSE\'s mission-critical collateral management platform, ensuring high availability and performance for thousands of trading members and custodians across live market operations.',
    achievements: [
      'Architected and maintained high-availability microservices supporting real-time NSE trading operations',
      'Designed and delivered 10+ REST APIs for collateral management workflows used by trading members',
      'Optimized critical trading service performance, reducing average API response time by 40%',
      'Implemented robust CI/CD workflows using Maven and Git, improving release cycle efficiency',
      'Conducted systematic code reviews enforcing security-first engineering practices',
      'Collaborated daily with QA, business analysts, and NSE client teams in Agile ceremonies',
    ],
    tech: ['Java 8', 'Spring Boot', 'Hibernate/JPA', 'Oracle', 'MongoDB', 'REST API', 'Maven', 'Git', 'Microservices', 'WebLogic'],
    color: 'cyan',
  },
  {
    id: 2,
    company: 'NSEIT Limited',
    role: 'Associate System Analyst',
    period: 'Dec 2022 – Nov 2024',
    duration: '2 Years',
    client: 'NSE (National Stock Exchange)',
    project: 'SecPledge — Security Pledge Reporting',
    location: 'Mumbai, India',
    type: 'Full-time',
    description:
      'Developed and maintained the SecPledge reporting system — the backbone of security pledge data delivery for NSE trading members and custodians, ensuring accurate and timely regulatory reporting.',
    achievements: [
      'Built and maintained SecPledge, generating Member and Custodian pledge reports delivered to CDSL/NSDL',
      'Designed and implemented a Maker-Checker approval workflow for file uploads, reducing data errors by 60%',
      'Migrated logging framework from Log4j 1.1.7 to Log4j 2.20 — zero-downtime, enhanced security and observability',
      'Established automated SFTP-based secure transmission pipeline for regulatory report delivery',
      'Configured and deployed SSL certificates across 5+ services, achieving full internal security compliance',
      'Optimized PL/SQL procedures reducing report generation time by 35%',
    ],
    tech: ['Java 7', 'JSP', 'Servlets', 'PL/SQL', 'Oracle', 'Log4j 2', 'SSL/TLS', 'SFTP', 'SVN', 'Git', 'Tomcat'],
    color: 'blue',
  },
]

export const projects = [
  {
    id: 1,
    title: 'NSE Collateral Management Backend',
    type: 'Production',
    status: 'Live',
    description:
      'Mission-critical backend services for the National Stock Exchange\'s collateral management platform. Handles real-time pledge data, member reconciliation, and custodian reporting at production scale.',
    longDescription:
      'Contributed to the core backend platform supporting NSE\'s collateral management operations. The system processes thousands of transactions daily, serving trading members and custodians with real-time pledge data and automated report generation.',
    highlights: [
      'High-availability microservices architecture handling NSE production workloads',
      '10+ REST APIs for collateral workflows',
      'Oracle-backed transactional data with optimized PL/SQL stored procedures',
      'Integration with NSE depository systems via secure SFTP',
    ],
    tech: ['Java 8', 'Spring Boot', 'Hibernate', 'Oracle', 'MongoDB', 'Microservices', 'Maven', 'WebLogic'],
    color: 'cyan',
    category: 'Financial Systems',
  },
  {
    id: 2,
    title: 'SecPledge Reporting System',
    type: 'Production',
    status: 'Live',
    description:
      'Automated security pledge report generation and delivery system for NSE trading members and custodians, ensuring accurate regulatory compliance with CDSL and NSDL depositories.',
    longDescription:
      'Designed and built the complete reporting pipeline for security pledges — from data extraction to report generation and SFTP-based secure delivery to external depository systems.',
    highlights: [
      'Handles Member and Custodian pledge report types',
      'Automated SFTP-based delivery with SSL encryption',
      'Optimized PL/SQL for 35% faster report generation',
      'Maker-Checker workflow reducing data errors by 60%',
    ],
    tech: ['Java 7', 'PL/SQL', 'Oracle', 'Log4j 2', 'SSL/TLS', 'SFTP', 'JSP', 'Servlets'],
    color: 'blue',
    category: 'Financial Systems',
  },
  {
    id: 3,
    title: 'File Upload Maker-Checker System',
    type: 'Production',
    status: 'Live',
    description:
      'A secure multi-stage approval workflow system for financial data file uploads, introducing validation layers and audit trails that eliminated 60% of manual data entry errors.',
    highlights: [
      'Multi-stage maker-checker approval workflow',
      'Business rule validation engine',
      'Complete audit trail for regulatory compliance',
      'Reduced manual data errors by over 60%',
    ],
    tech: ['Java', 'Spring Boot', 'Oracle', 'PL/SQL', 'REST API', 'JSP'],
    color: 'green',
    category: 'Workflow Automation',
  },
  {
    id: 4,
    title: 'AI-Powered Conversational Chatbot',
    type: 'Academic',
    status: 'Completed',
    description:
      'NLP-driven chatbot built using IBM Watson services, capable of intent recognition, entity extraction, and multi-turn conversations with contextual understanding.',
    highlights: [
      'Intent classification using IBM Watson NLU',
      'Entity extraction and slot filling',
      'Multi-turn conversation management',
      'REST API integration for dynamic responses',
    ],
    tech: ['Python', 'IBM Watson', 'NLP', 'REST API', 'Flask'],
    color: 'purple',
    category: 'AI / NLP',
  },
  {
    id: 5,
    title: 'Machine Learning Data Pipeline',
    type: 'Academic',
    status: 'Completed',
    description:
      'End-to-end ML pipeline for data ingestion, preprocessing, feature engineering, model training and evaluation — demonstrating practical machine learning engineering concepts.',
    highlights: [
      'Automated data ingestion and preprocessing',
      'Feature engineering pipeline with Pandas',
      'Multiple model evaluation and comparison',
      'Visualization with Matplotlib/Seaborn',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    color: 'orange',
    category: 'Machine Learning',
  },
]

export const skills = {
  backend: [
    { name: 'Java 8 / Java 7', level: 92 },
    { name: 'Spring Boot', level: 90 },
    { name: 'Hibernate / JPA', level: 85 },
    { name: 'REST API Design', level: 88 },
    { name: 'JSP / Servlets', level: 80 },
    { name: 'Microservices', level: 82 },
  ],
  databases: [
    { name: 'Oracle / PL/SQL', level: 88 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Query Optimization', level: 82 },
  ],
  devops: [
    { name: 'Git / SVN', level: 85 },
    { name: 'Maven / Gradle', level: 82 },
    { name: 'WebLogic / Tomcat', level: 78 },
    { name: 'Jenkins (CI/CD)', level: 70 },
  ],
  architecture: [
    { name: 'System Design', level: 80 },
    { name: 'Microservices Patterns', level: 78 },
    { name: 'API Gateway', level: 75 },
    { name: 'Load Balancing', level: 70 },
  ],
  security: [
    { name: 'SSL / TLS', level: 80 },
    { name: 'SFTP Secure Transfer', level: 78 },
    { name: 'Log4j / SLF4J', level: 85 },
    { name: 'Secure Coding Practices', level: 80 },
  ],
  aiml: [
    { name: 'Python', level: 72 },
    { name: 'Machine Learning', level: 65 },
    { name: 'IBM Watson / NLP', level: 68 },
    { name: 'Scikit-learn / Pandas', level: 65 },
  ],
}

export const radarData = [
  { subject: 'Backend', level: 92 },
  { subject: 'Databases', level: 85 },
  { subject: 'DevOps', level: 78 },
  { subject: 'Architecture', level: 80 },
  { subject: 'Security', level: 80 },
  { subject: 'AI / ML', level: 68 },
]

export const certifications = [
  {
    id: 1,
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    platform: 'Coursera',
    description: 'Comprehensive ML fundamentals covering supervised learning, unsupervised learning, and deep learning concepts using Python and Scikit-learn.',
    skills: ['Python', 'Scikit-learn', 'Regression', 'Classification', 'Clustering'],
    color: 'blue',
    badge: 'IBM',
  },
  {
    id: 2,
    title: 'Build Your Own Chatbot',
    issuer: 'IBM',
    platform: 'Coursera',
    description: 'Hands-on certification building conversational AI using IBM Watson Assistant with intent classification, entity recognition, and dialog management.',
    skills: ['IBM Watson', 'NLP', 'Dialog Design', 'Intent Classification'],
    color: 'cyan',
    badge: 'IBM',
  },
  {
    id: 3,
    title: 'Entrepreneurship Orientation & Critical Thinking',
    issuer: 'IIM Indore',
    platform: 'IIM Indore',
    description: 'Executive program covering entrepreneurial thinking, business strategy, critical analysis, and innovation frameworks from India\'s premier management institute.',
    skills: ['Strategic Planning', 'Critical Thinking', 'Business Analysis', 'Innovation'],
    color: 'purple',
    badge: 'IIM',
  },
  {
    id: 4,
    title: 'Connect with Work',
    issuer: 'Anthropic',
    platform: 'Anthropic',
    description: 'Professional development program focusing on effective work practices, productivity, and leveraging AI tools responsibly in professional environments.',
    skills: ['AI Integration', 'Productivity', 'Professional Development'],
    color: 'green',
    badge: 'AI',
  },
]

export const timeline = [
  {
    year: '2018',
    title: 'Started B.Tech CSE',
    company: 'IES College of Technology',
    description: 'Enrolled in Bachelor of Technology in Computer Science Engineering at IES College of Technology, Bhopal (RGPV University).',
    type: 'education',
  },
  {
    year: '2022',
    title: 'Graduated B.Tech',
    company: 'IES College of Technology (RGPV University)',
    description: 'Completed B.Tech in Computer Science Engineering. Developed foundational expertise in Java, data structures, algorithms, and software engineering principles.',
    type: 'education',
  },
  {
    year: 'Dec 2022',
    title: 'Entered the Industry',
    company: 'NSEIT Limited',
    description: 'Joined NSEIT Limited as Associate System Analyst. First exposure to mission-critical financial systems — NSE SecPledge reporting infrastructure.',
    type: 'work',
  },
  {
    year: 'Nov 2024',
    title: 'Advanced Career',
    company: 'NuSummit Technologies',
    description: 'Joined NuSummit Technologies as System Analyst. Took on greater technical responsibility for NSE Collateral Management system architecture and delivery.',
    type: 'work',
  },
  {
    year: 'Present',
    title: 'Building for NSE',
    company: 'NuSummit Technologies — Client: NSE',
    description: 'Leading backend engineering for NSE\'s trading infrastructure. Designing high-availability microservices, optimizing Oracle data pipelines, and driving team technical practices.',
    type: 'current',
  },
]

export const warStories = [
  {
    id: 1,
    title: 'Log4j Security Vulnerability — Zero-Downtime Migration',
    severity: 'CRITICAL',
    severityColor: 'red',
    category: 'Security',
    impact: 'System-Wide',
    duration: '2 Weeks',
    result: 'Zero Downtime',
    summary: 'Critical security vulnerability in legacy Log4j 1.1.7 required an urgent, zero-downtime migration to Log4j 2.20 across a live production financial reporting system.',
    problem: {
      title: 'The Problem',
      content: 'The SecPledge production system was running Log4j 1.1.7 — a legacy version with known critical CVEs including remote code execution vectors. With financial systems under strict compliance scrutiny and regulatory deadlines, an emergency upgrade was mandated. The challenge: the system was generating live NSE reports daily. Zero-downtime was non-negotiable.',
      metrics: ['Log4j 1.1.7 with 3 active CVEs', 'Live production financial system', '47 logging call-sites identified', 'Regulatory compliance deadline: 14 days'],
    },
    investigation: {
      title: 'Investigation',
      content: 'Performed a full dependency audit across all modules, identifying every Log4j import and usage pattern. Mapped deprecated API calls (Category, Priority classes) that would break in the new version. Created a migration matrix of all appender configurations to validate behavior equivalence.',
      steps: [
        'Full codebase audit — 47 logging call-sites catalogued',
        'Identified deprecated Log4j 1.x APIs requiring refactoring',
        'Mapped all appender configurations (file, console, rolling)',
        'Set up parallel test environment to validate log output parity',
      ],
    },
    solution: {
      title: 'Solution',
      content: 'Executed a staged migration: updated all imports from Log4j 1.x to 2.x APIs, replaced deprecated Category/Priority usages with modern Logger/Level equivalents, reconfigured appenders to XML format, and validated log output parity in staging before production cutover.',
      steps: [
        'Replaced all deprecated Log4j 1.x APIs with Log4j 2.20 equivalents',
        'Migrated from properties-based to XML appender configuration',
        'Added async appenders for 40% improved I/O performance',
        'Implemented structured log format for better APM integration',
        'Rolling deployment with immediate rollback capability',
      ],
    },
    result: {
      title: 'Result',
      content: 'Zero-downtime migration completed 3 days ahead of regulatory deadline. System security posture dramatically improved, with enhanced monitoring capabilities as a bonus.',
      metrics: ['0 minutes downtime', '100% regulatory compliance achieved', '40% improved logging I/O performance', '3 CVEs eliminated', 'Enhanced monitoring with structured logs'],
    },
    lesson: 'Dependency audits should be automated. Manual discovery of 47 call-sites took 2 days — a job for tooling. We implemented automated dependency scanning post-migration.',
  },
  {
    id: 2,
    title: 'File Upload Data Corruption — Maker-Checker Architecture',
    severity: 'HIGH',
    severityColor: 'orange',
    category: 'Data Integrity',
    impact: 'Business-Critical',
    duration: '3 Weeks',
    result: '60% Error Reduction',
    summary: 'Manual file upload process for pledge data had no validation layer, resulting in corrupt data reaching Oracle production tables — triggering incorrect NSE reports delivered to depositories.',
    problem: {
      title: 'The Problem',
      content: 'The file upload process for security pledge data was a single-step, unvalidated operation. Users would upload data files directly into production tables without any business rule checks or approval gates. Roughly 23% of uploads contained data quality issues — incorrect formats, invalid member codes, missing mandatory fields — and these errors silently propagated into generated reports sent to CDSL/NSDL.',
      metrics: ['23% of uploads had data quality issues', 'Errors silently entered production database', 'Report corrections took 2-3 business hours', 'Regulatory re-delivery required in some cases'],
    },
    investigation: {
      title: 'Analysis',
      content: 'Analyzed 3 months of historical upload logs and cross-referenced with report correction tickets. Identified the top 8 recurring error categories, with invalid member codes and missing pledge amounts accounting for 70% of issues.',
      steps: [
        'Analysed 90 days of upload error logs — 847 error events catalogued',
        'Identified top 8 recurring data quality patterns',
        'Mapped current upload flow — single-step, no validation',
        'Interviewed operations team to understand business rules',
      ],
    },
    solution: {
      title: 'Solution — Maker-Checker Architecture',
      content: 'Designed and implemented a multi-stage Maker-Checker workflow: the Maker uploads data which enters a staging state; the system runs 20+ validation rules against the staging record; the Checker reviews exceptions and approves or rejects; only approved data promotes to production tables.',
      steps: [
        'Designed 2-stage staging → production promotion architecture',
        'Implemented 20+ business rule validators (member codes, amounts, formats)',
        'Built exception dashboard for Checker review workflow',
        'Added complete audit trail — every action logged with user, timestamp, reason',
        'Integrated email notifications for pending approvals and rejections',
      ],
    },
    result: {
      title: 'Outcome',
      content: 'Data quality issues dropped from 23% to under 9% within 30 days of deployment. Regulatory re-deliveries dropped to zero in the following quarter.',
      metrics: ['60%+ reduction in data entry errors', 'Complete audit trail for compliance', 'Zero regulatory re-deliveries post-implementation', '20+ business rules enforced automatically', 'Operations team efficiency improved by 45%'],
    },
    lesson: 'Systems that touch regulatory data need validation at the boundary — never trust file input. The audit trail was a compliance requirement we\'d underestimated in the original spec.',
  },
  {
    id: 3,
    title: 'SFTP Delivery Silent Failure — NSE Report Transmission',
    severity: 'HIGH',
    severityColor: 'orange',
    category: 'Infrastructure',
    impact: 'Regulatory',
    duration: '1 Day',
    result: 'Automated Monitoring',
    summary: 'Security pledge reports were generated successfully but SFTP transmission to the depository system failed silently due to SSL certificate expiry — reports never arrived, discovered hours later.',
    problem: {
      title: 'The Incident',
      content: 'At 06:00, the SecPledge batch job generated all security pledge reports as expected. But by 09:00, CDSL flagged missing report receipts. Investigation revealed the SFTP transmission job had failed at 06:28 with an SSL handshake error — and nobody was paged. The original system had no alerting on SFTP transmission failures, only on report generation failures.',
      metrics: ['Reports generated: ✓ | Reports delivered: ✗', 'Failure window: 06:28–09:00 (2.5 hours undetected)', 'Root cause: SSL certificate expired at midnight', 'Impact: Regulatory reporting delay flagged by CDSL'],
    },
    investigation: {
      title: 'Incident Timeline',
      content: 'Walked back the SFTP transmission logs. Found javax.net.ssl.SSLHandshakeException: certificate_expired in the logs at 06:28 — the SSL certificate had expired at midnight but the process had no alerting configured for this specific failure path.',
      steps: [
        '09:00 — CDSL flags missing report receipts',
        '09:15 — SecPledge batch confirmed reports were generated',
        '09:20 — SFTP logs reviewed: SSLHandshakeException found at 06:28',
        '09:25 — Certificate expiry confirmed via openssl s_client',
        '09:30 — Emergency certificate renewal initiated',
        '10:15 — New cert deployed, reports manually retransmitted',
      ],
    },
    solution: {
      title: 'Resolution & Prevention',
      content: 'Immediate resolution via emergency SSL certificate renewal and manual report retransmission. Prevention: implemented certificate expiry monitoring (30/15/7 day alerts), added SFTP delivery confirmation checks with automatic page-out on failure.',
      steps: [
        'Emergency SSL certificate renewal and deployment',
        'Manual retransmission of all pending reports',
        'Implemented 30/15/7-day certificate expiry email alerts',
        'Added SFTP delivery receipt validation post-transmission',
        'Configured PagerDuty-style alerting on SFTP job failure',
        'Added SSL certificate expiry to daily health check dashboard',
      ],
    },
    result: {
      title: 'Lessons Learned',
      content: 'Zero recurrence since implementation. Certificate monitoring is now a standard checklist item for all new services.',
      metrics: ['Zero SFTP delivery failures since implementation', 'Certificate expiry alerts active on 3 services', '100% delivery confirmation monitoring coverage', 'MTTR reduced from 2.5 hours to < 15 minutes'],
    },
    lesson: 'Silent failures in delivery pipelines are worse than loud failures. Always validate the end state — not just the trigger — and alert on delivery confirmation, not just transmission attempt.',
  },
]
