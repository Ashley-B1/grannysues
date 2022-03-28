import React from 'react'
import './Feature.css';

import featureBg from '../../images/lto-bg001.jpeg';
// import featureBg from 'https://gimmedelicious.com/wp-content/uploads/2019/09/Popeyes-Chicken-Sandwich_-9.jpg';

const Feature = () => {
  return (
    <div className='feature-container' style={{background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${featureBg}) no-repeat center cover`}}>
      <h1 className='feature-heading'>Limited Time Only</h1>
      <p className='feature-desc'>
        Our crispy friend chicken breast on our homemade brioche bun, pickles, and special spicy sauce. Get it for a limited time only!! Served with our seasoned french fries
      </p>
      <button className='lto-button'>Order Now</button>
    </div>
  )
}

export default Feature
