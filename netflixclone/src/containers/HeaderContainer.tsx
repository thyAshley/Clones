import React from "react";

import Header from "../components/Header";
import logo from "../components/Header/logo.svg";

import * as ROUTES from "../constant/routes";

const HeaderContainer: React.FC = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
