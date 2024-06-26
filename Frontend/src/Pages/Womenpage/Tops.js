import React from 'react'
import { Link } from 'react-router-dom';
import women_products from '../../Components/Assets/women_product';
import './Tops.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Tops = () => {
  const womentopsProducts = women_products.filter(product => product.category === 'womentops');
  return (
    <div>
      <div className='card-container'>
    <Sidebar />
    <div className='card'>
      {womentopsProducts.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/women/${product.id}`}>
              <img src={product.image} alt={product.name} /></Link>
              <div className='product-name'>
              <span>{product.name}</span>
              </div>
              <div className='product-title'>
              <span>{product.title}</span>
              </div>
              <div className='prices'>
              <p className='product-newprice'>MRP: ₹{product.new_price}</p>
              <p className='product-oldprice'>MRP: ₹{product.old_price}</p>
                <span>{product.offer}</span>
              </div>
          </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default Tops
