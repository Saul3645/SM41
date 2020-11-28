import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5lb4qLQOLxTp49jFQpsvJNf_4sHm8i38",
  authDomain: "sm41-e30d6.firebaseapp.com",
  databaseURL: "https://sm41-e30d6.firebaseio.com",
  projectId: "sm41-e30d6",
  storageBucket: "sm41-e30d6.appspot.com",
  messagingSenderId: "103739226605",
  appId: "1:103739226605:web:ee6c5495cee3230a054fe4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
