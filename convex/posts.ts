import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createPost = mutation({
  args: {
    userId: v.id('users'),
    authorName: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const postId = await ctx.db.insert('posts', {
      userId: args.userId,
      authorName: args.authorName,
      content: args.content,
      imageUrl: args.imageUrl,
      likes: 0,
      createdAt: Date.now(),
    });

    return postId;
  },
});

export const getAllPosts = query({
  handler: async (ctx) => {
    const posts = await ctx.db
      .query('posts')
      .withIndex('by_created')
      .order('desc')
      .collect();

    return posts;
  },
});

export const getUserPosts = query({
  args: { userId: v.id('users') },
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query('posts')
      .withIndex('by_user', (q) => q.eq('userId', args.userId))
      .order('desc')
      .collect();

    return posts;
  },
});

export const deletePost = mutation({
  args: { postId: v.id('posts') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.postId);
  },
});
