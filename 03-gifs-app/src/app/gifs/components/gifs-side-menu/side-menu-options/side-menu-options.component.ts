import { Component, inject } from '@angular/core';
import { MenuOption } from '../../../interfaces/MenuOption';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '../../../services/gifs.service';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'gifs-side-menu-options',
  templateUrl: './side-menu-options.component.html',
})
export default class SideMenuOptionsComponent {
  gifService = inject(GifService);
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs populares',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search'
    }
  ]
}
