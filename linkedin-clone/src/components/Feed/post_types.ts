import firebase from "firebase";

export interface postAttribute {
  id: string;
  data: {
    name: string;
    description: string;
    message: string;
    photoURL: string;
    timestamp: firebase.firestore.FieldValue;
  };
}
