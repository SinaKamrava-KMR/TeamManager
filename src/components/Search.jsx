import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #26345a;
    border-radius: 7px;
    min-width: 300px;
    width: 400px;
`

const InputStyle=styled.input`
  outline: 0;
  border: 0;
  width: 100%;
  background-color: transparent;
  color: white;
  &::placeholder{
    color: #7e8ca5;
  }


`

const Icon = styled.i`
   color: #c4cee7;
`


function Search() {
  return (
    <Wrapper>
      <Icon className="bi bi-search"></Icon>
      <InputStyle type='text' placeholder='search your member' />

    </Wrapper>
  )
}

export default Search