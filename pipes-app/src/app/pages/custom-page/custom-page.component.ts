import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [toggleCasePipe],
  templateUrl: './custom-page.component.html',
  styles: ``
})
export default class CustomPageComponent {
  name = signal('Angular');
  upperCase = signal(true);
}
