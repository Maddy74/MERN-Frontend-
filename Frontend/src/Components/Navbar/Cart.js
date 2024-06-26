import React from 'react'
import './Cart.css'
import { useCart } from '../../Context/CartContext';
import CartDesign from './CartDesign'
const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <div className='empty-cart'>No items in cart.</div>; // Inform the user if the cart is empty
  }


  

  return (
    <div>
        <CartDesign cart={cart}/>
    </div>
  )
}

export default Cart
