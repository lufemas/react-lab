import React, { useState } from 'react'

import fakeDB from '../models/Products'
import products from '../models/Products'

import Product from '../components/Product'

export default function Products(){

  const [productsList, setProductsList ] = useState([...fakeDB.getAllProducts()])

  const productCardStyle = {
    height: "20em",
  };

  return (
    <article>
      <div>
        <ul className="jr flex-row around list-raw">
          <li className="jr m-2"><button className="jr button-primary" onClick={(e)=> setProductsList(products.getAllProducts)}>All</button></li>
          {
            products.getCategories().map( (category, ind) => (

              <li className="jr m-2"><button className="jr button-primary" onClick={(e)=> setProductsList(products.getProductsFromCategory(category))}>{category}</button></li>

            ))
          }
        </ul>
      </div>
      <h2 className="jr text-center">Products List</h2>

      <ul className="jr flex-col list-raw w80 m-auto center">
        {
          productsList.map( (product, ind) => (
            <li key={ind} className="jr card w100 m-auto p-1" style={productCardStyle}>
              <Product product={product} />
            </li>
          ) )
        }
      </ul>

    </article>
  )
}

