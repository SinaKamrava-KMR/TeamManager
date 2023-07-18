import React, { useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  max-width: 350px;
  background-color: #040e24;
  border-radius: 30px;
  padding-block: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

const Item = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  gap: 10px;
  z-index: 2;
  cursor: pointer;
`;

const Roll = styled.div`
  position: absolute;
  left: ${(props) => props.left}%;
  top: 5px;
  bottom: 5px;
  width: 35%;
  background-color: #304676;
  border-radius: 30px;
  transition: all 0.5s ease-in-out;
`;

function FilterBox() {
  const [position,setPosition] = useState(1)
  function handleClick(v) {
      setPosition(v)
  }

  return (
    <Wrapper>
      <Roll left={position}></Roll>
      <Item onClick={()=>handleClick(1)}>
        <i className="bi bi-check-all"></i>
        <p>All</p>
      </Item>
      <Item  onClick={()=>handleClick(33)}>
        <i class="bi bi-people-fill"></i>
        <p>Family</p>
      </Item>
      <Item  onClick={()=>handleClick(63.5)}>
        <i class="bi bi-building-check"></i>
        <p>coworker</p>
      </Item>
    </Wrapper>
  );
}

export default FilterBox;
