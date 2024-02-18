import React from 'react';
// import { useCartContext } from "./context/cart_context"
// import { CartItem } from "./Components/CartComp/CartItem";

const Cart = () => {
  return (
    <div>
        <div>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
            <div>
{/* {
    cart.map((curElem) =>{
        return <CartItem key={curElem.id} {...curElem} />;
    })
} */}
            </div>
        </div>
    </div>
  )
}

export default Cart;