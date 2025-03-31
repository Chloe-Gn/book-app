export interface BookComment {
  id: number;
  bookId: number;
  userId: number;
  userName: string;
  rating: number;
  content: string;
}
