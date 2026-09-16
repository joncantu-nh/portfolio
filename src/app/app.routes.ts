import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'JC | Software Engineer' },
  { path: 'about', component: AboutComponent, title: 'About | JC' },
  { path: 'resume', component: ResumeComponent, title: 'Resume | JC' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects | JC' },
  { path: 'projects/:slug', component: ProjectDetailComponent, title: 'Project | JC' },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found | JC' },
];
