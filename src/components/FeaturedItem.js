import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const Featured = ({ item }) => {
  // console.log(item);
  const { name, image, price, shipping } = item;

  return (
    <div>
      <article>
        <Link to={`/products/${item.id}`}>
          <div className='flex flex-col justify-between items-center bg-white rounded-md shadow-md p-2 md:p-4 w-full'>
            <div className='mb-3 md:mb-8'>
              <img
                src={image}
                alt='featured item'
                className='w-80 md:w-72 h-72 md:h-56 object-cover rounded-t-md filter'
              />
            </div>
            <div className='card-footer flex flex-row justify-between items-start mx-1 gap-4 md:gap-2'>
              <h3 className='text-sm font-light text-gray-700 mb-2 capitalize'>
                {name}
              </h3>
              <p className='text-gray-500 mb-2 text-[#3D405B] font-semibold'>
                {formatPrice(price)}
              </p>
            </div>
          </div>
        </Link>

        <div className='flex flex-row justify-between items-center pt-3 mx-2'>
          <p className='text-black mb-2 text-[#3D405B] pt-1'>
            {shipping ? 'Free Shipping' : 'Paid Shipping'}
          </p>
          <div className='flex flex-row justify-center items-center'>
            {[...Array(5)].map((_, index) => (
              <span key={index} className='text-[#3D405B] text-xl'>
                &#9733;
              </span>
            ))}
            <div className='reviews'>
              <p className='text-[#3D405B] text-sm font-semibold'>(54)</p>
            </div>
          </div>

          {/* <Link to='cart'>
            <button>Add to Cart</button>
          </Link> */}
        </div>
      </article>
    </div>
  );
};

export default Featured;
