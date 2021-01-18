import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}
const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      Child Component, {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default Child;
