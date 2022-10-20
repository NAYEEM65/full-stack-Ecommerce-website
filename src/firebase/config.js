// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: 'AIzaSyCQiXWx-PrPgAlBKexylSiQV_XaBOujvRY',
    authDomain: 'ns-shop-fc940.firebaseapp.com',
    projectId: 'ns-shop-fc940',
    storageBucket: 'ns-shop-fc940.appspot.com',
    messagingSenderId: '730468168851',
    appId: '1:730468168851:web:c11e5f986e188af33f4966',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export default app;
