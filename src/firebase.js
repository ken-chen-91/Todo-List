import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbNOK--1VnJqM78fIfFJVRDNLw7BZBqv0",
    authDomain: "todo-app-38e72.firebaseapp.com",
    databaseURL: "https://todo-app-38e72.firebaseio.com",
    projectId: "todo-app-38e72",
    storageBucket: "todo-app-38e72.appspot.com",
    messagingSenderId: "1090425652987",
    appId: "1:1090425652987:web:30e1a5e72d57bbf51ad25e",
    measurementId: "G-Z96S0ZLJ7N"
  };

  const firebaseApp = firebase.initalizeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default {db};
