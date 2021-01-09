import React, { Fragment } from "react";
import Firebase from "firebase";

import logo from "./logo.svg";
import Header from "../components/Header";
import Profile from "../components/Profile";
import * as ROUTES from "../constant/routes";

const ProfileContainer: React.FC<{ user: Firebase.User | null }> = ({
  user,
}) => {
  return (
    <Fragment>
      <Header>
        <Header.Frame>
          <Header.Logo src={logo} to={ROUTES.HOME} />
        </Header.Frame>
      </Header>

      <Profile user={user}>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User>
            <Profile.Picture src={user ? user.photoURL : ""} />
            <Profile.Name>{user?.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </Fragment>
  );
};

export default ProfileContainer;
