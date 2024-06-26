import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import './Women.css'
import newarrival from '../Components/Assets/newarrival.webp'
import springcollection from '../Components/Assets/springcollection.jpg'
import womenbanner1 from '../Components/Assets/womenbanner1.jpg'
import womenbanner2 from '../Components/Assets/womanbanner2.jpg'
import spring from '../Components/Assets/spring.webp';
import fall from '../Components/Assets/fall.webp';
import summer from '../Components/Assets/summer.jpg';
import winter from '../Components/Assets/winter.webp';
import wintervideo from '../Components/Assets/salehup_video.mp4'
import WomenTrendingproducts from './WomenTrendingproducts.js';

import yourstyle from '../Components/Assets/yourstyle.webp';

const Women = () => {
  return (
    <div>
    <div className='new'>
      <div className='arival-dresses'>
        <img src={newarrival} alt='' />
      </div>
      <div className='arrival-content'>
        <motion.pre initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }}>
        New Arrival
        </motion.pre>
        <motion.pre className='dresses' initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }}>
        DRESSES
        </motion.pre>
        <Link to={'/men'} style={{textDecoration:'none'}}><motion.button className='arrival-btn' initial={{x: -1000}}
        animate={{x: 0}}
        transition={{
          duration: "2",
          delay: "1"
        }}>shop the collection</motion.button></Link>
      </div>
    </div>
    {/* new arrival banner */}

    {/* banner1 */}
        <div className='spring-collection'>
        <div>
        <div className='spring-fashion'>
        <img src={springcollection} alt='' />
        </div>
        <div className='spring2024'>
          <pre>New Spring</pre>
          <pre>Collection 2024</pre>
          </div>
          <div className='springparagraph'>
          <pre>Introducing our new spring fashion</pre> 
          <pre>collection, perfect for effortless casual chic.</pre> 
          <pre>From flowy dresses to floral tops, mix and</pre> 
          <pre>match with ease. Lightweight fabrics and</pre> 
          <pre>cheerful colors to awaken the Spring in you.</pre>
          </div>
          <button className='spring-btn'>Shop now</button>
        </div>
        </div>

        {/* Shop by seasons */}
        <div className='Seasons-content'>
          <span>Shop By Seasons</span>
        </div>
        <div className='seasons'>
        <div className='season-img'>
        <div className='spring-img'>
          <img src={spring} alt='' />
          <div className='season-link'>
    <Link to={'./'} style={{textDecoration:'none'}}><span>Spring</span></Link>
    </div>
          </div>
        <div className='summer-img'>
          <img src={summer} alt='' />
          <div className='summer-link'>
    <Link to={'./'} style={{textDecoration:'none'}}><span>Summer</span></Link>
    </div>
          </div>
        <div className='fall-img'>
          <img src={fall} alt='' />
          <div className='fall-link'>
    <Link to={'./'} style={{textDecoration:'none'}}><span>Fall</span></Link>
    </div>
          </div>
        <div className='winter-img'>
          <img src={winter} alt='' />
          <div className='winter-link'>
    <Link to={'./'} style={{textDecoration:'none'}}><span>Winter</span></Link>
    </div>
          </div>
        </div>
        </div>

        {/* video of winter collection */}
        <div>
        <div className='sweater'>
    <video className='winter-video' controls={false}
    autoPlay
    muted
    loop>
    <source src={wintervideo} type="video/mp4"/>
    </video>
    <div className='womens-sweater'>
    <pre>Women's</pre>
    <pre>Sweater For Winter</pre>
        </div>
        <button className='view-more'>View More</button>
    </div>
    </div>

{/* Your Style Banner */}
<div className='elevate'>
        <div className='your-style'>
        <img src={yourstyle} alt='' />
        <div className='style-contents'>
        <pre>Elevate Your </pre>
        <pre>Everyday with </pre> 
        <pre>Jackets</pre>
        </div>
        </div>
        <div className='elevate-btn'>
        <button>Shop now</button>
        </div>
        </div>

        {/* Trending Products */}
        <WomenTrendingproducts />

    {/* Banner2 */}
    <div className='womenbanner'>
      <div className='women-banner1'>
        <img src={womenbanner1} alt='' />
        </div>
        <div className='wbanner2'>
        <img src={womenbanner2} alt='' />
        </div>
        <div className='dress'>
      <h1>Dress How You</h1>
      <h1>Want To Be Addressed</h1>
      <pre>Shop Today And Get 20% Discount</pre>
      </div>
      <button className='discover'>Discover</button>
        </div>
    </div>
  )
}

export default Women
