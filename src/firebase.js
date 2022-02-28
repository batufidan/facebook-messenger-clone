import firebase from "./firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUw5wPs0370cyamzqTQD7vUgVLg-A9-es",
    authDomain: "facebook-messenger-clone-d8df6.firebaseapp.com",
    projectId: "facebook-messenger-clone-d8df6",
    storageBucket: "facebook-messenger-clone-d8df6.appspot.com",
    messagingSenderId: "278493793096",
    appId: "1:278493793096:web:20199098c6769f9682817d",
    measurementId: "G-277LH74R12"

});

const db = firebaseApp.firestore();

export default db;