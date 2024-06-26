import React from 'react';
import { useCart } from '../../Context/CartContext';
import Cartitem from './Cartitem';
import axios from 'axios';
import paymentlogo from '../../Components/Assets/payment logo.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CartDesign = () => {
  const { cart, updateCartItemQuantity } = useCart(); // Get cart and update functions from context
  const navigate = useNavigate(); // For navigation
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Check authentication

  // Define the increment and decrement functions outside of a nested component
  const handleIncrement = (productId, size, currentQuantity) => {
    updateCartItemQuantity(productId, size, currentQuantity + 1);
  };

  const handleDecrement = (productId, size, currentQuantity) => {
    updateCartItemQuantity(productId, size, currentQuantity - 1);
  };

  // Calculate subtotal based on cart items and their quantities
  const subtotal = cart.reduce(
    (total, item) => total + item.new_price * item.quantity,
    0
  );

  // Apply a discount; this can be a percentage or a fixed amount
  const discount = subtotal > 1000 ? subtotal * 0.1 : 0; // 10% discount for orders above ₹1000
  
  // Calculate tax as a percentage of the subtotal
  const tax = subtotal * 0.05; // 5% tax
  
  // Determine shipping costs
  const shipping = subtotal > 500 ? 0 : 50; // Free shipping for orders over ₹500
  
  // Calculate the total
  const total = subtotal - discount + tax + shipping;

  // payment integration
  const proceedcheckoutHandler = async () => {
    if (!isAuthenticated) {
      alert('Please log in to proceed to checkout');
      navigate('/profile'); // Redirect to login
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty'); // Ensure there's at least one item in the cart
      return;
    }

    const { data: { key } } = await axios.get('http://localhost:5000/api/v1/getKey');
    const { data: { order } } = await axios.post('http://localhost:5000/api/v1/checkout', {
      price: total,
    });

    const options = {
      key,
      amount: order.new_price, // Total order amount
      currency: 'INR',
      name: 'Wynk Wear',
      description: 'Order Confirmation',
      image: paymentlogo, // Your company logo
      order_id: order.id, // Unique order ID
      callback_url: 'http://localhost:5000/api/v1/paymentverification', // Endpoint for payment verification
      prefill: {
        name: 'Customer Name', // Default customer name
        email: 'customer@example.com', // Default customer email
        contact: '1234567890', // Default customer contact
      },
      notes: {
        address: 'Customer Address', // Address if needed
      },
      theme: {
        color: '#FF8A08', // Theme color for Razorpay
      },
    };

    const razor = new window.Razorpay(options);
    razor.open(); // Open the Razorpay checkout
  };

  return (
    <div className='page-container'>
    <div className='carts'>
      <div className='cart1'>
      <span>Cart</span>
      </div>
      <div className='cart-route'>
      <p>1.Cart</p> 
      <hr />
      <p>2.Checkout</p><hr />
      <p>3.Payment</p>
      </div>
      {cart.map((item) => (
        <Cartitem
          key={`${item.id}-${item.size}`}
          image={item.image} // Pass the required props
          name={item.name}
          title={item.title}
          new_price={item.new_price}
          old_price={item.old_price}
          size={item.size} // Ensure to pass size
          quantity={item.quantity} // Ensure to pass quantity
          handleIncrement={()=>handleIncrement(item.id, item.size, item.quantity)}
          handleDecrement={()=>handleDecrement(item.id, item.size, item.quantity)}
        />
      ))}
      <div className='order-summary'>
      <div className='order-content'>
      <span>Order Summary</span>
      <div className='subtotal'>
      <span>Subtotal: <b>₹{subtotal.toFixed(2)}</b></span>
      </div>
      <div className='discount'>
      <span>Discount: <b>₹{discount.toFixed(2)}</b></span>
      </div>
      <div className='order-tax'>
      <span>Tax: <b>₹{tax.toFixed(2)}</b></span>
      </div>
      <div className='ship'>
      <span>Shipping: <b>₹{shipping.toFixed(2)}</b></span>
      </div>
      <div className='total'>
      <span>Total: <b>₹{total.toFixed(2)}</b></span>
      </div>
      <hr />
      <div className='order-btn'>
      <button onClick={proceedcheckoutHandler}>Proceed To Checkout</button>
      </div>
      </div>
      <div className='estmated-delivery'>
      <span>Estimated Delivery by <b>25 May, 2024</b></span>
      </div>
      </div>
    </div>
    </div>
  )
}

export default CartDesign
