
// Import Firebase core functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // ✅ Import Firestore
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // ✅ Import Realtime Database

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7oLi6Juy9wkZPn6acVZMKhQ5O1vsg9V8",
  authDomain: "gurukulcode-991f0.firebaseapp.com",
  projectId: "gurukulcode-991f0",
  storageBucket: "gurukulcode-991f0.appspot.com",
  messagingSenderId: "448113937765",
  appId: "1:448113937765:web:288afe0361249f3351a58c",
  measurementId: "G-4TWS74ENCS",
  databaseURL: "https://gurukulcode-991f0-default-rtdb.asia-southeast1.firebasedatabase.app" // ✅ Add database URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // ✅ Initialize Firestore
const rtdb = getDatabase(app); // ✅ Initialize Realtime Database
const analytics = getAnalytics(app);

export { app, auth, db, rtdb };  // ✅ Export both Firestore (db) and Realtime Database (rtdb)
