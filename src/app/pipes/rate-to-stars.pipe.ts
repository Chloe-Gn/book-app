import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateToStar',
})
export class RateToStarPipe implements PipeTransform {
  transform(value: number): string {
    const score = value.toString();

    if (score.length === 3) {
      const nbrFullStars: number = Number(score.substring(0, 1));
      const hasHalfAStar: number = Number(score.substring(3, 4));

      let starCount: number = 0;
      let stars: string = '';
      let outlinedStars: number = 0;

      const htmlFullStar: string = `<svg
        class="svg-selector"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path [attr.d]="starFilled" class="star-icon-path" />
      </svg>`;

      const htmlHalfStar: string = `<svg
        class="svg-selector"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path [attr.d]="starHalfFilled" class="star-icon-path" />
      </svg>`;

      const htmlOutlinedStar: string = `<svg
        class="svg-selector"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path [attr.d]="starOutlined" class="star-icon-path" />
      </svg>`;

      for (let i = 0; i < nbrFullStars; i++) {
        stars += htmlFullStar;
        starCount++;
      }

      if (hasHalfAStar >= 5) {
        stars += htmlHalfStar;
        starCount++;
      }

      if (starCount < 5) {
        outlinedStars = 5 - starCount;

        for (let i = 0; i < outlinedStars; i++) {
          stars += htmlOutlinedStar;
          i++;
        }
        return stars;
      }
    }

    return ' ';
  }
}
