import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="text-orange-500">hello from home</div> `,
})
export class HomeComponent {
  title = 'test';
}
