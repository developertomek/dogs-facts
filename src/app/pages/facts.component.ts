import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FactsService } from '../services/facts.service';
import { Observable, catchError, ignoreElements, of } from 'rxjs';
import { Fact } from '../interfaces/Fact.interface';

@Component({
  selector: 'app-random-facts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div
      class="pt-28 m-auto w-full flex justify-center flex-wrap items-center min-h-fit"
    >
      <input
        type="number"
        class="bg-secondary rounded-md px-8 leading-9 text-md text-center text-white w-60"
        placeholder="number of facts 1-10"
        min="1"
        max="10"
        inputmode="numeric"
        [formControl]="factsNumber"
      />
      <button
        class="px-8 bg-green-400 rounded-md text-black leading-9  hover:scale-105 ml-4 transition-all disabled:bg-secondary disabled:hover:scale-100 disabled:text-primary"
        [disabled]="!factsNumber.valid"
        (click)="generateFacts()"
      >
        Generate facts
      </button>
    </div>
    @if (facts$ | async; as data){
    <ul class="text-white mt-16 list-disc">
      @for(fact of data.facts; track fact) {
      <li class="mb-4">{{ fact }}</li>
      }
    </ul>
    } @else { @if (error$ | async; as error) {
    <div class="text-red-500 text-2xl mx-auto">
      {{ error }}
    </div>
    }}
  `,
})
export class FactsComponent implements OnInit {
  factsNumber!: FormControl<null | string>;
  facts$!: Observable<Fact>;
  error$!: Observable<string>;

  constructor(private facts: FactsService) {}

  ngOnInit(): void {
    this.factsNumber = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]);
  }

  generateFacts(): void {
    if (this.factsNumber.value) {
      this.facts$ = this.facts.getFacts(+this.factsNumber.value);
      this.error$ = this.facts$.pipe(
        ignoreElements(),
        catchError((err: Error) => of(err.message))
      );
    }
  }
}
