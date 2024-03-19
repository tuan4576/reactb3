import React from 'react'

export default function Product() {
  return (
<div classname="thumbnail">
  <a href="product_details.html" classname="overlay"></a>
  <a classname="zoomTool" href="product_details.html" title="add to cart"><span classname="icon-search"> QUICK VIEW</span></a>
  <a href="product_details.html"><img src="assets/img/a.jpg" alt ='tam' /></a>
  <div classname="caption cntr">
    <p>Manicure &amp; Pedicure</p>
    <p><strong> $22.00</strong></p>
    <h4><a classname="shopBtn" href="#st" title="add to cart"> Add to cart </a></h4>
    <div classname="actionList">
      <a classname="pull-left" href="#st">Add to Wish List </a> 
      <a classname="pull-left" href="#st"> Add to Compare </a>
    </div> 
    <br classname="clr" />
  </div>
</div>

  )
}
