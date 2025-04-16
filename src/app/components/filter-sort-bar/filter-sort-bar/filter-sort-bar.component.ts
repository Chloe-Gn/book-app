import { Component, input, OnInit } from '@angular/core';
import { FilterSortBarIconComponent } from '../filter-sort-bar-icon/filter-sort-bar-icon.component';
import { ICON_FILTER } from '../../../../assets/icons/svg-paths/svg-paths';
import { ICON_CHOOSE_DISPLAY_OUTLINE } from '../../../../assets/icons/svg-paths/svg-paths';
import { FilterSortBarDynamicTextComponent } from '../filter-sort-bar-dynamic-text/filter-sort-bar-dynamic-text.component';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-filter-sort-bar',
  imports: [FilterSortBarDynamicTextComponent, FilterSortBarIconComponent],
  templateUrl: './filter-sort-bar.component.html',
  styleUrl: './filter-sort-bar.component.scss',
})
export class FilterSortBarComponent implements OnInit {
  books = input<Book[]>();
  numberOfBooks: string = '';
  filterIcon = ICON_FILTER;
  chooseDisplayIcon = ICON_CHOOSE_DISPLAY_OUTLINE;

  ngOnInit(): void {
    const books = this.books();
    const bookLength: number | undefined = books?.length;
    console.log(bookLength);
    switch (bookLength) {
      case 0: {
        this.numberOfBooks = 'Pas de livres';
        break;
      }

      case 1: {
        this.numberOfBooks = '1 livre';
        break;
      }

      default: {
        this.numberOfBooks = bookLength + ' livres';
        break;
      }
    }
  }
}
