import React from "react";

import "./styles.scss";

import { HeaderOptionProps } from "./types";
import { Avatar } from "@material-ui/core";

const HeaderOption: React.FC<HeaderOptionProps> = ({
  avatar,
  Icon,
  title,
  children,
  ...restProps
}) => {
  return (
    <div {...restProps} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
