import React from "react";

import JumbotronProps, { JumbotronComposition } from "./jumbotron.types";
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

const Jumbotron: React.FC<JumbotronProps> & JumbotronComposition = ({
  children,
  direction = "row",
  ...restProps
}) => {
  return (
    <Item>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronContainer({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronTitle({ ...restProps }) {
  return <Image {...restProps} />;
};

export default Jumbotron;
