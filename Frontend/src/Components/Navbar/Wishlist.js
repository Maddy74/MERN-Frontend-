import React, { useState } from 'react'
import './Wishlist.css'
import { useCart } from '../../Context/CartContext'; 
import { useWishlist } from '../../Context/WishlistContext'; // Use Wishlist context
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  
  const { addToCart } = useCart(); // Get the addToCart function from context
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const { wishlist } = useWishlist(); // Access wishlist data
  const navigate = useNavigate();

  const handleAddToCart = (product, event) => {

    event.stopPropagation();
    console.log("Add to Cart button clicked");
    addToCart(product); // Call addToCart with the selected product
    setShowAddedToCart(true); // Show the "Added to Cart" message
    
    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowAddedToCart(false);
      navigate('/cart');
    }, 2000);
  };


  return (
    <div className='wishlist-empty'>
    {wishlist.length === 0 ? (
      <p>Your wishlist is empty.</p>
    ) : (
      <div className="wishlist-container">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item" onClick={() => navigate(`/product/women/${item.id}`)}>
            <img src={item.image} alt={item.name} className="wishlist-item-image" />
            <div class="wishlist-item-content">
          <div className="wishlist-item-name">
            <span>{item.name}</span>
            </div>
          <div className="wishlist-item-title">
            <span>{item.title2}</span>
            </div>
          <div className="wishlist-item-newprice">
            <span>₹{item.new_price}</span>
            <div className="wishlist-item-oldprice">
            <span>₹{item.old_price}</span>
            </div>
            </div>
            <div className='wishlist-item-offer'>
              <span>{item.offer}</span>
            </div>
            <div className='wishlist-cart-btn'>
    <button onClick={(event) => handleAddToCart(item, event)}>Add To Cart</button>
    </div>
    {showAddedToCart && (
      <div className="wishlist-added-to-cart-message">
        <p>Item added to cart!</p>
      </div>
    )}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
};

export default Wishlist
