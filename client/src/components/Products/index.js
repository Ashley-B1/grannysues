import React from 'react'

import './Products.css'
import { dinnerData } from './data'

const Products = () => {
  return (
    <div className='products-container'>
      <h1 className='products-heading'>Order Dinner</h1>
      <div className='product-wrapper'>
        {dinnerData.map((product, i) => (
          <div className='product-card' key={i}>
            <img className='product-img' src={product.image} alt={product.name} />
            <div className='product-info'>
              <h2 className='product-title'>{product.name}</h2>
              <p className='product-desc'>{product.desc}</p>
              <p className='product-price'>{product.price}</p>
              <button className='product-button'>Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
