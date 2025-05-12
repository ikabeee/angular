import { Component, input } from '@angular/core';
import { Country } from '../../../components/interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { AlphaCountry } from '../../../components/interfaces/alpha-country.interface';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information-page.component.html',
  styles: ``
})
export class CountryInformationComponent {
  country = input.required<AlphaCountry>()
}
