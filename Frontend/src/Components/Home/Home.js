import React from 'react'
import './Home.css';
import homepic1 from '../Assets/homepic1.jpg';
import homepic2 from '../Assets/homepic2.jpg'
import Slidesdata from './Slidesdata';
import Categoriesbrands from './Categoriesbrands';
import shoppingmen from '../Assets/shoppingfor (1).jpeg'
import shoppingkids from '../Assets/shoppingfor (1).jpg'
import shoppingwomen from '../Assets/shoppingfor (2).jpg'
import video1 from '../Assets/video1.webm';
import videopic from '../Assets/videopic.jpg'
import dualipa from '../Assets/dualipa.webp';
import Recommenedproduct from './Recommenedproduct';
import {slideData} from './Bannerdata'
import { Link } from 'react-router-dom';
const Home = () => {

  return (
    // Discount
    <div className='banners'>
    <div className='order-discount'>
      <h1>EXTRA 10% OFF ON ORDERS ABOVE ₹4999* </h1>
      <span>Auto-applied at checkout *T&C Apply</span>
    </div>
    {/* Banner */}
    <div>
    <Slidesdata slides={slideData}/>
    </div>
    {/* Single Posters */}
    <div className='puma'>
    <Link to={'/men'}><img src={homepic1} alt='pumapic' /></Link>
    <div className='puma-text'>
    <h2>puma <small>x</small> p.a.m.</h2>
    <span className='textpuma'>REACHING THE PAM/PUMA BIO/VERSE</span>
    </div>
    <div className='btn'>
    <Link to={'/men'}><button type='button'>Shop now</button></Link>
    </div>
    </div>
    
    {/* product sample */}
    <Recommenedproduct />

    {/* Discount pic */}
    <div className='extra-discount'>
    <img src={homepic2} alt=''  />
    <div className='discount-text'>
    <h2>FRESH FOR SPRING</h2>
    <span className='textdisount'>New arrivals are here — easily mixed,
effortlessly layered staples for the season ahead.</span>
    <div>
    <Link  to={'/men'}><button className='shop-men' id='shop-btn' type='button'>Shop Men</button></Link>
    <Link to={'/women'}><button className='shop-women' id='shop-btn' type='button'>Shop Women</button></Link>
    </div>
    </div>
    </div>

    {/* who are u shopping for */}
    <div className='shopping'>
    <div className='shopheadding'>
    <span>Who Are You Shopping For ?</span>
    </div>
    <div className='gender'>
    <div className='category-img'>
    <img src={shoppingmen} alt='' />
    <div className='category-link'>
    <Link to={'./men'} style={{textDecoration:'none'}}><span>Shop Now</span></Link>
    </div>
    </div>
    <div className='category-img'>
    <img src={shoppingwomen} alt='' />
    <div className='category-link'>
    <Link to={'./women'} style={{textDecoration:'none'}}><span>Shop Now</span></Link>
    </div>
    </div>
    <div className='category-img'>
    <img src={shoppingkids} alt='' />
    <div className='category-link'>
    <Link to={'./kids'} style={{textDecoration:'none'}}><span>Shop Now</span></Link>
    </div>
    </div>
    </div>
    </div>


    {/* puma shoe banner */}
    <div className='banners-puma'>
    <div className='velocity'>
    <h1>VELOCITY NITRO<sup>TM</sup> 3</h1>
    <span>THE WAY RUNNING SHOULD FEEL</span>
    <div className='velo-btn'>
    <Link  to={'/running'}><button className='velocity-btn' type='button'>Shop now</button></Link>
    </div>
    <div className='velo-btn2'>
    <Link  to={'/sports'}><button className='velocity-btn2' type='button'>Explore Running</button></Link>
    </div>
    <div className='nitro'>
    <video controls={false}
    autoPlay
    muted
    loop>
    <source src={video1} type="video/mp4"/>
    </video>
    </div>
    <div className='video-pic'>
      <img src={videopic} alt='' />
    </div>
    </div>
    </div>

{/* Products */}
<div>
      <Categoriesbrands />
    </div>

    {/* dua lipa  banner*/}
    <div className='dua-lipa'>
    <div className='dua-banner'>
    <img src={dualipa} alt='' />
    </div>
      <div className='dua-contents'>
        <h1>palermo</h1>
        <h2>return of a classic</h2>
        <p>Worn by Dua Lipa</p>
        <div className='dua-btn'>
    <Link  to={'/'}><button  type='button'>Shop now</button></Link>
    </div>
    <div className='dua-btn2'>
    <Link  to={'/'}><button className='velocity-btn2' type='button'>Explore Terrance</button></Link>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Home
