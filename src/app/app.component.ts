import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavCoponent } from './components/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <app-nav />
    <div class="max-w-960 m-auto px-8">
      <router-outlet></router-outlet>
    </div>`,
  imports: [CommonModule, RouterOutlet, NavCoponent],
})
export class AppComponent {}
