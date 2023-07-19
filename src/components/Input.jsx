import { motion } from 'framer-motion'
import React from 'react'
import { styled } from 'styled-components'

const Wrapper= styled.div`
  display: flex;
  flex-direction: column;
  opacity: .1;
  gap: 5px;
  & label {
    margin-left: -50%;
    color:#d6ddef ;
    font-size: 14px;
  }

`
const InputStyle =styled.input`

    background-color: transparent;
    outline: 0;
    border: 1px solid #3a4971;
    padding: 10px;
    color: white;
    border-radius: 4px;
    &::placeholder{
      color:#40507c;
    }
    transform: translateX(-150px);

`


function Input({label="",delay=0}) {
  return (
    <Wrapper as={motion.div} animate={{ x: 150,opacity:1 }} transition={{ delay: delay,duration:.3 }}>
      <label htmlFor={label}>{ label}</label>
      <InputStyle name={ label} placeholder={`enter your ${label.toLocaleLowerCase()}`} />

    </Wrapper>
  )
}

export default Input