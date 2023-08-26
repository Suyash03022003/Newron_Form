// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYJTvZDLN-AF4whxc24LaL1Z-83oRFcIQ",
  authDomain: "newronform.firebaseapp.com",
  projectId: "newronform",
  storageBucket: "newronform.appspot.com",
  messagingSenderId: "600034019212",
  appId: "1:600034019212:web:72d2d931ca42f7b7ddf8a9",
  measurementId: "G-1RQ31PVE30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);