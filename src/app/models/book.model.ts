import { Genre } from '../utils/genre';
import { Category } from './category.model';
import { BookComment } from './comment.model';

export interface Book {
  id: number;
  bookPagePath: string;
  bookImagePath: string;
  title: string;
  authorID: number;
  authorName: string;
  firstPublished: Date;
  averageRating: number;
  categories: Category[];
}

/*

export interface Book {
  id: number;
  bookImagePath: string;
  title: string;
  authorID: number;
  authorName: string;
  firstPublished: Date;
  averageRating: number;
  categories: Category[];
  comments: BookComment[];
}

*/
