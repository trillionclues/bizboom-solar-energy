import { useEffect, useRef, useState } from 'react';
import bg1 from '../assets/bg-hero1.jpg';
import bg2 from '../assets/bg-hero2.jpg';
import bg3 from '../assets/bg-hero3.jpg';
import bg4 from '../assets/bg-hero4.jpg';
import {
  IconChevronCompactLeft,
  IconChevronCompactRight,
} from '../assets/icons/icons';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sliderRef = useRef(null);

  // handle forward slider toggle
  const handleForwardSlider = () => {
    if (currentImage === 3) {
      setCurrentImage(0);
      sliderRef.current.style.transform = `translateX(0%)`;
    } else {
      setCurrentImage(currentImage + 1);
      sliderRef.current.style.transform = `translateX(-${currentImage + 1}00%)`;
    }
  };

  // handle backward slider toggle
  const handleBackwardSlider = () => {
    if (currentImage === 0) {
      setCurrentImage(3);
      sliderRef.current.style.transform = `translateX(-300%)`;
    } else {
      setCurrentImage(currentImage - 1);
      sliderRef.current.style.transform = `translateX(-${currentImage - 1}00%)`;
    }
  };

  useEffect(() => {
    // auto slider
    const interval = setInterval(() => {
      if (currentImage === 3) {
        setCurrentImage(0);
        sliderRef.current.style.transform = `translateX(0%)`;
      } else {
        setCurrentImage(currentImage + 1);
        sliderRef.current.style.transform = `translateX(-${
          currentImage + 1
        }00%)`;
      }
    }, 3000);

    // clean the interval when current image changes
    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className='hero'>
      <div className='relative overflow-hidden h-full'>
        <div
          className='flex transition transform ease-in-out duration-75'
          ref={sliderRef}
        >
          <img src={bg1} alt='bg1' className='w-full h-auto object-cover ' />
          <img src={bg2} alt='bg2' className='w-full h-auto object-cover' />
          <img src={bg3} alt='bg3' className='w-full h-auto object-cover' />
          <img src={bg4} alt='bg4' className='w-full h-auto object-cover' />
        </div>
        <div className='absolute md:top-1/2 top-1/3 md:left-10 md:right-10 right-0 left-0 flex justify-between'>
          <button
            className='text-gray-400 py-2 px-4'
            onClick={handleBackwardSlider}
          >
            <IconChevronCompactLeft />
          </button>
          <button
            className='text-gray-400 py-2 px-4'
            onClick={handleForwardSlider}
          >
            <IconChevronCompactRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
