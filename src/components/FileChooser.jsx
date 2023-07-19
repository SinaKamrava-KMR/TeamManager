import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  width: 100px;
  height: 100px;
  background-color: #162345;
  border-radius: 50%;
  margin-bottom: 20px;
  opacity: 0;
  
`;
const InputStyle = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 50px;
  color: #475e9a;
`;
const Text = styled.p`
  position: absolute;
  bottom: -25px;
  color: #374d83;
`;
const Image = styled.img`

object-fit: cover;
border-radius: 50%;
width: 100px;
height: 100px;

`;
function FileChooser({ image,dispatch }) {
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
      if (selectedImage !== null) {
    dispatch({ type:"user/image",payload:URL.createObjectURL(selectedImage)})
    console.log(image);
  }
  },[selectedImage])

 

  return (
    <Wrapper
      as={motion.div}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {image === "" ? (
        <Icon className="bi bi-images"></Icon>
      ) : (
        <Image src={image} />
      )}

      <Text>Set Profile</Text>
      <InputStyle type="file" onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}/>
    </Wrapper>
  );
}

export default FileChooser;
