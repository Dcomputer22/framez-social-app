import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from 'convex/react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../convex/_generated/api';
import { Id } from '../convex/_generated/dataModel';

interface User {
  userId: Id<'users'>;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signUpMutation = useMutation(api.auth.signUp);
  const signInMutation = useMutation(api.auth.signIn);

  useEffect(() => {
    // Load user from storage on app start
    AsyncStorage.getItem('user')
      .then((stored) => {
        if (stored) {
          setUser(JSON.parse(stored));
        }
      })
      .catch((error) => {
        console.error('Error loading user:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const signUp = (email: string, password: string, name: string) => {
    return signUpMutation({ email, password, name })
      .then((result) => {
        const userData = {
          userId: result.userId,
          email: result.email,
          name: result.name,
        };
        setUser(userData);
        return AsyncStorage.setItem('user', JSON.stringify(userData));
      })
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  };

  const signIn = (email: string, password: string) => {
    return signInMutation({ email, password })
      .then((result) => {
        const userData = {
          userId: result.userId,
          email: result.email,
          name: result.name,
        };
        setUser(userData);
        return AsyncStorage.setItem('user', JSON.stringify(userData));
      })
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  };

  const signOut = () => {
    return AsyncStorage.removeItem('user')
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
