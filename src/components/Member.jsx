import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { setCurrentUser, remove } from "../store/index.js";
import DeleteModal from "./DeleteModal.jsx";
import { createPortal } from "react-dom";
const Wrapper = styled.div`
  background: linear-gradient(200deg, #20325d, #0d1a37);
  border-radius: 10px;
  margin-top: 200px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  background-color: #20325d;
  font-size: 35px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: #3d599a;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardHeader = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  & p:first-child {
    font-size: 24px;
    font-weight: bold;
    color: #d6d6d6;
  }
  & p:last-child {
    font-size: 14px;
    color: #a8b5d4;
  }
`;

const Email = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  & i {
    color: #a8b5d4;
  }
  margin-left: 10px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #556486;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & p:first-child {
    color: #8291b6;
  }
`;
const FooterIconWrapper = styled.div`
  cursor: pointer;
  background-color: #2c3c62;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 4px;

  &:hover {
    background-color: #2f477e;
  }
`;

function Member({ delay = 0, user }) {
  const storeDispatch = useDispatch();

  const [isDelete, setIsDelete] = useState(false);


  function handleRemoveUser() {
    storeDispatch(remove({id:user.id}))
  }

  function handleClickDelete() {
    setIsDelete((s) => !s);
  }

  return (
    <Wrapper
      as={motion.div}
      animate={{ marginTop: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {isDelete && createPortal(<DeleteModal onDelete={handleRemoveUser} setIsDelete={setIsDelete} user={user} />, document.body)}

      <CardHeader>
        <ImageWrapper>
          {user.image === "" ? (
            <i className="bi bi-person-bounding-box"></i>
          ) : (
            <Image src={user.image} />
          )}
        </ImageWrapper>

        <TextWrapper>
          <p>
            {user.userName} {user.userLastName}
          </p>
          <p>{user.phone}</p>
        </TextWrapper>
      </CardHeader>

      <Email>
        <i className="bi bi-envelope-paper-fill"></i>
        <p>{user.email}</p>
      </Email>
      <Line></Line>

      <CardFooter>
        <p>{user.related}</p>
        <span className="flex1"></span>

        <FooterIconWrapper onClick={handleClickDelete}>
          <i className="bi bi-journal-x"></i>
        </FooterIconWrapper>
        <FooterIconWrapper onClick={() => storeDispatch(setCurrentUser(user))}>
          <i className="bi bi-pencil-square"></i>
        </FooterIconWrapper>
      </CardFooter>
    </Wrapper>
  );
}

export default Member;
