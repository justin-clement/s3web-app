import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdKLOfmuZRpJY_fPxdv6Wga8SureR-m_U",
  authDomain: "supernova-ss.firebaseapp.com",
  projectId: "supernova-ss",
  storageBucket: "supernova-ss.firebasestorage.app",
  messagingSenderId: "139938448948",
  appId: "1:139938448948:web:61a52bd06508d8721fac61",
  measurementId: "G-S0B6ED5K9N"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
