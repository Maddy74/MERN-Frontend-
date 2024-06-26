import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./WomenTrendingproducts.css";
import Womentrending from './Womentrending.js';

import trend1 from '../Components/Assets/trending.jpg'
import trend2 from '../Components/Assets/trending2.jpg'
import trend3 from '../Components/Assets/trending3.webp'
import trend4 from '../Components/Assets/trending4.jpg'
import trend5 from '../Components/Assets/trending5.jpg'
import trend6 from '../Components/Assets/trending6.webp'
import trend7 from '../Components/Assets/trending7.webp'
import trend8 from '../Components/Assets/trending8.webp'
import trend9 from '../Components/Assets/trending9.jpg'
import trend10 from '../Components/Assets/trending10.jpg'

const WomenTrendingproducts = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const trending_products = [
        {
            id:1,
            name:"Women Blue Floral Smocked Dress",
            imageurl:trend1,
            old_price:2549,
            new_price:713,
            offer:"(72% OFF)",
        },
        {
            id:2,
            name:"Crepe A-Line Cut-Outs Maxi Party Wear Dresss",
            imageurl:trend2,
            new_price:1499,
            old_price:799,
            offer:"(Rs.700 OFF)",
        },
        {
            id:3,
            name:"LEVI'S X DEEPIKA PADUKONE Colorblock Shirt",
            imageurl:trend3,
            old_price:3399,
            new_price:1529,
            offer:"(55% OFF)"
        },
        {
            id:4,
            name:"Glitter Ruched Wrap Bodycon Dress",
            imageurl:trend4,
            new_price:659,
            old_price:1999,
            offer:"(67% OFF)",
        },
        {
            id:5,
            name:"Women Front-Open Overcoat with Patch Pockets",
            imageurl:trend5,
            old_price:14695,
            new_price:1323,
            offer:"(91% OFF)"
        },
        {
            id:6,
            name:"Women's Brand Logo Crew Neck T-Shirt",
            imageurl:trend6,
            old_price:999,
            new_price:679,
            offer:"(32% OFF)"
        },
        {
            id:7,
            name:"Women's Striped Round Neck Dress",
            imageurl:trend7,
            new_price:3999,
            old_price:1799,
            offer:"(55% OFF)",
        },
        {
            id:8,
            name:"Women's Graphic Print High Neck Sweater",
            imageurl:trend8,
            new_price:2799,
            old_price:1259,
            offer:"(55% OFF)",
        },
        {
            id:9,
            name:"Women Rust & Black Printed Longline Tie-Up Shrug",
            imageurl:trend9,
            new_price:699,
            old_price:1999,
            offer:"(65% OFF)",
        },
        {
            id:9,
            name:"Red Solid Longline Open Front Shrug",
            imageurl:trend10,
            new_price:768,
            old_price:2195,
            offer:"(65% OFF)",
        },
    ]

      const trending = trending_products.map((item) => {
        return <Womentrending key={item.id} name = {item.name} url={item.imageurl} new={item.new_price} old={item.old_price} offer={item.offer}/>
        });
  return (
    <div>
    <div className='trends-products'>
      <span>Trending </span>
      </div>
      <div>
      <Carousel responsive={responsive}>
      {trending}
</Carousel>
    </div>
    </div>
    
  )
}

export default WomenTrendingproducts
