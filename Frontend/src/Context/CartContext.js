// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a CartContext
const CartContext = createContext();

// Create a CartProvider component to wrap around your application
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Here, we simply add the product to the cart. In a real-world app, you might need to check if the product is already in the cart, etc.
  const existingItemIndex = cart.findIndex(
    (item) => item.id === product.id && item.size === product.size
  );

  if (existingItemIndex >= 0) {
    // If the product exists, update its quantity
    const updatedCart = [...cart];
    updatedCart[existingItemIndex].quantity += 1; // Increment quantity
    setCart(updatedCart);
  } else {
    // If it doesn't exist, add it to the cart with a quantity of 1
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

   // Function to update the quantity of a specific item
  const updateCartItemQuantity = (productId, size, newQuantity) => {
    if (newQuantity < 1) {
      // If the quantity is less than 1, remove the item
      setCart((prevCart) => prevCart.filter(
        (item) => !(item.id === productId && item.size === size)
      ));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId && item.size === size
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };
  console.log("Current cart state:", cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the CartContext
const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
