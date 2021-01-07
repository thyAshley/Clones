import React from "react";

import { Container, Input, Button, Text } from "./styles";
import { OptFormComposition } from "./optform.types";

const OptForm: React.FC & OptFormComposition = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};
OptForm.Button = function optFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};
OptForm.Text = function optFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

export default OptForm;
