import React from "react";

import "./styles.scss";

import { InputOptionProps } from "./types";

const InputOption: React.FC<InputOptionProps> = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      {Icon && <Icon style={{ color: color }} />}
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
