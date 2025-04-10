import { Component, input } from '@angular/core';
import { FilterSortBarIconComponent } from '../filter-sort-bar-icon/filter-sort-bar-icon.component';
import { ICON_FILTER } from '../../../../assets/icons/svg-paths/svg-paths';
import { ICON_CHOOSE_DISPLAY_OUTLINE } from '../../../../assets/icons/svg-paths/svg-paths';
import { FilterSortBarDynamicTextComponent } from '../filter-sort-bar-dynamic-text/filter-sort-bar-dynamic-text.component';

@Component({
  selector: 'app-filter-sort-bar',
  imports: [FilterSortBarDynamicTextComponent, FilterSortBarIconComponent],
  templateUrl: './filter-sort-bar.component.html',
  styleUrl: './filter-sort-bar.component.scss',
})
export class FilterSortBarComponent {
  filterIcon = ICON_FILTER;
  chooseDisplayIcon = ICON_CHOOSE_DISPLAY_OUTLINE;
}
