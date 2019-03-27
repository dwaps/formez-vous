import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container-fluid">
      <app-books></app-books>
    </div>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'projet1';
}
