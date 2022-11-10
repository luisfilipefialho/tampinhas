// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsI1-UrESYPUt_Za7azO_TAE5keW9OZzc",
  authDomain: "tampinhas.firebaseapp.com",
  projectId: "tampinhas",
  storageBucket: "tampinhas.appspot.com",
  messagingSenderId: "538050561580",
  appId: "1:538050561580:web:84567b5146219c0eeab389",
  measurementId: "G-F5T7G7CL3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);