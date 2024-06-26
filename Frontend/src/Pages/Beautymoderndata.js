import React from 'react'

export default function Beautymoderndata(props) {
  return (
    <div className='modernslide'>
    <div className='moderns'>
      <img src={props.image} alt='' />
      </div>
    </div>
  )
}

export function Beautyarrival(props){
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


export function Perfume(props){
  return (
    <div className='perfume-card'>
    <div className='perfume-img'>
      <img src={props.url} alt='' />
      <div className='perfume-details'>
      <p className='ptitle'>{props.title}</p>
      <p className='pold_price'>₹{props.old_price}</p>
      <p className='pnew_price'>₹{props.new_price}</p>
      </div>
    </div>
    </div>
  )
}