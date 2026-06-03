import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRUxmPEMaQmQleRVdvnifjsiYfrICu5E8",
  authDomain: "stockscan-mobile.firebaseapp.com",
  projectId: "stockscan-mobile",
  storageBucket: "stockscan-mobile.firebasestorage.app",
  messagingSenderId: "718929436849",
  appId: "1:718929436849:web:1dc14d24a153f1e1fbc290",
  measurementId: "G-4BEMG8KFGE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
