import { Avatar } from "@material-ui/core";

import "./styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__top__bg"
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt="background"
        />
        <Avatar className="sidebar__avatar" src="/images/avatar.png" />
        <h2>Lorem, ipsum.</h2>
        <h4>lorem@gmail.com</h4>
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
      </div>
    </div>
  );
};

export default Sidebar;
