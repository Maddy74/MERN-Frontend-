import React from 'react'
import './Beautymodern.css'
import beautybanner4 from '../Components/Assets/beautybanner4.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Beautymoderndata from './Beautymoderndata';
import modernslide1 from '../Components/Assets/modern-slide1.jpg';
import modernslide2 from '../Components/Assets/modern-slide2.jpg';
import modernslide3 from '../Components/Assets/modern-slide3.jpg';
import modernslide4 from '../Components/Assets/modern-slide4.jpg';

import {Beautyarrival} from './Beautymoderndata';
import arrivals1 from '../Components/Assets/arrival1.jpg'
import arrivals2 from '../Components/Assets/arrival2.jpg'
import arrivals3 from '../Components/Assets/arrival3.jpg'

import antiaging from '../Components/Assets/antiageingbanner.png';

import { Perfume } from './Beautymoderndata';
import perfume1 from '../Components/Assets/perfume (1).jpg';
import perfume2 from '../Components/Assets/perfume (2).jpg';
import perfume3 from '../Components/Assets/perfume (3).jpg';
import perfume4 from '../Components/Assets/perfume (4).jpg';
import perfume5 from '../Components/Assets/perfume (5).jpg';
import perfume6 from '../Components/Assets/perfume (6).jpg';
const Beautymodern = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
    
      const moderndata = [
        {
          id:1,
          imageurl:modernslide1,
        },
        {
          id:2,
          imageurl:modernslide2,
        },
        {
          id:3,
          imageurl:modernslide3,
        },
        {
          id:4,
          imageurl:modernslide4,
        },
      ];

      const beautylook = moderndata.map((item) => {
        return <Beautymoderndata key={item.id} image={item.imageurl}/>
        });

        // beauty arrival  products image
        const beauty_product = [
            { 
          id:1,
          images:arrivals1,
          title:"Warm Tones Eye Palette",
          old_price:"6353",
          new_price:"4681",
        },
            { 
          id:2,
          images:arrivals2,
          title:"Peach Lipstick",
          old_price:"3587",
          new_price:"1337",
        },
            { 
          id:3,
          images:arrivals3,
          title:"Face Powder",
          old_price:"3678",
          new_price:"2842",
        },
    ]
        const arrivalproduct = beauty_product.map((item) => {
            return <Beautyarrival key={item.id} url={item.images} title={item.title} old_price={item.old_price} new_price={item.new_price} />
    });

    // Perfume categories images
    const perfume_product = [
      { 
    id:1,
    images:perfume1,
    title:"Dolce & Gabbana",
    old_price:"16661",
    new_price:"14500",
  },
      { 
    id:2,
    images:perfume2,
    title:"Calvin Kelvin",
    old_price:"19160",
    new_price:"17500",
  },
      { 
    id:3,
    images:perfume3,
    title:"Montblanc",
    old_price:"29500",
    new_price:"27678",
  },
  { 
      id:4,
      images:perfume4,
      title:"Christian Dior",
      old_price:"34998",
      new_price:"30000",
    },
        { 
      id:5,
      images:perfume5,
      title:"Jimmy Choo",
      old_price:"26656",
      new_price:"24678",
    },
        { 
      id:6,
      images:perfume6,
      title:"Versace",
      old_price:"37689",
      new_price:"35890",
    },
]

const firstrow = perfume_product.slice(0, 3);
const secoundrow = perfume_product.slice(3, 6);
  const perfumeproduct1 = firstrow.map((item) => {
      return <Perfume key={item.id} url={item.images} title={item.title} old_price={item.old_price} new_price={item.new_price} />
    });
  const perfumeproduct2 = secoundrow.map((item) => {
      return <Perfume key={item.id} url={item.images} title={item.title} old_price={item.old_price} new_price={item.new_price} />
});

  return (
    <div>
    <div className='modern-banner'>
    <img src={beautybanner4} alt='' />
    <div className='look-feel'>
    <span>Look & Feel Modern</span>
    </div>
    <div className='cosmetics'>
    <span>Cosmetics By Brands</span>
    </div>
    </div>
      <div className='beautylook'>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1000} infinite={true} arrows={false} transitionDuration={500}>
      {beautylook}
</Carousel>
</div>

<div className='arrivals'>
<div className='new-arrivals'>
    <h1>Shop New Arrivals</h1>
    </div>
</div>
<div className='arrival-cards'>
    {arrivalproduct}
</div>

{/* beauty anti aging banner */}
<div className='anti-aging'>
<img src={antiaging} alt='' />
<div className='aging-contents'>
<pre>Embracing Anti-Aging</pre>
<div className='sent'>
<pre>Skin Care</pre>
</div>
<div className='agin-btn'>
    <button>Shop Now</button>
    </div>
</div>
</div>

{/* perfume products */}
<div className='arrivals'>
<div className='new-arrivals'>
    <h1>Shop New Arrivals</h1>
    </div>
</div>
<div className='arrival-cards'>
    {perfumeproduct1}
</div>
<div className='arrival-cards2'>
    {perfumeproduct2}
</div>
    </div>
  )
}

export default Beautymodern 
