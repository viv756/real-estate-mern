// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7a59f.firebaseapp.com",
  projectId: "mern-estate-7a59f",
  storageBucket: "mern-estate-7a59f.appspot.com",
  messagingSenderId: "920659257059",
  appId: "1:920659257059:web:c105f603cef491952b47d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
