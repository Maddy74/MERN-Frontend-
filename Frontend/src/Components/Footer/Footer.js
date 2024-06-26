import React from 'react'
import './Footer.css'
import facebook from '../Assets/facebook (1).png'
import instagram from '../Assets/instagram (1).png'
import x from '../Assets/twitter.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-media'>
      <img src={instagram} alt='' />
      </div>
      <div className='social-media'>
      <img src={facebook} alt='' />
      </div>
      <div className='social-media'>
      <img src={x} alt='' />
      </div>
      <div  className='copywright'>
      <span>©2024 WynkWear India Pvt. Ltd</span>
      </div>
    </div>
  )
}

export default Footer
