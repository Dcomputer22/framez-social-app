import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBqryqL0g-hcOcUZCuQdo2uXHIOTZxGAY0',
  authDomain: 'framez-social-app.firebaseapp.com',
  projectId: 'framez-social-app',
  storageBucket: 'framez-social-app.firebasestorage.app',
  messagingSenderId: '867718983803',
  appId: '1:867718983803:web:c8577507489a5674ecf2de',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
