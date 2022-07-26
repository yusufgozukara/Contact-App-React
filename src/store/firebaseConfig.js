// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Y85cD5DqZtFPxrY6imZH9BB3Bl2oJv4",
  authDomain: "movie-2cba4.firebaseapp.com",
  projectId: "movie-2cba4",
  storageBucket: "movie-2cba4.appspot.com",
  messagingSenderId: "294110628943",
  appId: "1:294110628943:web:9fc1904955082b91c42e3a",
  measurementId: "G-H86NYK7516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);