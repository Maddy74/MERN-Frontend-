import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Beautybanner.css';
import Beautypagebanner from './Beautypagebanner';


import beautybanner1 from '../Components/Assets/beautybanner1.webp'
import beautybanner2 from '../Components/Assets/beautybanner2.webp'
import beautybanner3 from '../Components/Assets/beautybanner3.webp'

const Beautybanners = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const Beauty_banner_products = [
        {
            id:1,
            imageurl1:beautybanner1,
            text1: "Perfect Rogue",
            texts1: "Ultra Smooth",
            texts2: "Lip Cream",
        },
        {
            id:2,
            imageurl2:beautybanner2,
            text2:"Summer Lipsticks",
        },
        {
            id:3,
            imageurl3:beautybanner3,
            text3:"Bright Moving Lips",
            texts3:"BEAUTY PRODUCTS",
            texts4:"COSMETICS",
        },
    ]

    const CustomDot = ({ onClick, index, active }) => {
            
        return (
            <button className={active ? 'dot active' : 'dot'} onClick={() => onClick()}>
            </button>
          );
        };

      const Beautybanner = Beauty_banner_products.map((item) => {
        return <Beautypagebanner key={item.id}  url1={item.imageurl1} url2={item.imageurl2} url3={item.imageurl3} text1={item.text1} texts1={item.texts1} texts2={item.texts2} text2={item.text2} text3={item.text3} texts3={item.texts3} texts4={item.texts4}/>
        });
  return (
    <div>
      <div style={{position:'relative'}}>
      <Carousel CustomDot={<CustomDot />} showDots={true} arrows={false} responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
      {Beautybanner}
</Carousel>
    </div>
    </div>
  )
}

export default Beautybanners
