import React from 'react'
import './Sports.css'
import sbanner from '../Components/Assets/sportsbanner.webp'
import {motion} from 'framer-motion';

import pumanitro1 from '../Components/Assets/pumanitro1.gif'
import nitrovideo from '../Components/Assets/nitrovideo.mp4'
import pumanitro2 from '../Components/Assets/pumanitro2.webp'

import football from '../Components/Assets/football.mp4'
import footballbanner1 from '../Components/Assets/footballbanner1.jpg'
import footballbanner2 from '../Components/Assets/footballbanner2.jpg'
import footballbanner3 from '../Components/Assets/footballbanner3.jpg'
import footballbanner4 from '../Components/Assets/footballbanner4.webp'

import cricketbanner from '../Components/Assets/cricketbanner.webp'
const Sports = () => {
  return (
    <div>
      <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.6,
  }} className='sports'>
      <div className='sbanner'>
        <img src={sbanner} alt='' />
        </div>
        <div className='s-contents'>
        <span>SUMMER SPECIAL EDITION</span>
        </div>
        <div className='s1-contents'>
        <span>BELK ACTIVE</span>
        </div>
        <div className='sports-btn'>
        <button>SHOP COLLECTION</button>
        </div>
      </motion.div>

      {/* puma running */}
      <motion.div initial={{x: -1400}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "1"
        }} className='puma-run'>
      <h1>Puma Running</h1>
        <div className='running-pumashoe'>
        <img src={pumanitro1} alt='' />
        <video controls={false}
    autoPlay
    muted
    loop>
    <source src={nitrovideo} type="video/mp4"/>
    </video>
        <img src={pumanitro2} alt='' />
        </div>
      </motion.div>

      {/* football */}
      <motion.div initial={{x: -1400}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "2"
        }} className='football'>
      <video controls={false}
    autoPlay
    muted
    loop>
    <source src={football} type="video/mp4"/>
    </video>
      </motion.div>
      <motion.div initial={{x: -1400}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "2"
        }} className='football-content'>
      <span>FIND YOUR NEXT FOOTBALL BOOT</span>
      </motion.div>
      <motion.div initial={{x: -1400}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "2"
        }} className='football-banner'>
      <img src={footballbanner1} alt='' />
      <img src={footballbanner2} alt='' />
      <img src={footballbanner3} alt='' />
      </motion.div>
      <motion.div initial={{x: -1400}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "2"
        }} className='football-banner2'>
      <img src={footballbanner4} alt='' />
      </motion.div>

      {/* cricket */}
      <motion.div initial={{x: -1400}}
        animate={{x: 0}}
        transition={{
          duration: "1",
          delay: "2"
        }} className='cricket-banner'>
      <img src={cricketbanner} alt='' />
      <div className='cricket-content'>
      <span>POWER UP YOUR PERFORMANCE</span>
      </div>
      <div className='cricket-btn'>
      <button>Shop Now</button>
      </div>
      </motion.div>
    </div>
  )
}

export default Sports
