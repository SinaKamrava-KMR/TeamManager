import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";

const Wrraper = styled.button`
  background: ${(props) =>
    props.type === "deactive"
      ? "#7f8aa5"
      : `linear-gradient(137deg, #315cca, #0553ac)`};
  cursor: ${(props) => (props.type === "deactive" ? "not-allowed" : "pointer")};

  color: white;
  outline: 0;
  border: 0;
  border-radius: 4px;
  padding-block: 10px;
  opacity: 0;
  margin-bottom: -100px;
`;

function Button({ children, type }) {
  return (
    <Wrraper
      type={type}
      as={motion.button}
      animate={{ y: -100, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
    >
      {children}
    </Wrraper>
  );
}

export default Button;
