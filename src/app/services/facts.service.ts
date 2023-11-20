import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, shareReplay } from 'rxjs';
import { DogImg, Fact } from '../interfaces/Fact.interface';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  constructor(private http: HttpClient) {}

  API_FACTS_URL = 'https://dog-api.kinduff.com/api/facts';
  API_IMG_URL = ' https://dog.ceo/api/breeds/image/random';

  getOne(): Observable<[Fact, DogImg]> {
    return combineLatest([this.getFacts(1), this.getRandomImg(1)]).pipe(
      shareReplay()
    );
  }

  private getFacts(num: number): Observable<Fact> {
    return this.http.get<Fact>(`${this.API_FACTS_URL}?number=${num}`);
  }

  private getRandomImg(num: number): Observable<DogImg> {
    return this.http.get<DogImg>(`${this.API_IMG_URL}?number=${num}`);
  }
}
