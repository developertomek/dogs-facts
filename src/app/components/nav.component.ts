import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-between max-w-960 m-auto h-16 items-center px-8">
      <a routerLink="/" class="hover:cursor-pointer font-semibold">Doggo</a>
      <button>
        <a routerLink="/" class="py-2 px-8 bg-green-400 rounded-md"
          >Want more?</a
        >
      </button>
    </div>
  `,
})
export class NavCoponent {}
