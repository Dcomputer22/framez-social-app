import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBkJtNIse2iVBQb02H370as1lqbeTpqTIg',
  authDomain: 'framez-social-app-21f60.firebaseapp.com',
  projectId: 'framez-social-app-21f60',
  storageBucket: 'framez-social-app-21f60.firebasestorage.app',
  messagingSenderId: '430614409643',
  appId: '1:430614409643:web:3491c1b70168415873e2ee',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
