import React from 'react'
import './Kids.css';
import {motion} from 'framer-motion';
import kid1 from '../Components/Assets/kid1.png';
import kid2 from '../Components/Assets/kid2.png';
import card1 from '../Components/Assets/card (1).jpg';
import card2 from '../Components/Assets/card (2).jpg';
import KidsTrendingproducts from './KidsTrendingproducts';
import easybanner from '../Components/Assets/easybanner.jpg';
import girlclothing from '../Components/Assets/girlclothing.jpg';
import boyclothing from '../Components/Assets/boyclothing.jpg';
import boysgirlshoe from '../Components/Assets/boysgirl shoe.jpg';
const Kids = () => {
  return (
    <div>
    {/* banner1 */}
      <div className='kid-banner'>
      <div className='k1'>
      <img src={kid1} alt='' />
      <div className='kid-content'>
      <motion.pre initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }}className='line1'>Kids Store </motion.pre>
      <motion.pre initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "2",
          delay: "1"}} className='line2'>We make shopping fun </motion.pre>
      <motion.pre initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "3",
          delay: "1"}} className='line3'>select seasonal fashion,outerwear</motion.pre>
      </div>
      <img src={kid2} alt='' className='k2' />
      </div>
      <div className='shopping-btn'>
      <motion.button initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "3",
          delay: "1"}}>Shop now</motion.button>
        </div>
      </div>

      {/* boys and girls card */}
      <motion.div initial={{x: -2000}}
        animate={{x: 0}}
        transition={{
          duration: "4",
          delay: "1"
        }} className='kids-card'>
        <div className='kids-discount'>
        <img src={card1} alt='' />
        <div className='banner-content'>
        <pre className='discount1'>New Arrival </pre>
        <pre className='discount2'>Baby Boy's </pre>
        <pre className='discount3'>Upto <b>35%</b> OFF </pre>
        <div className='baby-boy'>
        <button>Shop Now</button>
        </div>
        </div>
        </div>
        <div className='kids-discount2'>
        <img src={card2} alt='' />
        <div className='banner-content2'>
        <pre className='discount4'>New Arrival </pre>
        <pre className='discount5'>Baby Girl's </pre>
        <pre className='discount6'>Upto <b>35%</b> OFF </pre>
        <div className='baby-girl'>
        <button>Shop Now</button>
        </div>
        </div>
        </div>
      </motion.div>

      {/* kid trending products */}
      <KidsTrendingproducts />

{/* 50% banner */}
      <div className='easy-banner'>
      <div className='kids-shoppingbanner'>
      <img src={easybanner} alt='' />
      </div>
      <div className='shopping-content'>
      <motion.h1 initial={{x: -2000}}
        animate={{x: 0}}
        transition={{
          duration: "2",
          delay: "1"
        }}>50% OFF</motion.h1>
      <motion.pre initial={{x: -2000}}
        animate={{x: 0}}
        transition={{
          duration: "5",
          delay: "1"
        }}>We make shopping easy</motion.pre>
      </div>
      <motion.div initial={{x: -2000}}
        animate={{x: 0}}
        transition={{
          duration: "4",
          delay: "1"
        }} className='kidsshopping-btn'>
      <button>Shop Now</button>
      </motion.div>
      </div>

      {/* kids section */}
      <div className='kids-division'>
        <div className='girl-clothing'>
        <img src={girlclothing} alt='' />
        </div>
        <div className='clothing-content'>
        <pre className='arrival'> NEW ARRIVAL</pre>
        <pre className='title'> GIRL'S CLOTHING</pre>
        <pre className='kid-offer'>GET <b>30%</b> OFF</pre>
        </div>
        <div className='kiddivision-btn'>
      <button>Shop Now</button>
      </div>
        <div className='boy-clothing'>
        <img src={boyclothing} alt='' />
        </div>
        <div className='boyclothes'>
        <pre className='collection'>COLLECTION</pre>
        <pre className='titles-boy'> BOY'S CLOTHING</pre>
        <pre className='boy-offer'>FLAT <b>25%</b> OFF</pre>
        </div>
        <div className='boydivision-btn'>
      <button>Shop Now</button>
      </div>
      <div className='girl-shoe'>
        <img src={boysgirlshoe} alt='' />
        </div>
        <div className='kidz-shoe'>
        <pre className='autumn'>AUTUMN WINTER</pre>
        <pre className='shoe-arrival'> BOY'S & GIRL'S SHOE</pre>
        <pre className='kidshoe-offer'>FLAT <b>15%</b> OFF</pre>
        </div>
        <div className='kidsshoes-btn'>
      <button>Shop Now</button>
      </div>
      </div>
      </div>
        
  )
}

export default Kids
