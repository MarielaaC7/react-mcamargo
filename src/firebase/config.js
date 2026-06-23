// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQOBHACrpj8IFvSy6S260UYbgqmWV8M1A",
  authDomain: "pfinal-mcamargo.firebaseapp.com",
  projectId: "pfinal-mcamargo",
  storageBucket: "pfinal-mcamargo.firebasestorage.app",
  messagingSenderId: "60050286355",
  appId: "1:60050286355:web:4f8bbbd1a6f3820ce85ce6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export { db , auth };