import React from 'react'
import './Feature.css';

import { FeatureContainer } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1 className='feature-heading'>Limited Time Only</h1>
      <p className='feature-desc'>
        Our crispy fried chicken breast on our homemade brioche bun, pickles, cole slaw, and special spicy sauce. Get it for a limited time only!! Served with our seasoned french fries
      </p>
      <button className='lto-button'>Order Now</button>
    </FeatureContainer>
  )
}

export default Feature
