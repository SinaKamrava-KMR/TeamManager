import { motion } from 'framer-motion'
import React from 'react'
import { styled } from 'styled-components'

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
  opacity:0;

`
const InputStyle = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`

const Icon = styled.i`
  font-size: 50px;
  color: #475e9a;
`
const Text = styled.p`
  position: absolute;
  bottom: -25px;
  color: #374d83;
`

function FileChooser() {
  return (
    <Wrapper as={motion.div} animate={{opacity:1}} transition={{duration:1}}>
      <Icon className="bi bi-images"></Icon>
      <Text>Set Profile</Text>
        <InputStyle type='file'/>
    </Wrapper>
  )
}

export default FileChooser