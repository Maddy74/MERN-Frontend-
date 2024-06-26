import React from 'react'
import './Beauty.css'
import Beautybanner from './Beautybanner';
import Beautycarddetails from './Beautycarddetails';
import Beautymodern from './Beautymodern';

import perfumebanner from '../Components/Assets/perfumebanner.webp';
const Beauty = () => {
  return (
    <div>
    <Beautybanner />
      <Beautycarddetails />
      <Beautymodern />
      <div className='perfume'>
      <div className='evevan'>
      <img src={perfumebanner} alt='' />
      <div className='perfume-content1'>
      <span>Evevan Perfume</span>
      <div className='perfume-content2'>
      <span>Fragrance Extracted From Nature</span>
      </div>
      <div className='pbtn'>
      <button>Shop Now</button>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Beauty
