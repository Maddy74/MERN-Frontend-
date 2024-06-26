import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import all_products from '../../Components/Assets/men_product';

import './Tshirt.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
const Tshirt = () => {

  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]); // To store filtered product results
  const [products, setProducts] = useState([]);

  // Fetch products from API or database
  useEffect(() => {
    fetch('your-api-endpoint')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  // Apply filters to the product list
  useEffect(() => {
    let updatedProducts = products;

    if (filters.category) {
      updatedProducts = updatedProducts.filter((product) => product.category === filters.category);
    }

    if (filters.brand) {
      updatedProducts = updatedProducts.filter((product) => product.brand === filters.brand);
    }

    if (filters.price) {
      const [min, max] = filters.price.split(' to ').map(Number);
      updatedProducts = updatedProducts.filter((product) => product.price >= min && product.price <= max);
    }

    if (filters.color) {
      updatedProducts = updatedProducts.filter((product) => product.color === filters.color);
    }

    setFilteredProducts(updatedProducts);
  }, [filters, products]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Update filters based on Sidebar changes
  };

  const tshirtProducts = all_products.filter(product => product.category === 'tshirt')
  return (
    <div>
    <div className='card-container'>
    <Sidebar onFilterChange={handleFilterChange}/>
    <div className='card'>
      {tshirtProducts.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
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

export default Tshirt
