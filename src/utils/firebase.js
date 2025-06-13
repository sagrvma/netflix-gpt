// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzDwuzfw5StlFo57_KFqjl9x5Qs6rP3wg",
  authDomain: "netflix-gpt-3aeb1.firebaseapp.com",
  projectId: "netflix-gpt-3aeb1",
  storageBucket: "netflix-gpt-3aeb1.firebasestorage.app",
  messagingSenderId: "57054665992",
  appId: "1:57054665992:web:ff70e3c719ad4a9379a0bd",
  measurementId: "G-8VSBJR4JKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    //Auth will clear when the browser is closed
  })
  .catch((error) => {
    //error
    console.log(error);
  });
