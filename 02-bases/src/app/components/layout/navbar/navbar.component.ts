import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive], //Directivas cambian el funcionamiento de los componentes
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
