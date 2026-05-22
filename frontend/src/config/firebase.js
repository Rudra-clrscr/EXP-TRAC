// frontend/src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsvCmNz6iRy49kQST-5QGX90Iay8F2Sdc",
  authDomain: "exp-trac-50f7f.firebaseapp.com",
  projectId: "exp-trac-50f7f",
  storageBucket: "exp-trac-50f7f.firebasestorage.app",
  messagingSenderId: "412254011037",
  appId: "1:412254011037:web:ba36c57252a90f8b029e74",
  measurementId: "G-1ES5Y8Z2RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
