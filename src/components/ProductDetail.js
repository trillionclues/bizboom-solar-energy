import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getSingleProduct } from '../features/SingleProduct';
import { formatPrice } from '../utils/helpers';
import AddToCart from './AddToCart';
import Loading from './Loading';
import ProductImage from './ProductImage';

const ProductDetail = () => {
  const { productItem, isLoading, error } = useSelector(
    (state) => state.singleProduct
  );
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();

  // console.log(productItem);

  // destructure productItem
  const {
    company,
    description,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
    shipping,
  } = productItem;

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/products');
      }, 3000);
    }
  }, [error, navigate]);

  if (error) {
    return (
      <div className='bg-white pt-24 h-[100%] w-full md:px-16 px-8 text-center'>
        <div className='md:px-16 px-8 text-center'>
          <h2 className='text-2xl md:text-3xl font-semibold text-[#3D405B] mb-2 md:mb-4'>
            {error}
          </h2>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='bg-white pt-24 h-[100%] w-full md:px-16 px-8 text-center'>
        <div className='md:px-16 px-8 text-center'>
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
      <div className='flex flex-row justify-start items-start gap-4 md:gap-0 pt-5'>
        <h3>
          <Link to='/'>
            <span className='italic font-light'>Home</span>
          </Link>
          <span className='mx-2'>/</span>
          <Link to='/products'>
            <span className='font-light italic'>Products</span>
          </Link>
          <span className='mx-2'>/</span>
          <span className='font-medium capitalize italic'>{name}</span>
        </h3>
      </div>
      <div className='container pt-10 pb-10'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-4'>
          <ProductImage images={images} name={name} />
          <div className='w-full md:w-[50%]'>
            <h2 className='text-2xl md:text-3xl capitalize font-semibold text-[#3D405B] mb-2 md:mb-4'>
              {name}
            </h2>
            <div className='flex flex-row justify-start items-start gap-4'>
              <div className='flex justify-center items-center flex-row my-o -mt-1'>
                {stars}
                {[...Array(5)].map((_, index) => (
                  <span key={index} className='text-yellow-500 text-xl'>
                    &#9733;
                  </span>
                ))}
              </div>

              <p className='text-[#3D405B] text-base font-normal tracking-wide'>
                ({reviews} customer reviews)
              </p>
            </div>

            <p className='text-[#ab7a5f] text-xl font-bold mt-2 tracking-wide'>
              {formatPrice(price)}
            </p>

            <p className='text-[#3D405B] text-base font-normal tracking-wide mt-3'>
              {description}
            </p>

            <div className='flex flex-row justify-start items-center gap-4 mt-4'>
              <div className='flex flex-row justify-start items-center gap-2'>
                <p className='text-[#3D405B] text-base font-semibold tracking-wide'>
                  Available:
                </p>
                <p className='text-[#3D405B] text-base font-normal tracking-wide'>
                  {stock > 0 ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>
            <div className='flex flex-row justify-start items-center gap-2 mt-4'>
              <p className='text-[#3D405B] text-base font-semibold  tracking-wide'>
                Brand:
              </p>
              <p className='text-[#3D405B] text-base font-normal tracking-wide capitalize'>
                {company}
              </p>
            </div>
            <div className='flex flex-row justify-start items-center gap-2 mt-4'>
              <p className='text-[#3D405B] text-base font-semibold tracking-wide'>
                Shipping:
              </p>
              <p className='text-[#3D405B] text-base font-light tracking-wide capitalize'>
                {shipping ? 'Free Shipping' : 'Paid Shipping'}
              </p>
            </div>
            <hr
              className='
              border-[#3D405B] border-opacity-10 my-4
            '
            />
            {stock > 0 && <AddToCart productItem={productItem} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
