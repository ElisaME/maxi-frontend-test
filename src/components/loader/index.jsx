import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
`

const LoaderElement = styled.div`
    border:8px solid #f2f2f2;
    border-radius:50%;
    border-top:8px solid #3498db;
    width: 50px;
    height: 50px;
    animation: ${spin} 1.5s linear infinite;
    margin: 2em auto;
`
const Loader = () => {
  return (
    <LoaderElement/>
  )
}

export default Loader