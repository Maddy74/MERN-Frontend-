import React from 'react'

export default function Beautycard (props) {
  return (
    <div className='product-card'>
    <div className='product-img'>
      <img src={props.url} alt='' />
      <div className='product-details'>
      <p className='title'>{props.title}</p>
      <p className='old_price'>₹{props.old_price}</p>
      <p className='new_price'>₹{props.new_price}</p>
      </div>
    </div>
    </div>
  )
}
