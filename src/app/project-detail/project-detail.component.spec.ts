import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { ProjectDetailComponent } from './project-detail.component';

describe('ProjectDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ slug: 'rpg-character-builder' }),
            },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProjectDetailComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should load the requested project', () => {
    const fixture = TestBed.createComponent(ProjectDetailComponent);
    expect(fixture.componentInstance.project?.slug).toBe('rpg-character-builder');
  });
});
