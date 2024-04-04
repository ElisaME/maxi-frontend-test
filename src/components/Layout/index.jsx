import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar';
import { Footer } from '../footer';

 const Layout = () => {
  return (
    <div className='relative min-h-dvh'>
      <Navbar/>
      <div className='pb-48'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
	 )
}

export default Layout;