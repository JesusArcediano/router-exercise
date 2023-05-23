// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGc26o6zEsY4hSuhdcrONXb19wum-mNH8",
  authDomain: "router-exercise-7ec2e.firebaseapp.com",
  projectId: "router-exercise-7ec2e",
  storageBucket: "router-exercise-7ec2e.appspot.com",
  messagingSenderId: "432293633479",
  appId: "1:432293633479:web:27a9d3cad39fc89bf50de2",
  measurementId: "G-0W64S0W66Z"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
