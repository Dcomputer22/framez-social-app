import { AuthProvider } from '@/contexts/AuthContext';
import { Buffer } from 'buffer';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { Stack } from 'expo-router';

(global as any).Buffer = Buffer;

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </AuthProvider>
    </ConvexProvider>
  );
}
