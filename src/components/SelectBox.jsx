import { motion, useTransform } from "framer-motion";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  gap: 5px;
  & label {
    margin-left: -50%;
    color: #d6ddef;
    font-size: 14px;
  }
`;

const Select = styled.select`
  background-color: transparent;
  outline: 0;
  border: 1px solid #3a4971;
  padding: 10px;
  color: white;
  border-radius: 4px;

  transform: translateX(-150px);
  & option {
    background-color: #1b2645;
  }
`;

function SelectBox({ label, delay, value, name, dispatch }) {
  function handleChangeValue(e) {
    dispatch({ type: name, payload: e });
  }

  return (
    <Wrapper
      as={motion.div}
      animate={{ x: 150, opacity: 1 }}
      transition={{ delay: delay, duration: 0.3 }}
    >
      <label>{label}</label>

      <Select value={value} onChange={(e) => handleChangeValue(e.target.value)}>
        <option value='Frinds'>Frinds</option>
        <option value='Family'>Family</option>
        <option value='Coworker'>Coworker</option>
        <option value='Classmate'>Classmate</option>
      </Select>
    </Wrapper>
  );
}

export default SelectBox;
