// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "boyoz-c49aa.firebaseapp.com",
  projectId: "boyoz-c49aa",
  storageBucket: "boyoz-c49aa.appspot.com",
  messagingSenderId: "1040466464973",
  appId: "1:1040466464973:web:8cccf1b9bcd029eca39984",
  measurementId: "G-KG3Q2R2R6E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
