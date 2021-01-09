import React from "react";

import { ProfileComposition, ProfileAttributes } from "./profile.types";
import { Container, Title, Item, List, Picture, Name } from "./styles";

const Profile: React.FC<ProfileAttributes> & ProfileComposition = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.User = function ProfileItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profile.Picture = function ProfilePicture({ src, children, ...restProps }) {
  return (
    <Picture
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
      {...restProps}
    >
      {children}
    </Picture>
  );
};

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

export default Profile;
