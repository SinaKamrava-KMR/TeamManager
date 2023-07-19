import { motion } from 'framer-motion'
import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
    background: linear-gradient(200deg, #20325d, #0d1a37);
    border-radius: 10px;
    margin-top: 200px;
    opacity: 0;
`



function Member({delay=0}) {
  return (
    <Wrapper as={motion.div} animate={{marginTop:0,opacity:1}} transition={{duration:.5,delay:delay}}>
      Member
    </Wrapper>
  )
}

export default Member