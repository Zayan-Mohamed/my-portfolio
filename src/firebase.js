import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';  // Updated to use full Firestore SDK

const firebaseConfig = {
  apiKey: "AIzaSyCdZlyfWP30n24QIDTYOUmjAlCxn3RnVoM",
  authDomain: "portfolio-2c9b3.firebaseapp.com",
  projectId: "portfolio-2c9b3",
  storageBucket: "portfolio-2c9b3.firebasestorage.app",
  messagingSenderId: "67957371874",
  appId: "1:67957371874:web:ee5b786b7bac96b8ba3fbb",
  measurementId: "G-TWSHPFWH3E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // Associate auth with the app
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);  // Firestore instance
export const storage = getStorage(app);  // Storage instance

export const signInWithGoogle = () => signInWithPopup(auth, provider);
