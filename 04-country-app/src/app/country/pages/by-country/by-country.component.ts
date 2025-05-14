import { Component, inject, resource, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountrySearchInputComponent } from "../../components/search-input/country-search-input.component";
import { CountryService } from '../../services/country.service';

import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country',
  imports: [CountryListComponent, CountrySearchInputComponent],
  templateUrl: './by-country.component.html',
  styles: ``
})
export default class ByCountryComponent {
  countryService = inject(CountryService);

  query = signal('');

  countryResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({request}) => {
      if(!request.query) return of([]);
      return this.countryService.searchByCountry(request.query);
    }
  })

  // countryResource = resource({
  //   request: () => ({query: this.query()}),
  //   loader: async ({request}) => {
  //     if(!request.query) return [];
  //     return await firstValueFrom(this.countryService.searchByCountry(request.query));
  //   }
  // })
}
