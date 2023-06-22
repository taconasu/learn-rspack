import styled from "styled-components";
import React, { useContext } from "react";
import { CounterContext } from "../contexts/counter";

export const Count: React.FC = () => {
  const count = useContext(CounterContext);

  return <GradientText>{count}</GradientText>;
};

const GradientText = styled.span`
  background: linear-gradient(#e66465, #9198e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  font-size: 48px;
  font-weight: bold;
`;
