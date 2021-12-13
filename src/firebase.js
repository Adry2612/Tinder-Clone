// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm1xdbiOH5oXrWNkry3xrmug4ARJru550",
  authDomain: "tinder-clone-f358c.firebaseapp.com",
  projectId: "tinder-clone-f358c",
  storageBucket: "tinder-clone-f358c.appspot.com",
  messagingSenderId: "1084658032552",
  appId: "1:1084658032552:web:833a0ba56fe72c15e5479d",
  measurementId: "G-MP0V4CY1RC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();