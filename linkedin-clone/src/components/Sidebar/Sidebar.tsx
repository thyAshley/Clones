import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import "./styles.scss";

const Sidebar = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const recentItem = (topic: string) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    user && (
      <div className="sidebar">
        <div className="sidebar__top">
          <img
            className="sidebar__top__bg"
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg"
            alt="background"
          />
          <Avatar className="sidebar__avatar" src={user.photoURL}>
            {user.email[0]}
          </Avatar>
          <h2>{user.name}</h2>
          <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">1,234</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">1,010</p>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("lorem")}
          {recentItem("ipsum")}
          {recentItem("dolor")}
          {recentItem("sit")}
          {recentItem("amet")}
        </div>
      </div>
    )
  );
};

export default Sidebar;
