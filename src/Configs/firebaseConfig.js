// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYzdGMk_YFrPNKBuQ9RQ_lUifwQatU3Qs",
  authDomain: "the-coding-engineer.firebaseapp.com",
  projectId: "the-coding-engineer",
  storageBucket: "the-coding-engineer.appspot.com",
  messagingSenderId: "359582595988",
  appId: "1:359582595988:web:f78ce34303651fdcd96d81",
  measurementId: "G-4LSNN0FKR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// Initialize firestore
export const dataBase=getFirestore(app)
