import { Component, input, OnInit } from '@angular/core';
import { LikeIconComponent } from '../../icons-with-state/like-icon/like-icon.component';
import { DatePipe } from '@angular/common';
import { Book } from '../../../models/book.model';

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

  imageFolder: string = 'assets/images/';

  ngOnInit(): void {
    this.bookImage = this.imageFolder + this.bookObject()?.bookImagePath;
    this.bookTitle = this.bookObject()?.title;
    this.publicationDate = this.bookObject()?.firstPublished;
  }
}
