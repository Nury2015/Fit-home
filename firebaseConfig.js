// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA91cJy7j2xun3QEUmyJVbB7J86sNAoHtQ",
  authDomain: "dieta-f2bf2.firebaseapp.com",
  projectId: "dieta-f2bf2",
  storageBucket: "dieta-f2bf2.firebasestorage.app",
  messagingSenderId: "731279884900",
  appId: "1:731279884900:web:83bdaff204528d996f5571",
  measurementId: "G-7BZHSPGBNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);