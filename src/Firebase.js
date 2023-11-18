// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "project-uth-fi.firebaseapp.com",
  projectId: "project-uth-fi",
  storageBucket: "project-uth-fi.appspot.com",
  messagingSenderId: "311992754094",
  appId: "1:311992754094:web:befb9649a6dffbe633b23f",
  measurementId: "G-5PK51X5F16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
