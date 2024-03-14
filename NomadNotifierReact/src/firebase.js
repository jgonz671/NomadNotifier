// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7BQFVxre0Y66klV7rKVjkMqVIQClKvq8",
    authDomain: "nomadnotifier-fecce.firebaseapp.com",
    projectId: "nomadnotifier-fecce",
    storageBucket: "nomadnotifier-fecce.appspot.com",
    messagingSenderId: "872392042331",
    appId: "1:872392042331:web:acac9e9084ca4aad31dc7e",
    measurementId: "G-J8X953HESN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { app, auth, analytics }