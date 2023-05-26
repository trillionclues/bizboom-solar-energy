import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/Products';
import { Link } from 'react-router-dom';

// components
import FeaturedItem from './FeaturedItem';
import Loading from './Loading';

const BestDeals = () => {
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='bg-[#E3F2C1] pt-12 pb-20 w-full section text-center'>
        <div className='md:px-16 px-8'>
          <h2 className='text-2xl md:text-3xl font-semibold text-[#3D405B] mb-2 md:mb-4'>
            Todays Best Deals For You!
          </h2>
          <hr className='border-2 border-[#C9DBB2] w-20 mx-auto my-2 md:my-4 md:w-40' />
        </div>

        <Loading />
      </div>
    );
  }

  //check for items that contain featured property true from data returned
  const featuredItems = allProducts.filter((item) => item.featured === true);
  // console.log(featuredItems);

  return (
    <div className='bg-[#E3F2C1] pt-12 pb-20 w-full section'>
      <div className='md:px-16 px-8 text-center'>
        <h2 className='text-2xl md:text-3xl font-semibold text-[#3D405B] mb-2 md:mb-4'>
          Todays Best Deals For You!
        </h2>
        <hr className='border-2 border-[#C9DBB2] w-20 mx-auto my-2 md:my-4 md:w-40' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 px-8 md:px-16'>
        {featuredItems.map((item) => {
          return (
            <div key={item.id} className='pt-10'>
              <FeaturedItem item={item} />
            </div>
          );
        })}
      </div>

      <div className='all-products'>
        <div className='text-center mt-10'>
          <Link to='/products'>
            <button className='bg-[#3D405B] text-white px-4 py-2 rounded-md hover:bg-[#E3F2C1] hover:text-[#3D405B]  hover:bg-white hover:border-[#3D405B] hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out transition duration-300 ease-in-out'>
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
