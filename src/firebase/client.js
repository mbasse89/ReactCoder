// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAZzcaqwhiifWVw_PDQUzQ2w_GfUQ06Dw8",
  authDomain: "ecomemrce-matias-basse.firebaseapp.com",
  projectId: "ecomemrce-matias-basse",
  storageBucket: "ecomemrce-matias-basse.appspot.com",
  messagingSenderId: "803524486262",
  appId: "1:803524486262:web:327f120f006b34ac33ab57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

