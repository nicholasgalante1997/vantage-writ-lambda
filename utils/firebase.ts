// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUY1IVVzoXd_0yC6NYh6Eh8Lmzm43QB1o",
  authDomain: "markdowncommandcenter.firebaseapp.com",
  databaseURL: "https://markdowncommandcenter-default-rtdb.firebaseio.com",
  projectId: "markdowncommandcenter",
  storageBucket: "markdowncommandcenter.appspot.com",
  messagingSenderId: "565783944337",
  appId: "1:565783944337:web:f753dbb1c78c5ead1c3330"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };