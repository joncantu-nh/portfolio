import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="page-intro section">
      <div class="shell about-intro">
        <div>
          <p class="eyebrow">About</p>
          <h1>A long engineering career, still moving forward.</h1>
          <p class="page-intro__lead">
            My path started in electrical engineering and grew through systems, software, data, cloud, and modern web
            application development. I value experience, but I do not treat experience as permission to stop learning.
          </p>
        </div>

        <div class="portrait-placeholder" role="img" aria-label="Profile photo placeholder">
          <span>JC</span>
          <small>Replace with profile photo</small>
        </div>
      </div>
    </section>

    <section class="section section--compact">
      <div class="shell story-grid">
        <div class="prose">
          <h2>What ties the work together</h2>
          <p>
            Whether the problem is a Java service, a database model, an AWS deployment, an Angular form, or a build
            pipeline, I tend to approach it the same way: identify the contract, make the state visible, reduce
            unnecessary moving parts, and create a feedback loop that tells us whether the system is behaving.
          </p>
          <p>
            Modern frontend development is another layer in that progression. Angular and TypeScript are useful to me
            because they reward explicit structure—components with responsibilities, typed data, predictable routing,
            testable behavior, and forms whose state can be reasoned about rather than guessed at.
          </p>
        </div>

        <aside class="quote-panel">
          <p>“Modernize deliberately: preserve what works, replace what does not, and keep learning.”</p>
        </aside>
      </div>
    </section>

    <section class="section section--quiet">
      <div class="shell">
        <div class="section-heading">
          <p class="eyebrow">Professional arc</p>
          <h2>One toolkit, expanded over time.</h2>
        </div>
        <H3>LinkedIn</H3>
        <p>
          <a href="https://www.linkedin.com/in/joncantu/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/joncantu/
          </a>
        </p>

        <H2>Highlights</H2>
        <ol class="timeline">
          <li>
            <span class="timeline__year">1991</span>
            <div>
              <h3>Electrical engineering foundation</h3>
              <p>B.S. Electrical Engineering, Colorado State University. Systems thinking came first.</p>
            </div>
          </li>
          <li>
            <span class="timeline__year">Career</span>
            <div>
              <h3>Software, systems, and data</h3>
              <p>Enterprise development across Java, databases, integration, public-sector systems, and long-lived applications.</p>
            </div>
          </li>
          <li>
            <span class="timeline__year">Cloud</span>
            <div>
              <h3>Infrastructure and delivery</h3>
              <p>AWS, containers, infrastructure as code, CI/CD, observability, and operational automation.</p>
            </div>
          </li>
          <li>
            <span class="timeline__year">Now</span>
            <div>
              <h3>Modern web application development</h3>
              <p>Angular, TypeScript, REST APIs, testing, and continued formal coursework in web application development.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  `,
})
export class AboutComponent {}
