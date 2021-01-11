import { Avatar } from "@material-ui/core";

import "./styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Avatar className="sidebar__avatar" src="/images/avatar.png" />
        <h2>Lorem, ipsum.</h2>
        <h4>lorem@gmail.com</h4>
      </div>

      <div className="sidebar__stats"></div>
    </div>
  );
};

export default Sidebar;
