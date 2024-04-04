import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container mx-auto flex justify-between'>
        <Link to='/'>Demo Streaming</Link>
        <div className='submenu'>
          <a href='#'>Log In</a>
          <a href='#'>Start your free trial</a>
        </div>
      </div>
    </nav>
  )
}
