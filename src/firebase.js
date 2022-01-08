import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBDaqWNMJNj3W2qGeZn-jR9m1-M9fIsJ8M',
  authDomain: 'twitter-clone-36dd6.firebaseapp.com',
  projectId: 'twitter-clone-36dd6',
  storageBucket: 'twitter-clone-36dd6.appspot.com',
  messagingSenderId: '770609378355',
  appId: '1:770609378355:web:9a2a63a5c005eb1d055f46',
  measurementId: 'G-1CW6G74277',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const provider = new GoogleAuthProvider();
const auth = getAuth();
const storage = getStorage(app);

export { auth, provider, storage };

export default db;
