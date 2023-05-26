import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const ProductItem = ({ product }) => {
  const { id, name, image, price } = product;
  return (
    <div className='flex flex-col justify-center items-center pb-10'>
      <Link to={`/products/${id}`}>
        <div className='flex flex-col justify-center items-center bg-white rounded-sm shadow p-2 md:p-4'>
          <div className='rounded-md md:w-[100%] w-full h-full flex justify-center items-center'>
            <img
              src={image}
              alt={name}
              className='w-80 md:w-72 h-72 md:h-56 object-cover rounded-t-md filter'
            />
          </div>
        </div>
        <div className='flex flex-row justify-center items-center pt-3 gap-10 mx-2 md:mx-2'>
          <h3 className='text-sm font-light text-gray-700 mb-2 capitalize'>
            {name}
          </h3>
          <p className='text-gray-500 mb-2 text-[#3D405B] font-semibold'>
            {formatPrice(price)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
