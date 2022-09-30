// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA38AL8Z99UZ0gw1t90qdsWwO-j_5sW5aY",

  authDomain: "netflix-clone-95be4.firebaseapp.com",

  projectId: "netflix-clone-95be4",

  storageBucket: "netflix-clone-95be4.appspot.com",

  messagingSenderId: "344674560733",

  appId: "1:344674560733:web:bc375e2df54178f54cc934",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
