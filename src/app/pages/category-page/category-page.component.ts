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
  //cardObject = input();
  //cardObject will be a method that gets the book per category

  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const state = history.state as { title: string };
    this.title = state?.title || 'Sélection';
    this.books = this.bookService.nonFictionBooks;
  }

  //later replace nonFictionBooks by a method that accepts categ as a parameter
}
