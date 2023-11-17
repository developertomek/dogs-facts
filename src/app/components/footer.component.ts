import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<div class="text-center text-white py-8">
    {{ date }} - Check
    <a
      href="https://twitter.com/developertomek"
      target="_blank"
      class="text-green-400 font-semibold"
      >developertomek</a
    >
  </div>`,
})
export class FooterComponent {
  date = new Date().getFullYear();
}
