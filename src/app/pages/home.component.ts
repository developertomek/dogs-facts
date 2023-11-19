import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FactsService } from '../services/facts.service';
import { Fact } from '../interfaces/Fact.interface';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="pt-16 m-auto w-full flex justify-between flex-wrap items-center min-h-fit"
    >
      <div class="text-white w-full sm:w-1/2">
        <h1 class="text-4xl mb-4 font-semibold">
          Unleash a World of Random Dog Facts
        </h1>
        <h2 class="mb-8 text-md">
          Dive into the fascinating world of canine trivia and discover the
          endearing quirks, incredible feats, and paw-some secrets that make our
          furry companions so special!
        </h2>
        <button
          (click)="generateOneAndScroll(generated)"
          class="px-8 bg-green-400 rounded-md text-black leading-9 w-full hover:scale-105 transition-all"
        >
          Generate
        </button>
      </div>
      <img src="./assets/dog.svg" class="w-72 mx-auto mt-8" />
    </div>
    <div #generated class="mt-16">
      <div class="h-80 flex items-center">
        @if (fact$ | async; as data) {
        <div class="text-white mx-auto">
          {{ data.facts[0] }}
        </div>
        } @else {
        <div class="text-red-500 text-2xl mx-auto">
          {{ errorMessage }}
        </div>
        }
      </div>
    </div>
  `,
})
export class HomeComponent {
  errorMessage: string =
    'Server Error. Please refresh the page or try again later.';

  fact$!: Observable<Fact>;

  constructor(private facts: FactsService) {}

  generateOneAndScroll(el: HTMLElement): void {
    this.generateOne();
    el.scrollIntoView({ behavior: 'smooth' });
  }

  generateOne(): void {
    this.fact$ = this.facts.getOne();
  }
}
