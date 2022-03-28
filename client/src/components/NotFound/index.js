import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css';
import notFoundImage from '../../images/404-image.jpeg';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='nf-card'>
        <h1>404 PAGE NOT FOUND 🤬</h1>
        <h2>Alright, so boom 😬...</h2>
        <img src={notFoundImage} alt='404-meme' />
        <p>I ain't built this page yet 🤷🏽‍♀️ 😐.</p>
        <Link className='nf-link' to='/'>Let's head back to home homie...</Link>
      </div>
    </div>
  )
}

export default NotFound
