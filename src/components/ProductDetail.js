import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../features/Products';
import Loading from './Loading';

const ProductDetail = () => {
  const { isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { productId } = useParams();

  // console.log(allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='bg-white pt-24 h-[100%] w-full md:px-16 px-8 text-center'>
        <div className='md:px-16 px-8'>
          <h2 className='text-2xl md:text-3xl font-semibold text-[#3D405B] mb-2 md:mb-4'>
            Hold on, we are getting your product!
          </h2>
        </div>
        <Loading />
      </div>
    );
  }

  return (
    <div className='bg-white h-full pt-16 md:h-[100%] w-full md:px-16 px-8'>
      <div className='container pt-10 pb-10'>
        <div className='flex md:flex-row flex-col justify-center md:justify-between items-center gap-4 md:gap-0'>
          <div className='w-[100%] md:w-[20%] mr-0 md:mr-6'>{productId}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
