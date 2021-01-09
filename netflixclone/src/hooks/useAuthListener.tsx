import { useEffect, useState, useContext } from "react";
import Firebase from "firebase";

import { FirebaseContext } from "../context/firebase";

const useAuthListener = () => {
  const storageUser = localStorage.getItem("authUser");
  const [user, setUser] = useState<Firebase.User | null>(
    storageUser ? JSON.parse(storageUser) : null
  );
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase!.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
    // eslint-disable-next-line
  }, []);

  return { user };
};

export default useAuthListener;
