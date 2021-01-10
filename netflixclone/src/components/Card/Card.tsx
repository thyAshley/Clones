import React, { useState, useContext, createContext } from "react";

import { CardComposition } from "./Card.types";
import {
  Container,
  Group,
  SubTitle,
  Title,
  Entities,
  Text,
  Meta,
  Image,
  FeatureText,
  Feature,
  FeatureTitle,
  FeatureClose,
  Content,
  Maturity,
  Item,
} from "./styles";

export const FeatureContext = createContext<any>(null);

const Card: React.FC & CardComposition = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>;
    </FeatureContext.Provider>
  );
};

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};
Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Card.Item = function CardGroup({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  console.log(item);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};
Card.FeatureText = function CardFeatureText({ children, ...restProps }) {
  return <FeatureText {...restProps}>{children}</FeatureText>;
};
Card.Feature = function CardFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Card.FeatureTitle = function CardFeatureTitle({ children, ...restProps }) {
  return <FeatureTitle {...restProps}>{children}</FeatureTitle>;
};
Card.FeatureClose = function CardFeatureClose({ children, ...restProps }) {
  return <FeatureClose {...restProps}>{children}</FeatureClose>;
};
Card.Content = function CardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Card.Maturity = function CardMaturity({ children, ...restProps }) {
  return <Maturity {...restProps}>{children}</Maturity>;
};

export default Card;
