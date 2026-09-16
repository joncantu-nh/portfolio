import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <header class="site-header">
      <div class="shell site-header__inner">
        <a class="brand" routerLink="/" aria-label="JC portfolio home">
          <span class="brand__mark" aria-hidden="true">JC</span>
          <span class="brand__text">
            <strong>Jonathan Cantu</strong>
            <strong>Software Engineer</strong>
            <span>Systems · Applications · Data</span>
          </span>
        </a>

        <nav class="site-nav" aria-label="Primary navigation">
          <a routerLink="/" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          <a routerLink="/projects" routerLinkActive="is-active">Projects</a>
          <a routerLink="/about" routerLinkActive="is-active">About</a>
          <a routerLink="/resume" routerLinkActive="is-active">Resume</a>
        </nav>
      </div>
    </header>

    <main id="main-content">
      <router-outlet />
    </main>

    <footer class="site-footer">
      <div class="shell site-footer__inner">
        <div>
          <strong>Built deliberately.</strong>
          <p>Angular · TypeScript · accessible HTML · testable behavior</p>
        </div>
        <p>© {{ currentYear }} JC</p>
      </div>
    </footer>
  `,
})
export class AppComponent {
  readonly currentYear = new Date().getFullYear();
}
