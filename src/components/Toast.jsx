import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(200deg, #111d3a, #0c1936);
  min-width: 300px;
  height: 65px;
  padding-left: 15px;
  position: fixed;
  right: 15px;
  bottom: 15px;
  color: white;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-color: #0ab04d;

`
function Toast({message}) {
  return (
    <Wrapper as={motion.div} animate={{ x: -20 }}>
      <Line></Line>
      {message}
    </Wrapper>
  );
}

export default Toast;
