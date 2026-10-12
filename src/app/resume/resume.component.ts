import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  template: `
    <section class="page-intro section">
      <div class="shell resume-heading">
        <div>
          <p class="eyebrow">Resume</p>
          <h1>Senior software engineering across systems, applications, cloud, and data.</h1>
          <p class="page-intro__lead">
            A concise web version of the experience behind this portfolio.
          </p>
        </div>
        <a class="button button--primary" href="/assets/resume/resume.pdf" download>Download PDF</a>
      </div>
    </section>

    <section class="section section--compact">
      <div class="shell resume-layout">
        <div class="resume-main">
          <section class="resume-section">
            <p class="eyebrow">Profile</p>
            <h2>Engineering perspective</h2>
            <p>
              Senior software developer and full-stack engineer with experience spanning software systems, data,
              backend services, cloud infrastructure, and web application development. Comfortable working across
              architecture, implementation, testing, deployment, and production support.
            </p>
          </section>

          <section class="resume-section">
            <p class="eyebrow">Selected experience</p>
            <h2>Recent focus</h2>
            <div class="resume-entry">
              <h3>Cloud / Infrastructure as Code Engineering</h3>
              <p class="resume-entry__meta">AWS · ECS Fargate · EventBridge · OpenTofu / Terraform</p>
              <p>
                Developed and maintained infrastructure patterns for containerized services, event-driven workflows,
                deployment automation, and operational visibility in production environments.
              </p>
            </div>
            <div class="resume-entry">
              <h3>Enterprise Application Development</h3>
              <p class="resume-entry__meta">Java · APIs · SQL · Integration · Public-sector systems</p>
              <p>
                Long-term application and systems engineering across backend services, databases, integrations,
                modernization efforts, and reliability-focused production support.
              </p>
            </div>
          </section>

          <section class="resume-section">
            <p class="eyebrow">Education</p>
            <h2>Formal learning</h2>
            <div class="resume-entry">
              <h3>B.S. Electrical Engineering</h3>
              <p class="resume-entry__meta">Colorado State University · 1991</p>
            </div>
            <div class="resume-entry">
              <h3>Data Science and Analytics Certificate</h3>
              <p class="resume-entry__meta">Cornell University · 2025</p>
            </div>
            <div class="resume-entry">
              <h3>Web Application Development</h3>
              <p class="resume-entry__meta">Bellevue University · Current coursework</p>
            </div>
          </section>
        </div>

        <aside class="resume-sidebar" aria-label="Technical skills">
          <section>
            <p class="eyebrow">Core</p>
            <h2>Languages</h2>
            <p>Java, TypeScript, JavaScript, Python, SQL, C, shell scripting</p>
          </section>
          <section>
            <p class="eyebrow">Applications</p>
            <h2>Frameworks</h2>
            <p>Angular, Spring Boot, Express, REST APIs, Maven, Node.js</p>
          </section>
          <section>
            <p class="eyebrow">Platform</p>
            <h2>Cloud & DevOps</h2>
            <p>AWS, Docker, GitHub Actions, Jenkins, OpenShift, OpenTofu, Terraform</p>
          </section>
          <section>
            <p class="eyebrow">Data</p>
            <h2>Databases</h2>
            <p>PostgreSQL, MongoDB, SQL Server, Informix</p>
          </section>
        </aside>
      </div>
    </section>
  `,
})
export class ResumeComponent {}
