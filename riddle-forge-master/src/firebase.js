// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBhxjTiV7VdDaaIiYP29dOdJ-DWb62UlLk",
  authDomain: "riddle-forge-react-app-2.firebaseapp.com",
  projectId: "riddle-forge-react-app-2",
  storageBucket: "riddle-forge-react-app-2.appspot.com",
  messagingSenderId: "313385757442",
  appId: "1:313385757442:web:6c0148de22be638e13301b",
  measurementId: "G-TBY55R2R13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };



 
 

 