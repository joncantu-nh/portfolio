import { Project } from '../models/project';

/**
 * Public portfolio project data.
 *
 * Keep this file intentionally boring: it is content, not application logic.
 * Replace repository URLs with the exact public URLs you want visitors to use.
 */
export const PROJECTS: readonly Project[] = [
  {
    slug: 'whatabook',
    title: 'WhatABook',
    subtitle: 'Online bookstore rebuilt as a modern application case study',
    category: 'API',
    summary:
      'A bookstore application centered on API-driven data, predictable routes, and a clean separation between presentation and service responsibilities.',
    overview:
      'WhatABook began as coursework around web services and API integration. In this portfolio it serves as a bridge between earlier REST-focused work and the component, routing, typing, and testing practices used in modern Angular applications.',
    technologies: ['Angular', 'TypeScript', 'REST APIs', 'Node.js', 'Testing'],
    highlights: [
      'Master/detail navigation inspired by a bookstore catalog',
      'Typed data contracts instead of loosely structured view data',
      'Clear separation between UI components and data/service concerns',
      'Testable routing and application behavior',
    ],
    course: 'Bellevue University — Web Application Development',
    githubUrl: 'https://github.com/',
    featured: true,
  },
  {
    slug: 'rpg-character-builder',
    title: 'RPG Character Builder',
    subtitle: 'Angular coursework applied through routing, forms, services, and TDD',
    category: 'Angular',
    summary:
      'A progressively developed Angular application used to practice standalone components, routing, services, testing, reactive forms, and guarded navigation.',
    overview:
      'The RPG Character Builder is intentionally iterative. Each course module adds another architectural concern while retaining a coherent application: routes, parameterized views, services, forms, validation, authentication state, and test-first behavior.',
    technologies: ['Angular 22', 'TypeScript', 'Reactive Forms', 'Jasmine', 'Karma'],
    highlights: [
      'Standalone Angular components and parameterized routes',
      'Template-driven and reactive form techniques',
      'Functional route guards and authentication state',
      'FirefoxHeadless automated testing and TDD workflow',
    ],
    course: 'WEB425 — Angular with TypeScript',
    githubUrl: 'https://github.com/',
    featured: true,
  },
  {
    slug: 'keycloak-security-demo',
    title: 'Keycloak Security Demo',
    subtitle: 'Identity and access patterns across a modern web stack',
    category: 'API',
    summary:
      'A practical security demonstration connecting a browser application, backend services, containers, and Keycloak-based identity concepts.',
    overview: 'This project explores authentication and authorization as system concerns rather than UI tricks. It reflects the approach used in larger enterprise systems: identity belongs at a trusted boundary, while the frontend consumes and responds to authenticated state.',
    technologies: ['Angular', 'Java', 'Keycloak', 'Docker', 'OAuth/OIDC'],
    highlights: [
      'Containerized local identity provider',
      'Separation of browser navigation state from server-side security',
      'Modern identity concepts applied to an enterprise-style architecture',
      'Useful preparation for security-sensitive government application work',
    ],
    githubUrl: 'https://github.com/joncantu-nh/keycloak-demo',
    featured: true,
  },
  {
    slug: 'devops-pipeline-study',
    title: 'DevOps Pipeline Study',
    subtitle: 'Turning build, test, and release feedback into an engineering control loop',
    category: 'DevOps',
    summary:
      'A collection of CI/CD exercises focused on fast feedback, repeatable builds, automated tests, quality gates, and lower-risk delivery.',
    overview:
      'The work treats DevOps as a feedback system rather than a collection of tools. The emphasis is on making defects visible earlier, making builds repeatable, and reducing the number of manual steps between a code change and trustworthy evidence.',
    technologies: ['GitHub Actions', 'CI/CD', 'Node.js', 'Automated Testing', 'Git'],
    highlights: [
      'Repeatable dependency installation and build stages',
      'Automated tests as merge/release gates',
      'Pipeline risk analysis and incremental improvement',
      'Emphasis on flow, feedback, and operational clarity',
    ],
    course: 'Bellevue University — DevOps coursework',
    featured: false,
  },
  {
    slug: 'cloud-infrastructure-patterns',
    title: 'Cloud Infrastructure Patterns',
    subtitle: 'Infrastructure as code, event-driven services, and operational reliability',
    category: 'DevOps',
    summary:
      'A portfolio-safe summary of cloud infrastructure patterns used across production engineering work, without exposing customer or program-sensitive details.',
    overview:
      'This entry represents the engineering patterns behind production cloud work: infrastructure as code, containerized services, event-driven integration, observability, and repeatable deployment. Most of my work in this area was on the Medicare BFD (Beneficiary FHIR Data) project. The link to "Source/repository" is a query of my PRs while on this project. I also worked on AWS deployment of the https://www.sciencebase.gov site which is a USGS project.',
    technologies: ['AWS', 'ECS Fargate', 'EventBridge', 'OpenTofu', 'Terraform'],
    highlights: [
      'Infrastructure expressed as version-controlled code',
      'Containerized service deployment patterns',
      'Event-driven integration and operational visibility',
      'Design for repeatability, traceability, and recovery',
    ],
    githubUrl: 'https://github.com/CMSgov/beneficiary-fhir-data/pulls?q=is%3Apr+author%3Ajonathan-cantu-icf',
    featured: false,
  },
];
