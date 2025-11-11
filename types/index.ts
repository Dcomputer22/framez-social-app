import { Id } from '@/convex/_generated/dataModel';

export interface User {
  userId: Id<'users'>;
  email: string;
  name: string;
}

export interface Post {
  _id: Id<'posts'>;
  userId: Id<'users'>;
  authorName: string;
  content: string;
  imageUrl?: string;
  likes: number;
  createdAt: number;
}
