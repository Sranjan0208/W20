import { getApp, getApps, initializeApp, firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3X_v56Wc7Zy5bWJG5xV888eKmELRcIEc",
  authDomain: "w-connect-ca20b.firebaseapp.com",
  projectId: "w-connect-ca20b",
  storageBucket: "w-connect-ca20b.appspot.com",
  messagingSenderId: "525934080389",
  appId: "1:525934080389:web:1064ac657d9a2c17d154ec",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore();

export { app, db };
