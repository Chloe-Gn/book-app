import { Component, input, OnInit } from '@angular/core';
import { LikeIconComponent } from '../../icons-with-state/like-icon/like-icon.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-cover-big',
  imports: [DatePipe, LikeIconComponent],
  templateUrl: './book-cover-big.component.html',
  styleUrl: './book-cover-big.component.scss',
})
export class BookCoverBigComponent implements OnInit {
  bookObject = input<Book>();
  bookImage: string | undefined = '';
  bookTitle: string | undefined = '';
  publicationDate: Date | undefined = new Date('0000-01-01');

  ngOnInit(): void {
    this.bookImage = this.bookObject()?.bookImagePath;
    this.bookTitle = this.bookObject()?.title;
    this.publicationDate = this.bookObject()?.firstPublished;
  }
}
