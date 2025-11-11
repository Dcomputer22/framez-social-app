import { Buffer } from 'buffer';
import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

const hashPassword = (password: string): string => {
  return Buffer.from(password).toString('base64');
};

const verifyPassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};

export const signUp = mutation({
  args: {
    email: v.string(),
    password: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query('users')
      .withIndex('by_email', (q) => q.eq('email', args.email))
      .first();

    if (existing) {
      throw new Error('User already exists');
    }

    const userId = await ctx.db.insert('users', {
      email: args.email,
      name: args.name,
      passwordHash: hashPassword(args.password),
      createdAt: Date.now(),
    });

    return { userId, email: args.email, name: args.name };
  },
});

export const signIn = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query('users')
      .withIndex('by_email', (q) => q.eq('email', args.email))
      .first();

    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (!verifyPassword(args.password, user.passwordHash)) {
      throw new Error('Invalid credentials');
    }

    return {
      userId: user._id,
      email: user.email,
      name: user.name,
    };
  },
});

export const getUser = query({
  args: { userId: v.id('users') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.userId);
  },
});
