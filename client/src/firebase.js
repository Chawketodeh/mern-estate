import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-40c90.firebaseapp.com",
  projectId: "mern-estate-40c90",
  storageBucket: "mern-estate-40c90.firebasestorage.app",
  messagingSenderId: "453138741027",
  appId: "1:453138741027:web:fddfe21c18d7a4709fbe96"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);