import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// config

const firebaseConfig = {
  apiKey: "AIzaSyAgg8iecq-nD2Or_9jZL8PGubIoo4321PA",
  authDomain: "cloneflix-b2297.firebaseapp.com",
  projectId: "cloneflix-b2297",
  storageBucket: "cloneflix-b2297.appspot.com",
  messagingSenderId: "1073282599881",
  appId: "1:1073282599881:web:c8057e7e5fb4762744f618",
};

export const firebase = Firebase.initializeApp(firebaseConfig);
