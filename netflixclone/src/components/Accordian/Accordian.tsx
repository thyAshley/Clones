import React, { createContext, useState, useContext } from "react";

import { Container, Inner, Title, Frame, Item, Header, Body } from "./styles";
import { AccordianComposition } from "./accordian.types";

interface toggleContextProps {
  toggleShow?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}
const toggleContext = createContext<toggleContextProps>({});

const Accordian: React.FC & AccordianComposition = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordian.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Accordian.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordian.Item = function AccordianItem({ children, ...restProps }) {
  const [toggleShow, setToggle] = useState(false);
  return (
    <toggleContext.Provider value={{ toggleShow, setToggle }}>
      <Item {...restProps}>{children}</Item>
    </toggleContext.Provider>
  );
};
Accordian.Header = function AccordianItem({ children, ...restProps }) {
  const { setToggle } = useContext(toggleContext);
  if (!setToggle) return null;
  return (
    <Header
      onClick={() => setToggle((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
    </Header>
  );
};

Accordian.Body = function AccordianBody({ children, ...restProps }) {
  const { toggleShow } = useContext(toggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordian;
