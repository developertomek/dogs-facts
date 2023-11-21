import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { FactsComponent } from './pages/facts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'random-facts',
    component: FactsComponent,
  },
];
