import { Component, input, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import {
  ICON_STAR_FILLED,
  ICON_STAR_HALF_FILLED,
  ICON_STAR_OUTLINED,
} from '../../../../assets/icons/svg-paths/svg-paths';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { SpacerComponent } from '../../spacer/spacer.component';
import { StarRatingComponent16px } from '../../star-rating/star-rating-16px/star-rating-16px.component';
import { LikeIconComponent40px } from '../../icons-with-state/like-icon-40px/like-icon-40px.component';
import { SmallChipsComponent } from '../../chips/small-chip/small-chips.component';
import { TertiaryButtonComponent } from '../../buttons/tertiary-button/tertiary-button.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-horizontal-card',
  imports: [
    DatePipe,
    LikeIconComponent40px,
    SmallChipsComponent,
    SpacerComponent,
    StarRatingComponent16px,
    TertiaryButtonComponent,
    TruncatePipe,
  ],
  templateUrl: './horizontal-card.component.html',
  styleUrl: './horizontal-card.component.scss',
})
export class HorizontalCardComponent implements OnInit {
  book = input<Book | undefined>();
  bookId: number = 0;
  bookImage: string = '';
  publicationDate: string = '';
  bookTitle: string = '';
  averageRating: number = 0;
  authorName: string = '';
  categories: string[] = [];

  imageFolder: string = 'assets/images/';
  starHalfFilled: string = ICON_STAR_HALF_FILLED;
  starFilled: string = ICON_STAR_FILLED;
  starOutlined: string = ICON_STAR_OUTLINED;

  ngOnInit() {
    this.bookId = this.book()!.id;
    this.bookImage = this.imageFolder + this.book()!.bookImagePath;
    this.publicationDate = this.book()!.firstPublished.toString();
    this.bookTitle = this.book()!.title;
    this.averageRating = this.book()!.averageRating;
    this.authorName = this.book()!.authorName;
    this.categories = this.book()!.categories.map(
      (category) => category.categoryNameSingular
    );
  }
}
