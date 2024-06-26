import React, { useState} from 'react';
import './Sidebar.css'

const Sidebar = ({ onFilterChange }) => {

    const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Update the selected filter and call onFilterChange to notify parent component
  const handleFilterChange = (type, value) => {
    switch (type) {
      case 'category':
        setSelectedCategory(value);
        break;
      case 'brand':
        setSelectedBrand(value);
        break;
      case 'price':
        setSelectedPriceRange(value);
        break;
      case 'color':
        setSelectedColor(value);
        break;
      default:
        break;
    }

    // Call the parent's onFilterChange to notify about the filter change
    onFilterChange({ category: selectedCategory, brand: selectedBrand, price: selectedPriceRange, color: selectedColor });
  };

  return (
    <div className='sidebar'>
    <div className='filter'>
    <span>Filters</span>
    </div>
    <div className='line'></div>
    <div className='sidebar-content'>
      <div className='content1'>
        <span>CATEGORIES</span>
        <div>
        <label className='sidebar-label-container category'>
            <input type='radio' name='category'
                onChange={() => handleFilterChange('category', 'Tshirts')}/>
            <span className='checkmark'></span>Tshirts
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='category'
                onChange={() => handleFilterChange('category', 'Lounge Tshirts')}/>
            <span className='checkmark'></span>Lounge Tshirts
        </label>
        </div>
      </div>
      <div className='line'></div>
      <div className='content2'>
        <span>BRAND</span>
        <div>
        <label className='sidebar-label-container category'>
            <input type='radio' name='brand'
                onChange={() => handleFilterChange('brand', 'Roadster')}/>
            <span className='checkmark'></span>Roadster
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='brand'
                onChange={() => handleFilterChange('brand', 'HRX by Hrithik Roshan')}/>
            <span className='checkmark'></span>HRX by Hrithik Roshan
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Friskers
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Puma
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Nike
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Tommy Hilfiger
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>U.S. Polo Assn
        </label>
        </div>
      </div>
      <div className='line'></div>
      <div className='content3'>
        <span>Price</span>
        <div>
        <label className='sidebar-label-container category'>
            <input type='radio'  name='price'
                onChange={() => handleFilterChange('price', 'Rs.149 to Rs.6237')}/>
            <span className='checkmark'></span>Rs.149 to Rs.6237
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='price'
                onChange={() => handleFilterChange('price', 'Rs.6237 to Rs.12325')}
              />
            <span className='checkmark'></span>Rs.6237 to  Rs.12325
        </label>
        </div>
      </div>
      <div className='line'></div>
      <div className='content4'>
        <span>Color</span>
        <div>
        <label className='sidebar-label-container category'>
            <input type='radio'  name='color'
                onChange={() => handleFilterChange('color', 'Black')}/>
            <span className='checkmark'></span>Black
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Red
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>White
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Navy Blue
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Green
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Grey
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Blue
        </label>
        <label className='sidebar-label-container category'>
            <input type='radio' name='test' />
            <span className='checkmark'></span>Yellow
        </label>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
