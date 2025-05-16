import {
  Component,
  computed,
  input,
  linkedSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  pages = input(0);
  currentPage = input<number>(1);
  //You can use the signal function to hold some state in your Angular code. Sometimes, this state depends on some other state.
  activePage = linkedSignal(this.currentPage);
  //Create a computed Signal which derives a reactive value from an expression.
  getPagesList = computed(() => {
    return Array.from({ length: this.pages() }, (_, i) => i + 1);
  });
}
