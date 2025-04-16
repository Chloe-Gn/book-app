import { Component, input } from '@angular/core';

@Component({
  selector: 'app-filter-sort-bar-dynamic-text',
  imports: [],
  templateUrl: './filter-sort-bar-dynamic-text.component.html',
  styleUrl: './filter-sort-bar-dynamic-text.component.scss',
})
export class FilterSortBarDynamicTextComponent {
  numberOfBooks = input<string>();
}
