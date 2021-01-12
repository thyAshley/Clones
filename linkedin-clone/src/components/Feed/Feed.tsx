import { useState, useEffect, useRef } from "react";
import firebase from "firebase";
import {
  Create,
  Image,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from "@material-ui/icons";

import "./styles.scss";

import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";
import { db } from "../db";
import { postAttribute } from "./post_types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Feed = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const [posts, setPosts] = useState<postAttribute[]>([]);
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .limit(10)
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc: any) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e: React.MouseEvent) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user!.displayName,
      description: user!.email,
      message: text,
      photoURL: "Test",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input" onClick={() => inputRef.current?.focus()}>
          <Create />
          <form>
            <input
              ref={inputRef}
              type="text"
              onChange={({ target }) => setText(target.value)}
              value={text}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={Image} color="#70B5F9" />
          <InputOption title="Video" Icon={Subscriptions} color="##E7A33E" />
          <InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
          <InputOption
            title="Wise article"
            Icon={CalendarViewDay}
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data }) => {
        return (
          <Post
            key={id}
            name={data.name}
            description={data.description}
            message={data.message}
            photoURL={data.photoURL}
          />
        );
      })}
    </div>
  );
};

export default Feed;
