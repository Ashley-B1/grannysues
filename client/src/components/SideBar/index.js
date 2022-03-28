import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { SideBarContainer } from './SideBarElements';
import './SideBar.css'

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <div className='icon'>
        <FaTimes className='close-icon' />
      </div>
      <div className='sidebar-menu'>
        <Link className='sb-link' to='/'>Home</Link>
        <Link className='sb-link' to='*'>About</Link>
        <Link className='sb-link' to='*'>Contact</Link>
        <Link className='sb-link' to='*'>Menu</Link>
      </div>
      <div className='side-btn-wrap'>
        <Link to='*' className='side-route'>Order Now!</Link>
      </div>
    </SideBarContainer>
  )
}

export default SideBar
