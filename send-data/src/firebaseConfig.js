// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQuxLcphrKkGZg4GvgqeblJEkI2E_vF9s",
  authDomain: "test-copeco.firebaseapp.com",
  projectId: "test-copeco",
  storageBucket: "test-copeco.appspot.com",
  messagingSenderId: "620054429053",
  appId: "1:620054429053:web:042f567c81eff9b784e014",
  measurementId: "G-ZT5TB3H9T9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
