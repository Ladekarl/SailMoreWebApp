import firebase from 'firebase/app';
import "firebase/auth";

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "sailmore-1d764.firebaseapp.com",
    databaseURL: "https://sailmore-1d764.firebaseio.com",
    projectId: "sailmore-1d764",
    storageBucket: "sailmore-1d764.appspot.com",
    messagingSenderId: "717268019841",
    appId: FIREBASE_APP_ID,
    measurementId: "G-P3J247279G"
};

export default firebase.initializeApp(firebaseConfig);