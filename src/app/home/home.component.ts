import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero section">
      <div class="shell hero__grid">
        <div class="hero__copy">
          <p class="eyebrow">Senior Software Engineer · Cloud · APIs · Data</p>
          <h1>Build systems that are clear, reliable, and built to last.</h1>
          <p class="hero__lead">
            I bring a systems perspective to modern application development—combining decades of engineering
            experience with current work in Angular, TypeScript, cloud infrastructure, APIs, DevOps, and data.
          </p>

          <div class="button-row" aria-label="Portfolio actions">
            <a class="button button--primary" routerLink="/projects">Explore my work</a>
            <a class="button button--secondary" routerLink="/resume">View resume</a>
          </div>
        </div>

        <aside class="hero-card" aria-label="Engineering profile">
          <p class="hero-card__label">ENGINEERING PROFILE</p>
          <dl class="fact-list">
            <div>
              <dt>Foundation</dt>
              <dd>Electrical engineering + software systems</dd>
            </div>
            <div>
              <dt>Current focus</dt>
              <dd>Java, Angular, TypeScript, cloud, IaC</dd>
            </div>
            <div>
              <dt>Operating principle</dt>
              <dd>Make behavior understandable and repeatable</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section class="section section--quiet">
      <div class="shell">
        <div class="section-heading">
          <p class="eyebrow">How I work</p>
          <h2>Engineering before ornament.</h2>
          <p>
            Good software should make the next decision easier—for the user, the developer, and the person
            responsible for operating it later.
          </p>
        </div>

        <div class="principle-grid">
          <article class="principle-card">
            <span class="principle-card__index">01</span>
            <h3>Clarity</h3>
            <p>Prefer explicit contracts, understandable state, and code that explains its intent.</p>
          </article>
          <article class="principle-card">
            <span class="principle-card__index">02</span>
            <h3>Reliability</h3>
            <p>Use automation and tests to turn assumptions into evidence before changes reach users.</p>
          </article>
          <article class="principle-card">
            <span class="principle-card__index">03</span>
            <h3>Evolution</h3>
            <p>Modernize deliberately: preserve what works, replace what does not, and keep learning.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell">
        <div class="section-heading section-heading--split">
          <div>
            <p class="eyebrow">Selected work</p>
            <h2>A library of projects, not a wall of logos.</h2>
          </div>
          <a class="text-link" routerLink="/projects">View all projects →</a>
        </div>

        <div class="project-grid">
          @for (project of featuredProjects; track project.slug; let index = $index) {
            <article class="project-card">
              <div class="project-card__meta">
                <span>{{ (index + 1).toString().padStart(2, '0') }}</span>
                <span>{{ project.category }}</span>
              </div>
              <h3>{{ project.title }}</h3>
              <p class="project-card__subtitle">{{ project.subtitle }}</p>
              <p>{{ project.summary }}</p>
              <ul class="tag-list" aria-label="Technologies used">
                @for (technology of project.technologies.slice(0, 4); track technology) {
                  <li>{{ technology }}</li>
                }
              </ul>
              <a class="card-link" [routerLink]="['/projects', project.slug]">
                Read case notes <span aria-hidden="true">→</span>
              </a>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section section--quiet">
      <div class="shell next-chapters">
        <div class="section-heading">
          <p class="eyebrow">Bucket list · next chapters</p>
          <h2>Still building toward something.</h2>
        </div>

        <ol class="chapter-list">
          <li><span>01</span><strong>Contribute engineering work to a NASA mission or program.</strong></li>
          <li><span>02</span><strong>Spend meaningful time living and working internationally.</strong></li>
          <li><span>03</span><strong>Keep combining software, systems, data, and cloud into one engineering toolkit.</strong></li>
          <li><span>04</span><strong>Make more room for music, travel, and the projects worth choosing.</strong></li>
        </ol>
      </div>
    </section>
  `,
})
export class HomeComponent {
  readonly featuredProjects: readonly Project[];

  constructor(projectService: ProjectService) {
    this.featuredProjects = projectService.getFeatured();
  }
}
