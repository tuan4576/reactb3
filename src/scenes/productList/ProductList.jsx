import React from 'react'
import CategoryMenu from './CategoryMenu'
import ProductBox from '../../components/ProductBox'
export default function ProductList() {
  return (

 <div className="row">
    <div id="sidebar" className="span3">
       <CategoryMenu />
    </div>
    <div className="span9">
       <ProductBox /> 
    </div>
</div>

  )
}
