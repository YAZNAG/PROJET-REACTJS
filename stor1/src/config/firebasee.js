// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_1ktT9cwDCqA5qljGoxfBPw08bd-q1BQ",
  authDomain: "projet12-a4bee.firebaseapp.com",
  projectId: "projet12-a4bee",
  storageBucket: "projet12-a4bee.appspot.com",
  messagingSenderId: "900263999546",
  appId: "1:900263999546:web:1783fa3c7ee450fd23dd03",
  measurementId: "G-9HX8PFD7BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);