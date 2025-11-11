import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    passwordHash: v.string(),
    createdAt: v.number(),
  }).index('by_email', ['email']),

  posts: defineTable({
    userId: v.id('users'),
    authorName: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
    likes: v.number(),
    createdAt: v.number(),
  })
    .index('by_user', ['userId'])
    .index('by_created', ['createdAt']),
});
