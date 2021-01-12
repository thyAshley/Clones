import React from "react";
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";

import HeaderOption from "../HeaderOption/HeaderOption";
import { logout } from "../../redux/users/userSlice";
import { auth } from "../db";
import { RootState } from "../../redux/store";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={user?.photoURL} alt="LinkedIn" />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right" onClick={logoutHandler}>
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="/images/avatar.png" title="me" />
      </div>
    </div>
  );
};

export default Header;
