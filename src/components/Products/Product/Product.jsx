import React, { useEffect, useState } from "react";



const Product = () => {
  // Note: this id should come from api

  const [count, setCount] = useState(0)
  const [prod, setprod] = useState([])
  const [cart, setcart] = useState([])


  useEffect(() => {
    fetch(" http://localhost:8080/products")
    .then((res)=> res.json())
    .then((d) => {
      setprod(d)
      console.log(d)
    })
   
  },[] )

  useEffect(() => {
    fetch(" http://localhost:8080/cartItems")
    .then((res)=> res.json())
    .then((c) => {
      setcart(c)
      console.log(c)
    })
   
  },[] )



  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      {prod.map((item)=>(
       <div key={item.id}> 
       <h3 data-cy="product-name">{item.name}</h3>
       <h6 data-cy="product-description">{item.description}</h6>
       <button data-cy="product-add-item-to-cart-button">{"Add To Cart"}</button>
</div>

))}   
    
    {cart.map((e)=>(
         <div key={e.id}>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=> setCount( count + 1)}>+</button>
        <span data-cy="product-count">
          {e.length}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=> setCount(count - 1)}>-</button>
        <h4> {count }</h4>
        <button data-cy="product-remove-cart-item-button">Remove from Cart</button>
      </div>
       ))}
       
    </div>
  );
};

export default Product;
