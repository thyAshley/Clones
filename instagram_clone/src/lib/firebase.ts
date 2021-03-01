import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyDd54iFNOwUiuIrHKBKN7fd0b9WbaTXERc",
  authDomain: "instagramclone-52c9e.firebaseapp.com",
  projectId: "instagramclone-52c9e",
  storageBucket: "instagramclone-52c9e.appspot.com",
  messagingSenderId: "723655827619",
  appId: "1:723655827619:web:175faea7929466f4b79f16",
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

// only first time running
// seedDatabase(firebase);

export { firebase, FieldValue };
