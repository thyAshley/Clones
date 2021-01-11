import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpZYGW61OLBXV46jOoxJdPeEkwBvO5CpU",
  authDomain: "linkedinclone-abdcf.firebaseapp.com",
  projectId: "linkedinclone-abdcf",
  storageBucket: "linkedinclone-abdcf.appspot.com",
  messagingSenderId: "98898214075",
  appId: "1:98898214075:web:49332ff60611b95d9dfd9e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
