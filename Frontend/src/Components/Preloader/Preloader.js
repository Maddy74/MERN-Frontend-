import React, {useEffect} from 'react';
import './Preloader.css';
import logo from '../Assets/logo.png';
import { preLoaderAnim } from "../Animation/Animation";
import {motion} from "framer-motion";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  const text1 = "Welcome To WynkWear".split(" ");
  const text2 = "Blink Click Chic".split(" ");
  return ( 
    <div className='preloader'>
    <img className='logo' src={logo} alt='Logo' />
    <div className='welcome'>
    {text1.map((el, i) =>(
      <motion.span
      initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
      </motion.span>
    ))}
    </div>
      <div className='text-container'>
      {text2.map((el, i) =>(
      <motion.span
      initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
      </motion.span>
    ))}
      </div>
      
    </div>
  );
};

export default Preloader;
