// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_QowpgX19PlVE1Cz0D0cpIJh7K0nUq0o",
  authDomain: "ccb-registro.firebaseapp.com",
  projectId: "ccb-registro",
  storageBucket: "ccb-registro.firebasestorage.app",
  messagingSenderId: "634223347098",
  appId: "1:634223347098:web:c5124dd418b601baa22623",
  measurementId: "G-5F7P9SDRBB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
