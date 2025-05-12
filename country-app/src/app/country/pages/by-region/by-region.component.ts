import { Component, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Country } from '../../components/interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  imports: [CountryListComponent],
  templateUrl: './by-region.component.html',
  styles: ``
})
export default class ByRegionComponent {
  countries = signal<Country[]>([])
}
