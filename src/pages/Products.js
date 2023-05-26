import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { IconGrid, IconList } from '../assets/icons/icons';
import ProductItem from '../components/ProductItem';
import { getProducts } from '../features/Products';

const Products = () => {
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // const { productId } = useParams();

  console.log(allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className='bg-white h-full pt-16 md:h-[100%] w-full md:px-16 px-8'>
      <div className='container pt-10 pb-10'>
        <div className='flex md:flex-row flex-col justify-center md:justify-between items-center gap-4 md:gap-0'>
          <div className='w-[100%] md:w-[20%] mr-0 md:mr-6'>
            <input
              type='text'
              placeholder='Search...'
              className='py-[10px] md:py-[5px] md:px-4 px-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black md:mr-10 mr-0 bg-gray-100'
            />
          </div>
          <div className='flex flex-row justify-between items-center md:justify-between md:w-[80%] w-full'>
            <div className='flex flex-row justify-center items-center'>
              <div className='md:mr-10 mr-2 flex flex-row justify-center items-center'>
                <button className='grid-toggle rounded-md mr-1 hover:bg-gray-200'>
                  <IconGrid />
                </button>
                <button className='list-toggle rounded-md hover:bg-gray-200 border-1'>
                  <IconList />
                </button>
              </div>

              <h4 className='text-sm md:text-base'>22 Products found</h4>
            </div>
            <hr className='border-1 border-gray-300 w-[40px] md:w-[35%]' />
            <div className='flex flex-row justify-center items-center md:ml-10 ml-0'>
              Sort By: &nbsp;
              <select
                name=''
                id=''
                className='py-[5px] md:px-4 px-0 rounded-md focus:outline-none'
              >
                <option
                  value=''
                  className='py-[5px] px-4 rounded-md focus:outline-none'
                >
                  Price - Lowest
                </option>
                <option
                  value=''
                  className='py-[5px] px-4 rounded-md focus:outline-none'
                >
                  Price - Highest
                </option>
                <option
                  value=''
                  className='py-[5px] px-4 rounded-md focus:outline-none'
                >
                  Name - A to Z
                </option>
                <option
                  value=''
                  className='py-[5px] px-4 rounded-md focus:outline-none'
                >
                  Name - Z to A
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className='flex justify-center items-center h-[50vh]'>
          <h1 className='text-2xl'>Loading...</h1>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4'>
          {allProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
