import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";

const Wrraper = styled.button`

background: linear-gradient(137deg, #315cca, #0553ac);
color: white;
outline: 0;
border: 0;
border-radius: 4px;
padding-block: 10px;
opacity: 0;
margin-bottom: -100px;
`;

function Button({ children }) {
  return <Wrraper as={motion.button} animate={{ y:-100 , opacity:1}} transition={{delay:.4,duration:.3}}
  >{children}
  </Wrraper>;
}

export default Button;
