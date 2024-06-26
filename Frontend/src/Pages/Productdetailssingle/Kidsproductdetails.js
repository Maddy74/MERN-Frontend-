import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { useWishlist } from '../../Context/WishlistContext';
import wishlist from '../../Components/Assets/heart.png'
import './Kidsproductdetails.css'
import kids_products from '../../Components/Assets/kids_product';
const Womenproductdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = kids_products.find((e) => e.id === parseInt(id));
  const { addToCart } = useCart(); // Get the addToCart function from context
  const { addToWishlist } = useWishlist();
  
  // State to track the current main product image
  const [mainImage, setMainImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(null); // New state to track selected size
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    console.log("Add to Cart button clicked");
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }
    addToCart({...product, size: selectedSize}); // Call addToCart with the current product
    setShowAddedToCart(true); // Show the "Added to Cart" message
    
    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowAddedToCart(false);
    }, 2000);
  };

  const handleWishlistClick = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }
    addToWishlist(product); // Add the product to wishlist
    navigate('/wishlist'); // Navigate to wishlist page
  };

  return (
    <div className="product-details-container">
      <div className='display-left'>
      <div className='productmain-img'>
      <img  src={mainImage} alt={product.name} />
      </div>
      <div className="thumbnails" >
      {product.images.map((img, id) => (
          <img key={id} src={img} alt={product.name} onMouseEnter={() => setMainImage(img)} 
              className="thumbnail-img"  />
        ))}
      </div>
    </div>

    {/* product description */}
    <div className='single-product-name'>
    <div className='single-name'>
    <span>{product.name}</span>
    </div>
    <div className='single-title'>
      <span>{product.title2}</span>
    </div>
    <div className='single-product-line'></div>
    {/* prices */}
    <div className='single-prices'>
              <p className='single-product-newprice'>MRP: ₹{product.new_price}</p>
              <p className='single-product-oldprice'>MRP: ₹{product.old_price}</p>
                <span>{product.offer}</span>
    </div>
    <div className='tax'>
    <span>inclusive of all taxes</span>
    </div>
    {/* select size */}
    <div className='select-size'>
    <h1>Select Size</h1>
    <div className='rightsize-btn'>
    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div 
                key={size}
                className={`cloth-sizes ${selectedSize === size ? 'selected' : ''}`} 
                onClick={() => handleSizeSelect(size)}
                >
                {size}
                </div>
              ))}
    </div>
    </div>
    {/* buy-btn */}
    <div className='wishlist-btn' onClick={handleWishlistClick}>
    <img src={wishlist} alt='' />
    </div>
    <div className='buy-btn'>
    <button>Buy Now</button>
    </div>
    {/* add to cart */}
    <div className='cart-btn'>
    <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
    {showAddedToCart && (
      <div className="added-to-cart-message">
        <p>Item added to cart!</p>
      </div>
    )}
    {/* product details */}
    <div className='pdetails'>
    <span>Product Details</span>
    <div className='prod-descr'>
    <p>Beige Tshirt for men</p>
    <p>Tribal printed</p>
    <p>Regular length</p>
    <p>Round neck</p>
    <p>Short, regular sleeves</p>
    <p>Knitted cotton fabric</p>
    </div>
    </div>
    {/* material & care */}
    <div className='material-care'>
    <span>Material & Care</span>
    <p>Cotton</p>
    <p>Machine Wash</p>
    </div>
    {/* size & fit */}
    <div className='size'>
    <span>Size & Fit</span>
    <p>Oversized</p>
    <p>The model (height 6') is wearing a size M</p>
    </div>
    </div>
    </div>
  )
}

export default Womenproductdetails
