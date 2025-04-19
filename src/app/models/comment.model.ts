export interface BookComment {
  commentId: number;
  bookId: number;
  userId: number;
  userName: string;
  rating: number;
  content: string;
  userAvatar: string;
}
