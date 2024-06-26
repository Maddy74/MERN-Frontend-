import React from 'react'
import Marquee from "react-fast-marquee";
import './Men.css';
import {motion} from 'framer-motion';
import menbanner from '../Components/Assets/menbanner.webp';

import menoffer from '../Components/Assets/menoffer.jpg'
import menoffer1 from '../Components/Assets/menoffer1.jpg'

import Mentrendingproducts from './Mentrendingproducts';
import Menbanner from '../Components/Assets/menofferbanner.webp'
import Menbanner2 from '../Components/Assets/menofferbanner2.webp'
const Men = () => {
  return (
    <div>
      <div className='men-banner'>
      <div className='mbanner'>
      <img src={menbanner} alt='' />
      <motion.div initial={{x: -1500}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }} className='mcontent1'>
      <span>T-SHIRTS FOR MEN</span>
      </motion.div>
      <div className='mcontent2'>
      <motion.span initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }}>STARTING AT:</motion.span>
      </div>
      <div className='mcontent3'>
      <motion.span initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }}>₹ 3999</motion.span>
      </div>
      <motion.div initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }} className='m-btn'>
        <button>Shop Now</button>
      </motion.div>
      </div>
      </div>

      {/* men offer */}
      <motion.div initial={{x: -1240}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }} className='men-offer'>
      <div className='moffer'>
      <img src={menoffer} alt='' />
      <div className='m1-content'>
      <span>HUGE SALE UPTO </span>
      </div>
      <div className='m2-content'>
      <span><strong>70%</strong> OFF</span>
      </div>
      <div className='moffer-btn'>
      <button>Shop Now</button>
      </div>
      </div>
      <div className='moffer1'>
      <img src={menoffer1} alt='' />
      <div className='m3-content'>
      <span>50% OFF</span>
      </div>
      <div className='m4-content'>
      <span>MEN COLLECTION</span>
      </div>
      <div className='m2offer-btn'>
      <button>Shop Now</button>
      </div>
      </div>
      </motion.div>

      {/* descount offer */}
      <div className='marquee'>
      <div className='mar-content'>
      <Marquee 
      pauseOnHover
      speed="100">
      <span>20% OFF ON ALL MEN'S FASHION </span>
      <span>20% OFF ON ALL MEN'S FASHION </span>
      <span>20% OFF ON ALL MEN'S FASHION </span>
      <span>20% OFF ON ALL MEN'S FASHION </span>
      <span>20% OFF ON ALL MEN'S FASHION </span>
      </Marquee>
      </div>
      </div>

      {/* products details */}
        <Mentrendingproducts />

        {/* offer banner */}
        <div className='menbanner-offer'>
        <img src={Menbanner} alt='' />
        <div className='banneroffer-content1'>
        <span>Men's Fashion</span>
        </div>
        <div className='banneroffer-content2'>
        <span>For New Product</span>
        </div>
        <div className='men-btn'>
        <button>Shop Now</button>
        </div>
        </div>


        <div className='menbanner2-offer'>
        <img src={Menbanner2} alt='' />
        <div className='banneroffer-content3'>
        <span>Men's Fashion</span>
        </div>
        <div className='banneroffer-content4'>
        <span>For New Product</span>
        </div>
        <div className='men2-btn'>
        <button>Shop Now</button>
        </div>
        </div>
    </div>
  )
}

export default Men
