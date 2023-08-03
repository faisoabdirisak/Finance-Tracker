import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0iZHz3NB1KfUOAWTZZDLTdlFpZFuJbSM",
  authDomain: "mymoney-e8991.firebaseapp.com",
  projectId: "mymoney-e8991",
  storageBucket: "mymoney-e8991.appspot.com",
  messagingSenderId: "278019184277",
  appId: "1:278019184277:web:e8e995561e51321e40ed9c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

//timestamp
const timeStamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timeStamp };
