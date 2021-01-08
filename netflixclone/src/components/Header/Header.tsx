import React from "react";
import { Link } from "react-router-dom";

import { HeaderComposition, HeaderProps } from "./header.types";
import { Background, Container, Logo, ButtonLink } from "./styles";

const Header: React.FC<HeaderProps> & HeaderComposition = ({
  bg = true,
  children,
  ...restProps
}) => {
  return bg ? <Background {...restProps}>{children}</Background> : null;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};
Header.ButtonLink = function HeaderButton({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default Header;
