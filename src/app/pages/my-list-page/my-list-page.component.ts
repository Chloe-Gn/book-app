import { Component, inject, OnInit } from '@angular/core';
import { BigChipsComponent } from '../../components/chips/big-chips/big-chips.component';
import { TileLIstComponent } from '../../components/tile-list/tile-list/tile-list.component';
import { TileWithCoverComponent } from '../../components/tile-list/tile-with-cover/tile-with-cover.component';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { Book } from '../../models/book.model';
import { MockBooksService } from '../../services/bookService/mock-books.service';
import { NgStyle } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar/nav-bar.component';

@Component({
  selector: 'app-my-list-page',
  imports: [
    BigChipsComponent,
    NgStyle,
    TileLIstComponent,
    TopBarComponent,
    TileWithCoverComponent,
    NavBarComponent,
  ],
  templateUrl: './my-list-page.component.html',
  styleUrl: './my-list-page.component.scss',
})
export class MyListPageComponent implements OnInit {
  private bookService = inject(MockBooksService);

  title: string = 'Ma liste';
  books: Book[] = [];

  ngOnInit(): void {
    this.bookService.getBooks();
    this.books = this.bookService.books();
  }
}
