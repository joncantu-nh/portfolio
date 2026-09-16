import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should begin with projects visible', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    expect(fixture.componentInstance.filteredProjects.length).toBeGreaterThan(0);
  });

  it('should filter by typed search control', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;
    component.searchControl.setValue('Keycloak');
    expect(component.filteredProjects.some((project) => project.slug === 'keycloak-security-demo')).toBeTrue();
  });

  it('should clear filters', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;
    component.searchControl.setValue('Keycloak');
    component.categoryControl.setValue('API');
    component.clearFilters();
    expect(component.searchControl.value).toBe('');
    expect(component.categoryControl.value).toBe('All');
  });
});
