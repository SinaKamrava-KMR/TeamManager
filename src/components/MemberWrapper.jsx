import React from 'react'
import Member from './Member'
import { styled } from 'styled-components'

const Wrapper = styled.div`
margin-top: 100px;
flex:1;
display: grid;
gap: 20px;
grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
grid-template-rows: repeat(10,minmax(250px,300px));
overflow-y: scroll;
&::-webkit-scrollbar{
  display: none;
}

`


function MemberWrapper() {
  return (
    <Wrapper>
      <Member/>
      <Member delay={.1}/>
      <Member delay={.2}/>
      <Member delay={.3}/>
      <Member delay={.4}/>
      <Member delay={.5}/>
      <Member delay={.6}/>
      <Member delay={.7}/>
      <Member delay={.8}/>
      <Member delay={.9}/>
      <Member delay={.1}/>
     
    </Wrapper>
  )
}


export default MemberWrapper