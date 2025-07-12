// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnKJNsi1rLMrzeqkzHNW0PScFBflO_keU",
  authDomain: "top-house-dd9ed.firebaseapp.com",
  databaseURL: "https://top-house-dd9ed-default-rtdb.firebaseio.com",
  projectId: "top-house-dd9ed",
  storageBucket: "top-house-dd9ed.firebasestorage.app",
  messagingSenderId: "72511832896",
  appId: "1:72511832896:web:45a02987bea95e7a24b0a5",
  measurementId: "G-8P8Z0PT5E6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initalize Database
export const db = getDatabase(app);
export const auth = getAuth(app);
