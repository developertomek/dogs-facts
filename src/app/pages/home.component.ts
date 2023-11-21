import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FactsService } from '../services/facts.service';
import { DogImg, Fact } from '../interfaces/Fact.interface';
import { Observable, catchError, ignoreElements, of } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="pt-28 m-auto w-full flex justify-between flex-wrap items-center min-h-fit"
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
          (click)="generateOneAndScroll(content)"
          class="px-8 bg-green-400 rounded-md text-black leading-9 w-full hover:scale-105 transition-all disabled:bg-secondary disabled:hover:scale-100 disabled:text-primary"
          [disabled]="generated()"
        >
          Generate
        </button>
      </div>
      <img src="./assets/dog.svg" class="w-72 mx-auto mt-8" />
    </div>

    <div #content class="mt-16">
      @if (generated()) {
      <div class="h-80 flex items-center">
        @if (fact$ | async; as data) {
        <div class="text-white mx-auto text-center">
          <div class="mb-4">{{ data[0].facts[0] }}</div>
          <img
            src="{{ data[1].message }}"
            class="mx-auto mb-8 max-h-96 max-w-96 block"
          />
          <button class="hover:scale-105 transition-all" routerLink="/random">
            <a
              routerLink="/random-facts"
              class="text-black py-2 px-8 bg-green-400 rounded-md"
              >Want more?</a
            >
          </button>
        </div>
        } @else { @if (error$ | async; as error) {
        <div class="text-red-500 text-2xl mx-auto">
          {{ error }}
        </div>
        } @else {
        <img
          class="animate-spin h-6 w-6 mx-auto"
          src="./../../assets/loader.svg"
        />
        }}
      </div>
      }
    </div>
  `,
})
export class HomeComponent {
  errorMessage: string =
    'Server Error. Please refresh the page or try again later.';
  error$!: Observable<string>;
  fact$!: Observable<[Fact, DogImg]>;
  generated = signal<boolean>(false);

  constructor(private facts: FactsService) {}

  generateOneAndScroll(el: HTMLElement): void {
    this.generateOne();
    el.scrollIntoView({ behavior: 'smooth' });
  }

  generateOne(): void {
    this.generated.set(true);
    this.fact$ = this.facts.getOne();
    this.error$ = this.fact$.pipe(
      ignoreElements(),
      catchError(() => of(this.errorMessage))
    );
  }
}
