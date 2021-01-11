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

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
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
      <Post
        name="tester"
        description="This is a test"
        message="Test message"
        photoURL="test"
      />
    </div>
  );
};

export default Feed;
