import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (project) {
      <article>
        <section class="page-intro section">
          <div class="shell">
            <a class="back-link" routerLink="/projects">← Back to project library</a>
            <p class="eyebrow">{{ project.category }} · Case notes</p>
            <h1>{{ project.title }}</h1>
            <p class="page-intro__lead">{{ project.subtitle }}</p>
          </div>
        </section>

        <section class="section section--compact">
          <div class="shell detail-grid">
            <div class="prose">
              <h2>Overview</h2>
              <p>{{ project.overview }}</p>

              <h2>What this project demonstrates</h2>
              <ul class="check-list">
                @for (highlight of project.highlights; track highlight) {
                  <li>{{ highlight }}</li>
                }
              </ul>
            </div>

            <aside class="detail-sidebar" aria-label="Project details">
              <div class="detail-panel">
                <h2>Technology</h2>
                <ul class="tag-list tag-list--stacked">
                  @for (technology of project.technologies; track technology) {
                    <li>{{ technology }}</li>
                  }
                </ul>
              </div>

              @if (project.course) {
                <div class="detail-panel">
                  <h2>Context</h2>
                  <p>{{ project.course }}</p>
                </div>
              }

              @if (project.githubUrl) {
                <div class="detail-panel">
                  <h2>Source</h2>
                  <a class="text-link" [href]="project.githubUrl" target="_blank" rel="noopener noreferrer">
                    View repository ↗
                  </a>
                </div>
              }
            </aside>
          </div>
        </section>
      </article>
    } @else {
      <section class="section">
        <div class="shell empty-state">
          <p class="eyebrow">Project not found</p>
          <h1>That case note is not in the library.</h1>
          <a class="button button--primary" routerLink="/projects">Return to projects</a>
        </div>
      </section>
    }
  `,
})
export class ProjectDetailComponent {
  readonly project: Project | undefined;

  constructor(route: ActivatedRoute, projectService: ProjectService) {
    const slug = route.snapshot.paramMap.get('slug') ?? '';
    this.project = projectService.getBySlug(slug);
  }
}
