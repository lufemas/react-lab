import React, { useState } from 'react'

import fakeDB from '../models/Products'
import products from '../models/Products'

export default function Product({product}){

  const imageStyle= {
    objectFit: "contain",
    height: "10rem",
    width: "auto",
  }

  function handleAddToCart(e){
    e.preventDefault()
    alert(`${product.name} added to your cart.`)
  }

  return (
    <div className="jr mt-2">

      <h2>{product.name}</h2>
      <div className="jr flex-m-row flex-col">
        <div className="jr col-m-3 p-05">
          <img style={imageStyle} src={`https://fakeamazon-kadeem-assignment-2.herokuapp.com${product.imgSrc}`} alt=""/>
        </div>

        <p className="jr col-m-9">{product.description}</p>
      </div>

      <div className="jr flex-row between p-1">
        <p><em>CDN$</em> {product.price}</p>
        <button className="jr button m-0" onClick={handleAddToCart}>Add to Cart</button>

      </div>

    </div>
  )
}

