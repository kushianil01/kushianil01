// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp as initializeAdminApp } from 'firebase-admin/app';
import { FieldValue } from 'firebase-admin/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbo2xalLWPEBIPGAXL2FAPD9GU2WceKdA",
  authDomain: "chumma-cafe.firebaseapp.com",
  projectId: "chumma-cafe",
  storageBucket: "chumma-cafe.appspot.com",
  messagingSenderId: "1032050867550",
  appId: "1:1032050867550:web:313cdcf71c3902c2e2e3cf",
  measurementId: "G-Z6LBVYVWEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Admin
const adminApp = initializeAdminApp();

const db = getFirestore(adminApp);
const docRef1 = doc(db, 'chumma-cafe/vadapav'); // Use a path to the document

const vadapavData = {
  id: 1,
  price: 60,
  image: "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg",
};

// Use setDoc to set the document data
await setDoc(docRef1, vadapavData);

const docRef2 = doc(db, 'chumma-cafe/paneer roll'); // Use a path to the document

const paneerRollData = {
  id: 2,
  price: 70,
  image: "https://c.ndtvimg.com/2022-08/jv2vkgho_paneer-roll_625x300_22_August_22.jpg",
};

// Use setDoc to set the document data
await setDoc(docRef2, paneerRollData);



