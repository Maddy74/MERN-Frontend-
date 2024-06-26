import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./KidsTrendingproducts.css";
import Kidstrending from './Kidstrending.js';


import kidtrend1 from '../Components/Assets/kidtrend1.jpg';
import kidtrend2 from '../Components/Assets/kidtrend2.jpeg';
import kidtrend3 from '../Components/Assets/kidtrend3.jpg';
import kidtrend4 from '../Components/Assets/kidtrend4.jpg';
import kidtrend5 from '../Components/Assets/kidtrend5.jpg';
import kidtrend6 from '../Components/Assets/kidtrend6.jpg';
import kidtrend7 from '../Components/Assets/kidtrend7.jpeg';
import kidtrend8 from '../Components/Assets/kidtrend8.jpg';
import kidtrend9 from '../Components/Assets/kidtrend9.jpg';
const KidsTrendingproducts = () => {
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

      const kids_trendingproducts = [
        {
            id:1,
            name:"Boys Long-Sleeved Cotton Shirt",
            imageurl:kidtrend3,
            old_price:2549,
            new_price:713,
            offer:"(72% OFF)",
        },
        {
            id:2,
            name:"Pspeaches Girls Striped A-Line Midi Cotton Dress",
            imageurl:kidtrend5,
            new_price:4282,
            old_price:942,
            offer:"(78% OFF)",
        },
        {
            id:3,
            name:"Baesd Boys Checked Dungaree With Shirt & Bow Tie",
            imageurl:kidtrend4,
            old_price:1599,
            new_price:639,
            offer:"(60% OFF)"
        },
        {
            id:4,
            name:"Hellcat Boys Set Of 2 Blue & Pink ",
            imageurl:kidtrend1,
            old_price:3998,
            new_price:559,
            offer:"(86% OFF)",
        },
        {
            id:5,
            name:"Nike Older Kids' Reversible Jersey",
            imageurl:kidtrend2,
            old_price:3495,
            new_price:2495,
            offer:"(10% OFF)"
        },
        {
            id:6,
            name:"Nike Older Kids' Sweatshirt",
            imageurl:kidtrend7,
            old_price:2995,
            new_price:1995,
            offer:"(10% OFF)"
        },
        {
            id:7,
            name:"Baesd Girls One Shoulder Puff Sleeves Bodycon Dress",
            imageurl:kidtrend8,
            new_price:599,
            old_price:2999,
            offer:"(80% OFF)",
        },
        {
            id:8,
            name:"Nike Older Kids' Training T-Shirt",
            imageurl:kidtrend6,
            new_price:895,
            old_price:1095,
            offer:"(10% OFF)",
        },
        {
            id:9,
            name:"Baesd Boys Mandarin Collar Shirt & Trousers With Suspenders",
            imageurl:kidtrend9,
            new_price:399,
            old_price:1999,
            offer:"(80% OFF)",
        },
    ]

      const kidstrending = kids_trendingproducts.map((item) => {
        return <Kidstrending key={item.id} name = {item.name} url={item.imageurl} new={item.new_price} old={item.old_price} offer={item.offer}/>
        });
  return (
    <div>
    <div className='trends-products'>
      <span>Trending Collection </span>
      </div>
      <div>
      <Carousel responsive={responsive}>
      {kidstrending}
</Carousel>
    </div>
    </div>
    
  )
}

export default KidsTrendingproducts
