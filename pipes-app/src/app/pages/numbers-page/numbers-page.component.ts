import { Component, signal } from '@angular/core';
import { Person } from '../../../../../01-ts-intro/src/topics/08-classes';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.component.html',
  styles: ``
})
export default class NumbersPageComponent {
  totalSells = signal(2_567_789.5567);
  percent = signal(0.4856);

}
