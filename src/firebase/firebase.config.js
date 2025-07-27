// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZAMlyZyKVlUq5f9SbQ3SXKHQ8uh2wgq8",
  authDomain: "assignment9-real-estate-5abc4.firebaseapp.com",
  projectId: "assignment9-real-estate-5abc4",
  storageBucket: "assignment9-real-estate-5abc4.firebasestorage.app",
  messagingSenderId: "288876824772",
  appId: "1:288876824772:web:58f79626a06587481ba191"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;