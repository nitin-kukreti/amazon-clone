// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNv8KVKa3tdJJJnxX7aShKnnOzhpc7Zxg",
  authDomain: "clone-34b20.firebaseapp.com",
  projectId: "clone-34b20",
  storageBucket: "clone-34b20.appspot.com",
  messagingSenderId: "150834005839",
  appId: "1:150834005839:web:07d15263b49923d08b673a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };

