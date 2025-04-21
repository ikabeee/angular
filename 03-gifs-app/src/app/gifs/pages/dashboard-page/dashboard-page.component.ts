import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GifsSideMenuComponent } from '../../components/gifs-side-menu/gifs-side-menu.component';

@Component({
  imports: [RouterOutlet, GifsSideMenuComponent],
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {

}
