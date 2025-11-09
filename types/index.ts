export interface User {
  uid: string;
  email: string;
  name: string;
}

export interface Post {
  id: string;
  userId: string;
  authorName: string;
  content: string;
  imageUrl: string;
  likes: number;
  createdAt: any;
}
