import firebase from "firebase/compat";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default { firebase, db };
