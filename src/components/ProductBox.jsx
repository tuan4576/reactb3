import React from 'react'
import Product from './Product'

export default function ProductBox() {
  return (
    <div className="well well-small">
  <h3>Our Products </h3>
  <div className="row-fluid">
    <ul className="thumbnails">
      <li className="span3">
        <Product />
      </li>
      <li className="span3">
        <Product />
      </li>
      <li className="span3">
        <Product />
      </li>
    </ul>
  </div>
</div>

  )
}
