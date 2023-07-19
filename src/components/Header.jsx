import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";
import Search from "./Search";
import FilterBox from "./FilterBox";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: linear-gradient(200deg, #20325d, #0d1a37);
  min-height: 250px;
  border-radius: 10px;
  margin-top: -100px;
  opacity: 0;
  padding: 20px;

  & h1 {
    text-align: center;
    margin-top: 20px;
    font-size: 40px;
    opacity: 0;
    margin-right: -200px;
  }
  @media (max-width: 900px) {
    & h1{
      font-size: 30px;
    }
  }


`;
const IconWrapper = styled.div`
  border: 1px solid #33446d;
  color: #c4cee7;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all .2s ease-in;
  cursor: pointer;
  &:hover{
    background-color: #27385f;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

function Header() {
  return (
    <Wrapper
      as={motion.header}
      animate={{ y: 100, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Search />
        <span className="flex1"></span>
        <IconWrapper>
          <i className="bi bi-flag"></i>
        </IconWrapper>
        <IconWrapper>
          <i class="bi bi-three-dots-vertical"></i>
        </IconWrapper>
      </Container>

      <motion.h1
        animate={{ x: -100, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Managing Your Members
      </motion.h1>

      <span className="flex1"></span>

      <FilterBox />
    </Wrapper>
  );
}

export default Header;
