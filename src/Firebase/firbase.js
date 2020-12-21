// config file
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyChrE4vabWJzwxhZYvQzZ732nUnwlxqG_s",
    authDomain: "dropdown-3fc31.firebaseapp.com",
    projectId: "dropdown-3fc31",
    storageBucket: "dropdown-3fc31.appspot.com",
    messagingSenderId: "249167116685",
    appId: "1:249167116685:web:9725bfae6a991b681325c4",
    measurementId: "G-6D2LB1Y7MK"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
