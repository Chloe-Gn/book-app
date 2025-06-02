import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Book } from '../../../models/book.model';
import { LikeIconComponent40px } from '../../icons-with-state/like-icon-40px/like-icon-40px.component';
import { StarRatingComponent16px } from '../../star-rating/star-rating-16px/star-rating-16px.component';

@Component({
  selector: 'app-tile-with-cover',
  imports: [
    DatePipe,
    LikeIconComponent40px,
    LikeIconComponent40px,
    StarRatingComponent16px,
  ],
  templateUrl: './tile-with-cover.component.html',
  styleUrl: './tile-with-cover.component.scss',
})
export class TileWithCoverComponent {
  book = input<Book | undefined>();
  imageFolder: string = 'assets/images/';
  bookImage = computed(() => this.imageFolder + this.book()?.bookImagePath);
}
