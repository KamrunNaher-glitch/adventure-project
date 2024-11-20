// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyB9Aeo02M1rstogkGWAO_M5sMHrWP2hs",
  authDomain: "adventure-project-d0e6f.firebaseapp.com",
  projectId: "adventure-project-d0e6f",
  storageBucket: "adventure-project-d0e6f.firebasestorage.app",
  messagingSenderId: "5431727031",
  appId: "1:5431727031:web:52bb2d4f7d3cdb5bae4e32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;