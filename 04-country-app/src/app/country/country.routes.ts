import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/country-layout/country-layout.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },
      {
        path: 'by-country',
        loadComponent: () => import('./pages/by-country/by-country.component')
      },
      {
        path: 'by-region',
        loadComponent: () => import('./pages/by-region/by-region.component')
      },
      {
        path: 'by-country/:code',
        loadComponent: () => import('./pages/country-page/country-page.component')
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },
];

export default countryRoutes;
