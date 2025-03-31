import { Book } from './book.model';

export interface Booklist {
  userID: number;
  books: Book[];
}
