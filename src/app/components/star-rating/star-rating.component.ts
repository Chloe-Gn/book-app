import { Component, computed, input, OnInit } from '@angular/core';
import {
  ICON_STAR_FILLED,
  ICON_STAR_HALF_FILLED,
  ICON_STAR_OUTLINED,
} from '../../../assets/icons/svg-paths/svg-paths';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  rating = input<number>();

  svgPathStarFilled = ICON_STAR_FILLED;
  svgPathStarHalfFilled = ICON_STAR_HALF_FILLED;
  svgPathStarOutlined = ICON_STAR_OUTLINED;

  stars = computed<('full' | 'half' | 'empty')[]>(() => {
    const starsArray: ('full' | 'half' | 'empty')[] = [];
    const rating = this.rating();

    const fullStars = Math.floor(rating as number);
    const hasHalfStar =
      (rating as number) % 1 >= 0.25 && (rating as number) % 1 <= 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) starsArray.push('full');
    if (hasHalfStar) starsArray.push('half');
    for (let i = 0; i < emptyStars; i++) starsArray.push('empty');

    return starsArray;
  });
}
