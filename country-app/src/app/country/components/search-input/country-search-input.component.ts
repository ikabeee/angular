import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchInputComponent {
  placeholder = input('Buscar');
  value = output<String>();
  onSearch (value: string){
    console.log({value})
  }
}
