import './Hero.css';
import React from 'react'

import heroBg from '../../images/hero-bg.jpeg'

const Hero = () => {
  return (
    <div className='hero' style={{background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${heroBg})`}}>
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
