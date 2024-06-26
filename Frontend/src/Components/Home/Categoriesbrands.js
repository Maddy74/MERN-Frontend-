import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Categoriesbrands.css'
import Caursoldata from './Caursoldata';
import "./Categoriesbrands.css"
import carousel1 from '../Assets/caursol1.jpg'; 
import carousel_1 from '../Assets/caursol (1).jpg';
import carousel_2 from '../Assets/caursol (2).jpg';
import carousel_3 from '../Assets/caursol (3).jpg';
import carousel_4 from '../Assets/caursol (4).jpg';
import carousel_5 from '../Assets/caursol (5).jpg';
import carousel_6 from '../Assets/caursol (6).jpg';
import carousel_7 from '../Assets/caursol (7).jpg';
import carousel_8 from '../Assets/caursol (8).jpg';
import carousel_9 from '../Assets/caursol (9).jpg';
const Categoriesbrands = () => {

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

  const caursoldata = [
    {
      id:1,
      imageurl:carousel1,
    },
    {
      id:2,
      imageurl:carousel_1,
    },
    {
      id:3,
      imageurl:carousel_2,
    },
    {
      id:4,
      imageurl:carousel_3,
    },
    {
      id:5,
      imageurl:carousel_4,
    },
    {
      id:6,
      imageurl:carousel_5,
    },
    {
      id:7,
      imageurl:carousel_6,
    },
    {
      id:8,
      imageurl:carousel_7,
    },
    {
      id:9,
      imageurl:carousel_8,
    },
    {
      id:10,
      imageurl:carousel_9,
    },
  ];

const data = caursoldata.map((item) => {
  return <Caursoldata key={item.id} image={item.imageurl}/>
  });
  return (
    <div>
    <div className='brands'>
    <span>Shop By Brands</span>
    </div>
    <div className='caursol'>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true}>
      {data}
</Carousel>
    </div>
    </div>
  )
}

export default Categoriesbrands
