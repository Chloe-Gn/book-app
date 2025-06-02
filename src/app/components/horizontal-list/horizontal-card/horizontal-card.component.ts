import { DatePipe } from '@angular/common';
import { Component, computed, input, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { TertiaryButtonComponent } from '../../buttons/tertiary-button/tertiary-button.component';
import { SmallChipsComponent } from '../../chips/small-chip/small-chips.component';
import { LikeIconComponent40px } from '../../icons-with-state/like-icon-40px/like-icon-40px.component';
import { SpacerComponent } from '../../spacer/spacer.component';
import { StarRatingComponent16px } from '../../star-rating/star-rating-16px/star-rating-16px.component';

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
  imageFolder: string = 'assets/images/';
  bookImage = computed(() => this.imageFolder + this.book()?.bookImagePath);
  categories: string[] = [];

  ngOnInit(): void {
    this.categories = this.book()!.categories.map(
      (category) => category.categoryNameSingular
    );
  }
}
/* bookId: number = 0;
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
*/
