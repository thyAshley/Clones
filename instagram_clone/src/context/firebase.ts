import { createContext } from "react";
import Firebase from "firebase";

interface IFireContext {
  firebase?: Firebase.app.App;
  FieldValue?: typeof Firebase.firestore.FieldValue;
}

const FirebaseContext = createContext<IFireContext>({});

export default FirebaseContext;
