import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Project, ProjectCategory } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <section class="page-intro section">
      <div class="shell">
        <p class="eyebrow">Project library</p>
        <h1>Work that shows how I think.</h1>
        <p class="page-intro__lead">
          These projects span modern Angular coursework, APIs, security, DevOps, and infrastructure patterns.
          The common thread is not a framework—it is making systems easier to reason about.
        </p>
      </div>
    </section>

    <section class="section section--compact">
      <div class="shell">
        <div class="filter-bar" aria-label="Project filters">
          <div class="filter-field filter-field--search">
            <label for="project-search">Search projects</label>
            <input
              id="project-search"
              type="search"
              [formControl]="searchControl"
              placeholder="Angular, API, testing..."
            >
          </div>

          <div class="filter-field">
            <label for="project-category">Category</label>
            <select id="project-category" [formControl]="categoryControl">
              @for (category of categories; track category) {
                <option [value]="category">{{ category }}</option>
              }
            </select>
          </div>
        </div>

        <p class="results-count" aria-live="polite">
          Showing {{ filteredProjects.length }} project{{ filteredProjects.length === 1 ? '' : 's' }}
        </p>

        @if (filteredProjects.length > 0) {
          <div class="project-grid project-grid--catalog">
            @for (project of filteredProjects; track project.slug; let index = $index) {
              <article class="project-card project-card--catalog">
                <div class="project-card__meta">
                  <span>{{ (index + 1).toString().padStart(2, '0') }}</span>
                  <span>{{ project.category }}</span>
                </div>
                <h2>{{ project.title }}</h2>
                <p class="project-card__subtitle">{{ project.subtitle }}</p>
                <p>{{ project.summary }}</p>
                <ul class="tag-list" aria-label="Technologies used">
                  @for (technology of project.technologies; track technology) {
                    <li>{{ technology }}</li>
                  }
                </ul>
                <a class="card-link" [routerLink]="['/projects', project.slug]">
                  Open project <span aria-hidden="true">→</span>
                </a>
              </article>
            }
          </div>
        } @else {
          <div class="empty-state">
            <h2>No projects match those filters.</h2>
            <p>Clear the search or choose another category.</p>
            <button class="button button--secondary" type="button" (click)="clearFilters()">Clear filters</button>
          </div>
        }
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly categories: readonly (ProjectCategory | 'All')[] = ['All', 'Angular', 'API', 'DevOps', 'Data'];
  readonly searchControl = new FormControl<string>('', { nonNullable: true });
  readonly categoryControl = new FormControl<ProjectCategory | 'All'>('All', { nonNullable: true });

  filteredProjects: readonly Project[] = [];

  constructor(private readonly projectService: ProjectService) {
    this.applyFilters();

    this.searchControl.valueChanges.subscribe(() => this.applyFilters());
    this.categoryControl.valueChanges.subscribe(() => this.applyFilters());
  }

  clearFilters(): void {
    this.searchControl.setValue('', { emitEvent: false });
    this.categoryControl.setValue('All', { emitEvent: false });
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredProjects = this.projectService.search(
      this.searchControl.value,
      this.categoryControl.value,
    );
  }
}
