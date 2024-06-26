import React from 'react'
import plus from '../Assets/add.png';
import minus from '../Assets/minus.png';
import trash from '../Assets/delete.png'

const Cartitem = ({ image, name, title, new_price, old_price, size, quantity, handleIncrement, handleDecrement }) => {
  return (
    <div className='cart-image'>
      <img src={image} alt='' />
    <div className='cart-container'>
      <div className='cart-name'>
          <span>{name}</span>
      </div>
      <div className='cart-title'>
          <span>{title}</span>
      </div>
      <div className='cart-size'>
      <p>Size: {size}</p>
      </div>
      <div className='cart-prices'>
              <p className='cart-product-newprice'><b>₹{new_price}</b></p>
              <p className='cart-product-oldprice'>₹{old_price}</p>
      </div>
      <div className='plus-cart'>
      <img src={minus} alt='' onClick={() => handleDecrement()}/>
      <input type='text' value={quantity} readOnly />
      <img src={plus} alt=''  onClick={() => handleIncrement()}/>
      </div>
      <div className='delete-icon' >
      <img src={trash} alt=''/>
      </div>
    </div>
    </div>
  )
}

export default Cartitem
