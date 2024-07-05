// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAurVVNnhtcqQw5WjnTUDizDUPLmyRrh40",
    authDomain: "apga-906ad.firebaseapp.com",
    projectId: "apga-906ad",
    storageBucket: "apga-906ad.appspot.com",
    messagingSenderId: "924880171907",
    appId: "1:924880171907:web:1a1e1ffe5f11491b3afcb6",
    measurementId: "G-VS3ENNVXDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
