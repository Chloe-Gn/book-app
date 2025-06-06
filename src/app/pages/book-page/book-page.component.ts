import { Component, OnInit } from '@angular/core';
import { BookCoverBigComponent } from '../../components/book-cover/book-cover-big/book-cover-big.component';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../components/buttons/secondary-button/secondary-button.component';
import { MediumChipsComponent } from '../../components/chips/medium-chips/medium-chips.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { StarRating24PxComponent } from '../../components/star-rating/star-rating24-px/star-rating-24px.component';
import { TopBarCloseButtonComponent } from '../../components/top-bar/top-bar-close-button/top-bar-close-button.component';
import { TopBarComponent } from '../../components/top-bar/top-bar/top-bar.component';
import { Book } from '../../models/book.model';
import { BookComment } from '../../models/comment.model';
import { MockBooksService } from '../../services/bookService/mock-books.service';
import { CommentsService } from '../../services/commentsService/comments.service';

@Component({
  selector: 'app-book-page',
  imports: [
    BookCoverBigComponent,
    CommentComponent,
    SpacerComponent,
    StarRating24PxComponent,
    TopBarComponent,
    TopBarCloseButtonComponent,
    MediumChipsComponent,
    SectionTitleComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
  ],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss',
})
export class BookPageComponent implements OnInit {
  title: string = 'Fiche du livre';
  book: Book | undefined = {} as Book;
  categoryChips: string[] = [];
  comments: BookComment[] = [];

  constructor(
    private bookService: MockBooksService,
    private commentService: CommentsService
  ) {}

  ngOnInit(): void {
    const bookId: number = history.state.id;
    this.book = this.bookService.getBookById(bookId);
    this.categoryChips = this.book!.categories.map(
      (category) => category.categoryNamePlural
    );
    this.comments = this.commentService.getCommentsByBookId(bookId);
  }
}
