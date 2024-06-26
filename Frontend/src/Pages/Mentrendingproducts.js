import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Mentrendingproducts.css'

import Mentrending from './Mentrending';
import mentrending1 from '../Components/Assets/mentrending (1).jpg'
import mentrending2 from '../Components/Assets/mentrending (2).jpg'
import mentrending3 from '../Components/Assets/mentrending (3).jpg'
import mentrending4 from '../Components/Assets/mentrending (4).jpg'
import mentrending5 from '../Components/Assets/mentrending (5).jpg'
import mentrending6 from '../Components/Assets/mentrending (6).jpg'
import mentrending7 from '../Components/Assets/mentrending (7).jpg'
import mentrending8 from '../Components/Assets/mentrending (8).jpg'
const Mentrendingproducts = () => {
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

      const Men_trendingproducts = [
        {
            id:1,
            name:"Red Tape Men Contrast Sole Lace-Up Sneakers",
            imageurl:mentrending2,
            old_price:5599,
            new_price:1119,
            offer:"(80% OFF)",
        },
        {
            id:2,
            name:"Baesd Typography Printed Hooded",
            imageurl:mentrending8,
            new_price:699,
            old_price:1999,
            offer:"(65% OFF)",
        },
        {
            id:3,
            name:"Baesd Boys Checked Dungaree With Shirt & Bow Tie",
            imageurl:mentrending3,
            old_price:1599,
            new_price:639,
            offer:"(60% OFF)"
        },
        {
            id:4,
            name:"Asian Colourblocked Padded Sneakers",
            imageurl:mentrending1,
            old_price:999,
            new_price:689,
            offer:"(31% OFF)",
        },
        {
            id:5,
            name:"Stormborn Graphic Printed",
            imageurl:mentrending7,
            old_price:999,
            new_price:529,
            offer:"(47% OFF)"
        },
        {
            id:6,
            name:"Mascln Sassafras",
            imageurl:mentrending5,
            old_price:5498,
            new_price:1924,
            offer:"(65% OFF)"
        },
        {
            id:7,
            name:"Roadster Men White & Blue Regular Fit ",
            imageurl:mentrending6,
            new_price:524,
            old_price:1499,
            offer:"(65% OFF)",
        },
        {
            id:8,
            name:"The Indian Garage Co",
            imageurl:mentrending4,
            new_price:954,
            old_price:4149,
            offer:"(77% OFF)",
        },
    ]

      const mentrending = Men_trendingproducts.map((item) => {
        return <Mentrending key={item.id} name = {item.name} url={item.imageurl} new={item.new_price} old={item.old_price} offer={item.offer}/>
        });
  return (
    <div>
    <div className='trends-products'>
      <span>Trending Collection </span>
      </div>
      <div>
      <Carousel responsive={responsive}>
      {mentrending}
</Carousel>
    </div>
    </div>
    
  )
}

export default Mentrendingproducts
