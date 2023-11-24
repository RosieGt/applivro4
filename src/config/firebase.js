// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvClgoEy8kWGT_YhdLjg__avd0Wv1q6Vs",
  authDomain: "bibliotecajc-ee649.firebaseapp.com",
  projectId: "bibliotecajc-ee649",
  storageBucket: "bibliotecajc-ee649.appspot.com",
  messagingSenderId: "860682815024",
  appId: "1:860682815024:web:a6bb7076996efd02a5cff5",
  measurementId: "G-YBSLPP80SY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);