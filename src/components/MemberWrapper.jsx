import React from 'react'
import Member from './Member'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
margin-top: 100px;
flex:1;
display: grid;
gap: 20px;
grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
grid-template-rows: repeat(10,minmax(220px,300px));
overflow-y: scroll;
&::-webkit-scrollbar{
  display: none;
}

`


function MemberWrapper() {

  const users = useSelector(state => state.users.users);

  return (
    <Wrapper>

      {users.map((user, idx) => <Member key={user.id} delay={`.${idx}`} user={user} />)}
    
    
     
     
    </Wrapper>
  )
}


export default MemberWrapper