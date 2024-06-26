import React from 'react'
import './Watches.css'
import {motion} from 'framer-motion';
import rolex from '../Components/Assets/rolex.webm';
import rolex1 from '../Components/Assets/rolex (1).jpg';
import rolex2 from '../Components/Assets/rolex (2).jpg';
import rolex3 from '../Components/Assets/rolex (3).jpg';

import omega from '../Components/Assets/omega.mp4';
import omega1 from '../Components/Assets/omega (1).jpg'
import omega2 from '../Components/Assets/omega (2).jpg'
import omega3 from '../Components/Assets/omega (3).jpg'

import sbanner from '../Components/Assets/samsung.jpg';

import dbanner1 from '../Components/Assets/dizowatch1.jpg'
import dizo from '../Components/Assets/dizo.mp4';

import omegaconstel from '../Components/Assets/omega2.mp4'
const Watches = () => {
  return (
    <div>
    <div className='watches'>
      <div className='rolex'>
      <video controls={false}
    autoPlay
    muted
    loop>
    <source src={rolex} type="video/mp4"/>
      </video>
      <div className='rolex-content'>
      <span>THE COLLECTION</span>
      </div>
      <div className='rolex-content1'>
      <span>ROLEX WATCHES</span>
      </div>
      </div>
    </div>

    {/* banner rolex products */}
    <motion.div initial={{x: -2000}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }} className='expore-rolex'>
    <h1>Explore the Rolex Collection</h1>
    </motion.div>
    <motion.div initial={{x: -2000}}
        animate={{x: 0}}
        transition={{
          duration: "2",
          delay: "1"
        }} className='watchbanner1'>
    <div className='rolex-banner'>
      <img className='rolexbanner1' src={rolex1} alt='' />
      <img className='rolexbanner2' src={rolex2} alt='' />
      <img className='rolexbanner3' src={rolex3} alt='' />
      <div className='gmt'>
      <span>GMT-Master ll</span>
      <div className='time-zones'>
      <span>Two time-zones, two colors, uniquely iconic </span>
      </div>
      <div className='btn-rolex'>
      <button>Discover more</button>
      </div>
      </div>
      <div className='submariner'>
      <span>Submariner</span>
      <div className='supreme'>
      <span>The supreme diver's watch</span>
      </div>
      <div className='btn-rolex2'>
      <button>Discover more</button>
      </div>
      </div>
      <div className='cosmo'>
      <span>Cosmograph Daytona</span>
      <div className='chrono'>
      <span>The chronograph that made a watch an icon</span>
      </div>
      <div className='btn-rolex3'>
      <button>Discover more</button>
      </div>
      </div>
    </div>
    </motion.div>

    {/* omega video */}
    <div className='watch-omega'>
      <div className='omega'>
      <video controls={true}
      autoPlay
    loop>
    <source src={omega} type="video/mp4"/>
      </video>
      </div>
    </div>


    {/* banner rolex products */}
    <motion.div initial={{x: -2000}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }} className='expore-omega'>
    <h1>Explore the Omega 007 Collection</h1>
    </motion.div>
    <div className='omegaban'>
    <div className='omega-banner'>
      <img className='omegabanner1' src={omega1} alt='' />
      <img className='omegabanner2' src={omega2} alt='' />
      <img className='omegabanner3' src={omega3} alt='' />
      <div className='seamaster'>
      <span>Seamaster Diver 300M</span>
      <div className='titanium'>
      <span>42mm, titanium on titanium</span>
      </div>
      <div className='btn-omega'>
      <button>Discover more</button>
      </div>
      </div>

      <div className='seamaster2'>
      <span>Seamaster Diver 300M</span>
      <div className='steel'>
      <span>42mm, steel on steel</span>
      </div>
      <div className='btn-omega2'>
      <button>Discover more</button>
      </div>
      </div>

      <div className='seamaster3'>
      <span>Seamaster Diver 300M</span>
      <div className='canopus'>
      <span>43mm, Canopus Gold<sup>TM</sup></span>
      </div>
      <div className='btn-omega3'>
      <button>Discover more</button>
      </div>
      </div>
      </div>
    </div>

    {/* smartwatch banner */}
    <div className='samsung'>
    <div className='sbanner'>
    <img src={sbanner} alt='' />
    <div className='scontent'>
    <span> Galaxy  Watch6</span>
    <div className='scontent1'>
    <span>Start your everyday wellness journey</span>
    </div>
    <div className='s-btn'>
      <button>Buy Now</button>
      </div>
    </div>
    </div>
    </div>


    {/* dizo watch */}
    <div className='diazo'>
      <div className='dbanner'>
      <img src={dbanner1} alt='' />
      <div className='dizo-trailer'>
    <video controls={false}
      autoPlay
      muted
    loop>
    <source src={dizo} type="video/mp4"/>
      </video>
      </div>
      <div className='dcontents1'>
      <span>DIZO</span>
      <div className='dcontents2'>
      <span>Watch R To Go</span>
      </div>
      <div className='dcontents3'>
      <span>Go For It</span>
      </div>
      <div className='dbtn'>
        <button>Buy Now</button>
      </div>
      </div>
      </div>
    </div>


    {/* omega2 watch */}
    <div className='omega2'>
    <div className='omega-product'>
    <span>Constellation</span>
    <div className='omega-product2'>
      <span>25MM, Steel-Sedna<sup>TM</sup></span>
      <div className='omega-product3'>
      <span>Gold On Steel</span>
      </div>
    </div>
    </div>
      <div className='omega2video'>
      <video controls={false}
    autoPlay
    muted
    loop>
    <source src={omegaconstel} type="video/mp4"/>
      </video>
      </div>
      <div className='obtn'>
        <button>Buy Now</button>
      </div>
    </div>
    </div>
  )
}

export default Watches
