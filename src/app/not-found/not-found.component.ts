import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section not-found">
      <div class="shell">
        <p class="eyebrow">404 · Missing page</p>
        <h1>This route does not lead anywhere useful.</h1>
        <p>The good news: the rest of the portfolio is still where it belongs.</p>
        <div class="button-row">
          <a class="button button--primary" routerLink="/">Go home</a>
          <a class="button button--secondary" routerLink="/projects">Browse projects</a>
        </div>
      </div>
    </section>
  `,
})
export class NotFoundComponent {}
