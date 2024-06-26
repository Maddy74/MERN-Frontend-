import React from 'react'
import { useCart } from '../../Context/CartContext';
import {TypeAnimation} from 'react-type-animation';
import './Nav.css';
import logos from '../Assets/nav.png';
import search from '../Assets/search.png';
import carticon from '../Assets/cart.png';
import love from '../Assets/love.png';
import profile from '../Assets/user.png';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';


const Navigationbar = () => {
  const { cart } = useCart(); // Get cart context
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Get total item count

  return (
    <div className='navbar'>
    <div className='discount-msg'>
    <TypeAnimation
  sequence={['EXTRA 5% DISCOUNT FOR ALL ONLINE PAYMENTS', 4000,'20% discount on a product that costs ₹800 above',3000,'FREE DELIVERIES. FREE RETURNS.', 4000,'SIGN UP & GET 15% OFF', 3000,]}
  repeat={Infinity}/>
    </div>
      <div className='nav-logo'>
        <Link to={'/'}><img src={logos} alt='logo'/></Link>
      <div className='nav-menu'>
      <ul className='links'>
        <NavLinks />
      </ul>
      </div>
      <div className='searchbox'>
      <img src={search} alt=' '/>
      <form>
       <input className='search-box' type='text' placeholder='Search'/> 
      </form>
      </div>
      <div className='right-menu'>
      <div className='tooltip-wishlist'>
      <Link to={"/wishlist"}><img className='wishlist' src={love} alt=''/></Link>
      <span className='tooltip'> Wishlist</span>
      </div>
      <div className='tooltip-cart'>
         <Link to={"/cart"}><img className='cart' src={carticon} alt=''/>
         {cartItemCount > 0 && (
              <span className='cart-badge'>{cartItemCount}</span> // Display cart item count as badge
            )}
            </Link>
         <span className='tooltip'> Cart</span>
         </div>
         <div className='tooltip-profile'>
         <Link to={"/profile"}><img className='profile' src={profile} alt=''/></Link>
         <span className='tooltip'> Log-In</span>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Navigationbar
