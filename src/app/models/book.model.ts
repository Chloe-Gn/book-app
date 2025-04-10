import { Genre } from '../utils/genre';
import { BookComment } from './comment.model';

export interface Book {
  id: number;
  bookImagePath: string;
  title: string;
  authorID: number;
  authorName: string;
  firstPublished: Date;
  averageRating: number;
  genres: Genre[];
  comments: BookComment[];
}
