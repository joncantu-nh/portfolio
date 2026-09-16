import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return portfolio projects', () => {
    expect(service.getAll().length).toBeGreaterThan(0);
  });

  it('should return a project by slug', () => {
    expect(service.getBySlug('rpg-character-builder')?.title).toBe('RPG Character Builder');
  });

  it('should return only featured projects', () => {
    expect(service.getFeatured().every((project) => project.featured)).toBeTrue();
  });

  it('should filter projects by search term', () => {
    const results = service.search('keycloak', 'All');
    expect(results.some((project) => project.slug === 'keycloak-security-demo')).toBeTrue();
  });

  it('should filter projects by category', () => {
    const results = service.search('', 'Angular');
    expect(results.every((project) => project.category === 'Angular')).toBeTrue();
  });
});
