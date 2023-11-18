import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fact } from '../interfaces/Fact.interface';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://dog-api.kinduff.com/api/facts';

  getOne(): Observable<Fact> {
    return this.http.get<Fact>(this.API_URL + '?number=1');
  }
}
