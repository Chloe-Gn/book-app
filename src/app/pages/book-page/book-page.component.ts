import { Component, input, OnInit } from '@angular/core';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { TopBarCloseButtonComponent } from '../../components/top-bar/top-bar-close-button/top-bar-close-button.component';
import { BookCoverBigComponent } from '../../components/book-cover/book-cover-big/book-cover-big.component';
import { MockBooksService } from '../../services/bookService/mock-books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-page',
  imports: [BookCoverBigComponent, TopBarComponent, TopBarCloseButtonComponent],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss',
})
export class BookPageComponent implements OnInit {
  title: string = 'Fiche du livre';
  book: Book | undefined = {} as Book;
  bookTitle: string | undefined = '';

  constructor(private bookService: MockBooksService) {}

  //récupérer l'id du livre dans le state

  ngOnInit(): void {
    const bookId: number = history.state.id;
    this.book = this.bookService.getBookById(bookId);
    this.bookTitle = this.book?.title;
    console.log(history.state);
    console.log(this.book);
  }
}
