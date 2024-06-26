import React from 'react'
import Beautycard from './Beautycard';
import './Beautycarddetails.css'
import product1 from '../Components/Assets/product1.webp';
import product2 from '../Components/Assets/product2.webp';
import product3 from '../Components/Assets/product3.webp';
import product4 from '../Components/Assets/product4.webp';
const Beautycarddetails = () => {

    const beauty_product = [
        { 
      id:1,
      images:product1,
      title:"Women Beige",
      old_price:"26552",
      new_price:"2486",
    },
        { 
      id:2,
      images:product2,
      title:"Stay Concealer",
      old_price:"26552",
      new_price:"2486",
    },
        { 
      id:3,
      images:product3,
      title:"Skin Long-Wear",
      old_price:"26552",
      new_price:"2486",
    },
        { 
      id:4,
      images:product4,
      title:"Skin Foundation",
      old_price:"26552",
      new_price:"2486",
    },
]
    const beautycard = beauty_product.map((item) => {
        return <Beautycard key={item.id} url={item.images} title={item.title} old_price={item.old_price} new_price={item.new_price} />
});
  return (
    <div>
    <div className='sellers'>
      <div className='best-seller'>
      <h1>Best Seller</h1>
      </div>
      <div className='product-cards'>
        {beautycard}
      </div>
    </div>
</div>
  )
}

export default Beautycarddetails
