import React from 'react'
import styled from 'styled-components'
const H1= styled.h1({
    margin:0,
    fontWeight:'normal',
    fontSize:'1.5em',
    padding:'10px 0',
    textAlign:'left'
})

const HeaderTitle = (props) => {
    const {title} = props
  return (
    <div className='bg-[#2c2c2c] text-gray-300'>
    <div className='container mx-auto px-2'>
      <H1>{title}</H1>
    </div>
  </div>
  )
}

export default HeaderTitle;