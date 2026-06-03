import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Suas credenciais do Firebase (pegue nas configurações do projeto no Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDRUxmPEMaQmQleRVdvnifjsiYfrICu5E8",

  authDomain: "stockscan-mobile.firebaseapp.com",

  projectId: "stockscan-mobile",

  storageBucket: "stockscan-mobile.firebasestorage.app",

  messagingSenderId: "718929436849",

  appId: "1:718929436849:web:1dc14d24a153f1e1fbc290",

  measurementId: "G-4BEMG8KFGE",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o Banco de Dados (Firestore)
export const db = getFirestore(app);
