import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero-page',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball-page',
    component: DragonballPageComponent
  },
  {
    path: 'dragonball-super-page',
    component: DragonballSuperPageComponent
  },
  {
    path: '**', //Redirect to the home page if the route is not found
    redirectTo: ''
  }
];
