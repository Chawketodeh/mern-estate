// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-40c90.firebaseapp.com",
  projectId: "mern-estate-40c90",
  storageBucket: "mern-estate-40c90.appspot.com",
  messagingSenderId: "453138741027",
  appId: "1:453138741027:web:fddfe21c18d7a4709fbe96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);