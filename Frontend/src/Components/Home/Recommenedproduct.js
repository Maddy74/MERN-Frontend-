import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Recommenedproduct.css";
import HomeListing from './Recommeddata.js';

import list1 from "../Assets/listingmen (1).jpg";
import list2 from "../Assets/listingmen (2).jpg"; 
import list3 from "../Assets/listingmen (1).webp"; 
import list4 from "../Assets/listingmen (2).webp"; 
import wlist1 from "../Assets/listingwomen.webp"; 
import wlist2 from "../Assets/listingwomen (1).webp";
import wlist3 from "../Assets/listingwomen (2).jpg";
import wlist4 from "../Assets/listingwomen (2).webp";
import wlist5 from "../Assets/listingwomen (3).webp";

const Recommenedproduct = () => {

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

      const home_listing = [
        {
            id:1,
            name:"PUMA Hoops x Cheetos Men's Hoodie",
            imageurl:list1,
            old_price:7078,
            new_price:6999,
            offer:"(37% OFF)",
        },
        {
            id:2,
            name:"White Crochet Striped  Oversized Shirt",
            imageurl:list2,
            new_price:1259,
            old_price:1999,
            offer:"(37% OFF)",
        },
        {
            id:3,
            name:"Lightweight Water Resistant Bomber",
            imageurl:list3,
            old_price:13978,
            new_price:11904,
            offer:"(20% OFF)"
        },
        {
            id:4,
            name:"90s Denim Trucker Jacket",
            imageurl:list4,
            new_price:8595,
            old_price:10669,
            offer:"(20% OFF)",
        },
        {
            id:5,
            name:"Embroidered Flag Stripe Logo T-Shirt",
            imageurl:wlist1,
            old_price:3679,
            new_price:1839,
            offer:"(50% OFF)"
        },
        {
            id:6,
            name:"Wide Leg Stretch Chino Pants",
            imageurl:wlist2,
            old_price:10261,
            new_price:8187,
            offer:"(20% OFF)"
        },
        {
            id:7,
            name:"Sweetheart Neck Sleeves Maxi Dress",
            imageurl:wlist3,
            new_price:799,
            old_price:4999,
            offer:"(84% OFF)",
        },
        {
            id:8,
            name:"Women's 726 Bootcut Jeans",
            imageurl:wlist4,
            new_price:4099,
            old_price:1949,
            offer:"(52% OFF)",
        },
        {
            id:9,
            name:"Zip Polo Midi Dress",
            imageurl:wlist5,
            new_price:3287,
            old_price:6575,
            offer:"(50% OFF)",
        },
    ]

      const recommened = home_listing.map((item) => {
        return <HomeListing key={item.id} name = {item.name} url={item.imageurl} new={item.new_price} old={item.old_price} offer={item.offer}/>
        });
  return (
    <div>
    <div className='recommened'>
      <span>Recommened For You</span>
      </div>
      <div>
      <Carousel responsive={responsive}>
      {recommened}
</Carousel>
    </div>
    </div>
    
  )
}

export default Recommenedproduct
