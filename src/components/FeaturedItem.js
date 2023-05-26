import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const Featured = () => {
  // const Featured = ({ item }) => {
  // console.log(item);
  // const { name, image, price, shipping } = item;

  return (
    <div>
      <article>
        <div className='flex flex-col justify-between items-center bg-white rounded-md shadow-md p-2 md:p-4'>
          <div className='mb-8'>
            <img
              // src={image}
              // alt={name}
              className='w-80 md:w-72 h-72 md:h-56 object-cover rounded-t-md filter'
            />
          </div>
          <div className='card-footer flex flex-row justify-between items-start mx-1'>
            <h3 className='text-sm font-light text-gray-700 mb-2 capitalize'>
              {/* {name} */}
            </h3>
            <p className='text-gray-500 mb-2 text-[#3D405B]'>
              {/* {formatPrice(price)} */}
            </p>
          </div>
        </div>

        <div className='flex flex-row justify-between items-center pt-3 mx-2'>
          <p className='text-gray-500 mb-2 text-[#3D405B]'>
            {/* {shipping ? 'Free Shipping' : 'Paid Shipping'} */}
          </p>
          <Link to='cart'>
            <button>Add to Cart</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Featured;
