import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target: string) {
  const [content, setContent] = useState<any>([]);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const snapshot = await firebase?.firestore().collection(target).get();
        const content = snapshot!.docs.map((content) => ({
          ...content.data(),
          docId: content.id,
        }));
        setContent(content);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return { [target]: content };
}
