
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOnUebVlnQcCaDQ5QEc_5qgCTM8HvQAqE",
  authDomain: "auth-09-09-2006.firebaseapp.com",
  projectId: "auth-09-09-2006",
  storageBucket: "auth-09-09-2006.firebasestorage.app",
  messagingSenderId: "526589121765",
  appId: "1:526589121765:web:07f5f995c113787791b00c",
  measurementId: "G-38M01W8QFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default app;
