import React from 'react'

export default function Mentrending(props) {
  return (
    <div className='trend-img'>
      <img src={props.url} alt='' />
      <div className='product-descrip'>
      <span className='desc-name'>{props.name}</span>
      <p className='old-price'>MRP: ₹{props.old}</p>
      <p className='new-price'>MRP: ₹{props.new}</p>
      <p className='offer'>{props.offer}</p>
      </div>
    </div>
  )
}
