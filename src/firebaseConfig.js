// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGfrbO2VXbGGpnKzYBIGatHzRtKJs2qhA",
  authDomain: "indicate-ef631.firebaseapp.com",
  projectId: "indicate-ef631",
  storageBucket: "indicate-ef631.firebasestorage.app",
  messagingSenderId: "909642502148",
  appId: "1:909642502148:web:6db53c92095ea3d1d0a551",
  measurementId: "G-B7S0N0V7D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);