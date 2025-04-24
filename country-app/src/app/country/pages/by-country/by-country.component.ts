import { Component } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountrySearchInputComponent } from "../../components/search-input/country-search-input.component";

@Component({
  selector: 'app-by-country',
  imports: [CountryListComponent, CountrySearchInputComponent],
  templateUrl: './by-country.component.html',
  styles: ``
})
export default class ByCountryComponent {

}
