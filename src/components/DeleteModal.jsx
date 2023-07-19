import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const BackDrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: #0e0e0ea9;
  z-index: 9;
`;
const Box = styled.div`
  background-color: #10162c;
  box-shadow: 0 0 10px #0d0c1d;
  width: 50%;
  color: white;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 15;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 100px;
`;
const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "contained" ? "#f25858" : "transparent"};
  border: 1px solid
    ${(props) => (props.variant === "outline" ? "#848181" : "transparent")};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.variant === "contained" ? "#ea4a4a" : "#151b30"};
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const Question = styled.p`
  font-size: 20px;
  font-weight: bold;
  & strong {
    color: #1a99ee;
  }
`;

const ImageWrapper = styled.div`
  background-color: #0d102b;
  font-size: 35px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  color: #3d599a;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 10px;

  & p:first-child {
    font-size: 24px;
    font-weight: bold;
  }
 
`;
const Content = styled.div`
  display: flex;
  gap:10px;
`;

function DeleteModal({ user,onDelete,setIsDelete }) {
  return (
    <Wrapper>
      <BackDrop></BackDrop>
      <Box as={motion.div} animate={{ y: 50 }}>
        <Question>
          Are you sure to remove <strong>{user.userName} {user.userLastName}</strong> From your Team ??
        </Question>
        <Content>
        <ImageWrapper>
          {user.image === "" ? (
            <i className="bi bi-person-bounding-box"></i>
          ) : (
            <Image src={user.image} />
          )}
        </ImageWrapper>
        <TextWrapper>
          <p>
            {user.email}
          </p>
          <p>
             your {user.related}
          </p>
          <p>{user.phone}</p>
        </TextWrapper>
        </Content>

        <span className="flex1"></span>
        <ButtonGroup>
          <Button onClick={()=>setIsDelete(false)} variant="outline">Cancel</Button>
          <Button onClick={()=>onDelete()} variant="contained">Remove</Button>
        </ButtonGroup>
      </Box>
    </Wrapper>
  );
}

export default DeleteModal;
