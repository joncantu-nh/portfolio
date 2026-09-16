import { Injectable } from '@angular/core';
import { PROJECTS } from '../data/projects';
import { Project, ProjectCategory } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projects = PROJECTS;

  getAll(): readonly Project[] {
    return this.projects;
  }

  getFeatured(): readonly Project[] {
    return this.projects.filter((project) => project.featured);
  }

  getBySlug(slug: string): Project | undefined {
    return this.projects.find((project) => project.slug === slug);
  }

  search(term: string, category: ProjectCategory | 'All'): readonly Project[] {
    const normalizedTerm = term.trim().toLowerCase();

    return this.projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category;
      const searchableText = [
        project.title,
        project.subtitle,
        project.summary,
        ...project.technologies,
      ]
        .join(' ')
        .toLowerCase();

      const matchesTerm = normalizedTerm.length === 0 || searchableText.includes(normalizedTerm);

      return matchesCategory && matchesTerm;
    });
  }
}
