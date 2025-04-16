import { Component, inject, input, OnInit } from '@angular/core';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar/nav-bar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TopBarBackButtonComponent } from '../../components/top-bar/top-bar-back-button/top-bar-back-button.component';
import { FilterSortBarComponent } from '../../components/filter-sort-bar/filter-sort-bar/filter-sort-bar.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { HorizontalListCardComponent } from '../../components/line-list/horizontal-list-card/horizontal-list-card.component';
import { HorizontalCardComponent } from '../../components/line-list/horizontal-card/horizontal-card.component';
import { Book } from '../../models/book.model';
import { MockBooksService } from '../../services/bookService/mock-books.service';

@Component({
  selector: 'app-category-page',
  imports: [
    FilterSortBarComponent,
    TopBarComponent,
    HorizontalListCardComponent,
    HorizontalCardComponent,
    NavBarComponent,
    RouterLink,
    SpacerComponent,
    TopBarBackButtonComponent,
  ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss',
})
export class CategoryPageComponent implements OnInit {
  constructor(private bookService: MockBooksService) {}

  title: string = '';
  books: Book[] = [];

  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const state = history.state as { title: string };
    const categId = history.state as { id: number };
    console.log(history.state);
    this.title = state?.title || 'Sélection';
    this.books = this.bookService.getBooks(categId.id as number);
  }
}
