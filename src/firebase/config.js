// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaz8WowChESMwYzNypQqoQ63IZnq99mAw",
  authDomain: "react-cursos-c793e.firebaseapp.com",
  projectId: "react-cursos-c793e",
  storageBucket: "react-cursos-c793e.appspot.com",
  messagingSenderId: "520621009288",
  appId: "1:520621009288:web:0fc0dd38cabf166339723d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);