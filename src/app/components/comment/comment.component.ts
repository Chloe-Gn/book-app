import { Component, input } from '@angular/core';
import { BookComment } from '../../models/comment.model';
import { StarRatingComponent16px } from '../star-rating/star-rating-16px/star-rating-16px.component';
import { LinkButtonComponent } from '../buttons/link-button/link-button.component';

@Component({
  selector: 'app-comment',
  imports: [StarRatingComponent16px, LinkButtonComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  comment = input<BookComment>();
}
