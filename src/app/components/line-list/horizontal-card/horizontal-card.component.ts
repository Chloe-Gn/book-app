import { Component, input, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import { Genre } from '../../../utils/genre';
import { DatePipe, TitleCasePipe } from '@angular/common';
import {
  ICON_HEART_OUTLINED,
  ICON_STAR_FILLED,
  ICON_STAR_HALF_FILLED,
  ICON_STAR_OUTLINED,
} from '../../../../assets/icons/svg-paths/svg-paths';
import { ICON_HEART_FILLED } from '../../../../assets/icons/svg-paths/svg-paths';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { SpacerComponent } from '../../spacer/spacer.component';
import { RateToStarPipe } from '../../../pipes/rate-to-stars.pipe';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { LikeIconComponent } from '../../icons-with-state/like-icon/like-icon.component';
import { SmallChipsComponent } from '../../chips/small-chip/small-chips.component';
import { Category } from '../../../models/category.model';
import { TertiaryButtonComponent } from '../../buttons/tertiary-button/tertiary-button.component';

@Component({
  selector: 'app-horizontal-card',
  imports: [
    DatePipe,
    LikeIconComponent,
    SmallChipsComponent,
    SpacerComponent,
    StarRatingComponent,
    TertiaryButtonComponent,
    TitleCasePipe,
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
