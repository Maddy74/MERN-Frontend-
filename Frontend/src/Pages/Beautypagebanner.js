import React from 'react'

export default function Beautybanners(props) {
  return (
    <div>
    <div className='beautybanner-img'>
      <img src={props.url1} alt='' />
      <img src={props.url2} alt='' />
      <img src={props.url3} alt='' />
      {props.url1 && (
      <div className='cards'>
    <div className='banner-text1'>
      <pre>{props.text1}</pre>
      </div>
      <div className='banner-texts1'>
      <pre>{props.texts1}</pre>
      </div>
      <div className='banner-texts2'>
      <pre>{props.texts2}</pre>
    </div>
    <div className='rogue'>
    <button>Shop Now</button>
    </div>
    </div>
    )}
    </div>
    <div className='banner-text2'>
      <pre>{props.text2}</pre>
      <div className='summer-lipstick'>
      {props.url2 && ( 
            <button>Shop Now</button>
          )}
    </div>
    </div>
    <div className='banner-text3'>
      <pre>{props.text3}</pre>
      </div>
      <div className='banner-text4'>
      <pre>{props.texts3} </pre>
      </div>
      <div className='banner-text5'>
      <pre>{props.texts4}</pre>
      <div className='moving'>
      {props.url3 && ( 
            <button>Shop Now</button>
          )}
    </div>
    </div>
    </div>
  )
}
