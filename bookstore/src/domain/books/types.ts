export interface Book {
  author: string;
  cover: string;
  rating: string;
  slug: string;
  synopsis: string;
  title: string;
  upvoted: boolean;
  upvotes: number;
}

export interface Comment {
  author: string;
  message: string;
}

export interface BookResponse {
  books: Book[];
  meta: { 
    count: number;
  }
}