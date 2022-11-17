import firebase from "firebase/compat";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXhWF9KH4Sn69YGSuXfUdTGjgYe_D4P9A",
  authDomain: "react-n-firebase-2d833.firebaseapp.com",
  projectId: "react-n-firebase-2d833",
  storageBucket: "react-n-firebase-2d833.appspot.com",
  messagingSenderId: "187672745300",
  appId: "1:187672745300:web:781fcc1f2631822581a4c1",
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default { firebase, db };
