import React, { createContext, useContext, useState } from 'react';

// Create Wishlist context
const WishlistContext = createContext();

// Provider component to wrap your application with the wishlist functionality
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);

    if (!isProductInWishlist) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use Wishlist context
export const useWishlist = () => useContext(WishlistContext);
