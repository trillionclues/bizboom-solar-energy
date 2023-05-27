import React, { useState } from 'react';

const ProductImage = ({ images, name }) => {
  // const [mainImg, setMainImg] = useState(images[0]);
  return (
    <div className='w-full md:w-[50%]'>
      <div className='flex flex-row justify-start items-start gap-4 md:gap-0'>
        <div className='flex flex-col gap-2'>
          {/* <img
            src={mainImg.url}
            alt={name}
            className='w-full md:w-9/12 h-[100%] object-cover'
          /> */}

          <div className='flex flex-row justify-start items-start gap-4'>
            {/* {images.map((image, idx) => {
              return (
                <div key={idx}>
                  <img
                    src={image.url}
                    alt={name}
                    className='w-16 h-16 object-cover cursor-pointer border-2 border-[#C9DBB2]
                    hover:border-[#3D405B] transition duration-500 ease-in-out
                    transform hover:-translate-y-1 hover:scale-110'
                    onClick={() => setMainImg(images[idx])}
                  />
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
