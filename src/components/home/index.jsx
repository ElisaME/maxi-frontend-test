import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const H1= styled.h1({
  margin:0,
  fontWeight:'normal',
  fontSize:'1.5em',
  padding:'10px 0',
  textAlign:'left'
})

export const CardContainter = styled.div({
  height: '15rem',
  border:'1px solid black',
  width: '10em',
  margin:'0 10px',
  backgroundColor:'#2c2c2c',
  display:'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderRadius:8,
  flexDirection:'column',
  position: 'relative',
  img:{
    width:'80%',
    '@media (max-width: 768px)': {
      width:'70%',
    }
  },
  '#titleSeries':{
    color:'white',
    fontSize:'1.5em',
    fontWeight:'medium',
    fontStyle:'italic',
    zIndex:20,
    transition:'transform 0.3s ease-in-out, font-size 0.3s ease-in-out',
    '@media (max-width: 768px)': {
      fontSize:'1em'
    }
  },
  '&:hover':{
    '#titleSeries':{
      transform:'scale(1.2)',
      color:'#00feca',
    }
  }
})

const Home = () => {
  return (
    <>
    <div className='bg-[#2c2c2c] text-gray-300'>
    <div className='container mx-auto px-1'>
        <H1>Popular Titles</H1>
      </div>
    </div>
    <div className='container mx-auto m-8 grid grid-cols-1 sm:grid-cols-4 gap-2'>
      <div className='mx-auto'>
        <Link to="/series">
          <CardContainter id="popular-series-card">
            <img src="/series.png" alt='popularSeries'/>
            <p id="titleSeries">Popular<br></br>Series</p>
          </CardContainter>
        </Link>
      </div>
      <div className='mx-auto'>
        <Link to="/movies">
          <CardContainter>
            <img src="/movies.png" alt='popularMovies'/>
            <p id="titleSeries">Popular<br></br>Movies</p>
          </CardContainter>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home;