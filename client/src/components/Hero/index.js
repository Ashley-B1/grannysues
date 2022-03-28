import './Hero.css';
import React, { useState } from 'react'

import heroBg from '../../images/hero-bg2.jpeg'
import NavBar from '../NavBar';
import SideBar from '../SideBar';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='hero' style={{background: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${heroBg})`}}>
      <NavBar toggle={toggle} />
      <SideBar toggle={toggle} isOpen={isOpen} />
      <div className='hero-content'>
        <div className='hero-items'>
          <h1 className='hero-title'>Best Soul Food in Dallas!</h1>
          <p className='hero-p'>Call Today!</p>
          <button className='hero-btn'>
            Order Now!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
