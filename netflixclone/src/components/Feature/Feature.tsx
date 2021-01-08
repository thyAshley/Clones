import React from "react";

import { FeatureComposition } from "./Feature.types";
import { Container, Title, SubTitle } from "./styles";

const Feature: React.FC & FeatureComposition = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Feature.SubTitle = function FeatureTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature;
