import React from "react";
import { styled } from "styled-components";
import Header from "../components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  min-height: 400px;
  overflow-y: scroll;
  /* border-radius: 10px; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Main() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default Main;
