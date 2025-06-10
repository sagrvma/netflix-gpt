// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Oe57GeXf3G2oR-aMMrjQ-15hlcbemNE",
  authDomain: "netflixgpt-4e68b.firebaseapp.com",
  projectId: "netflixgpt-4e68b",
  storageBucket: "netflixgpt-4e68b.firebasestorage.app",
  messagingSenderId: "435818596286",
  appId: "1:435818596286:web:0238e46ce1cc2410691bef",
  measurementId: "G-HC28DHFYT7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
