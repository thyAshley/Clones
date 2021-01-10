import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderComposition, HeaderProps } from "./header.types";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Group,
  Link as TextLink,
  Picture,
  Dropdown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
} from "./styles";

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

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.Search = function HeaderText({
  searchTerm,
  setSearchTerm,
  children,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        active={searchActive}
        placeholder="Search films and series"
      />
    </Search>
  );
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return (
    <Picture src={src ? `../images/users/${src}.png` : ""} {...restProps} />
  );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.TextLink = function HeaderTextLink({ active, children, ...restProps }) {
  return (
    <TextLink active={active ? active : ""} {...restProps}>
      {children}
    </TextLink>
  );
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
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
