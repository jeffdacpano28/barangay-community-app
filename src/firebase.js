// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwdT-kFMdNA4a9QtE0RMf36X_0AUkGwOw",
  authDomain: "barangay-app-12b52.firebaseapp.com",
  projectId: "barangay-app-12b52",
  storageBucket: "barangay-app-12b52.firebasestorage.app",
  messagingSenderId: "312749108453",
  appId: "1:312749108453:web:cf9d0fd23aa1497ecef80c",
  measurementId: "G-0F52SR6528"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
