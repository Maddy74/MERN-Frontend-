import React, { useEffect, useState } from 'react';
import './Slidedata.css';

const Slide = ({item})=>{
    const styles= {
        backgroundImage: `url(${item.img})`,
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
    };
    return (
     <div className='slide' style={styles}>
        <img src={item.img} alt='' className='slide-image' />
    </div>
    );
}

const Slidesdata = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const slider = setInterval(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(slider);
  }, [slides.length]);

  const translateValue = currentIndex === 0 ? 0 : -currentIndex * 100;

  return (
      <div className='slider'>
          <div className='slider-wrapper' style={{
              transform: `translateX(${translateValue}%)`,
              transition: "transform 0.4s ease-out ",
              width: `${slides.length * 100}%`, // Adjusted width for wrapper
          }}>
              {slides.map((item, index) => (
                  <Slide key={index} item={item} />
              ))}
          </div>
          <div className='dots-wrapper'>
              {slides.map((item, index) => (
                  <span
                      key={index}
                      className={`dots ${currentIndex === index ? "active" : ""}`}
                      onClick={() => setCurrentIndex(index)}
                  >
                      &#8226;
                  </span>
              ))}
          </div>
      </div>
  );
}

export default Slidesdata