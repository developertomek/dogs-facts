import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavCoponent } from './components/nav.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="min-h-screen flex flex-col bg-primary">
      <app-nav />
      <div class="max-w-960 m-auto px-8 flex-grow">
        <router-outlet></router-outlet>
      </div>
      <app-footer />
    </div>
  `,
  imports: [CommonModule, RouterOutlet, NavCoponent, FooterComponent],
})
export class AppComponent {}
