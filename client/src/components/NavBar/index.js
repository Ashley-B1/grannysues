import React from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom'

import { MdFastfood } from 'react-icons/md'

const NavBar = () => {
  // const icon = MdFastfood;
  return (
    <>
      <nav className='hero-nav'>
        <Link to='/' className='nav-header'>Granny Sue's</Link>
        <div className='nav-icon'>
          <p className='menu-p'>Menu</p>
          <MdFastfood className='menu-icon'/>
        </div>
      </nav>
    </>
  )
}

export default NavBar
