import { TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ResumeComponent] }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ResumeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
