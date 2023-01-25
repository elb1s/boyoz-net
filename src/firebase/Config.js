// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "buartik-a2321.firebaseapp.com",
  projectId: "buartik-a2321",
  storageBucket: "buartik-a2321.appspot.com",
  messagingSenderId: "669190119648",
  appId: "1:669190119648:web:f0bd15134ee87a61ff3085",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
