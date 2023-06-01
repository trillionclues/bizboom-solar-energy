import React from 'react';
import { Link } from 'react-router-dom';
import Checkout from '../../components/Checkout';
import CartItems from './CartItems';

const Cart = () => {
  // const { itemAmount } = useSelector((state) => state.products);
  // const { cartItems } = useSelector((state) => state.singleProduct);
  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  console.log(initialCartItems);

  return (
    <div className='bg-white h-full pt-16 md:h-[100%] w-full md:px-16 px-8'>
      <div className='flex flex-row justify-start items-start gap-4 md:gap-0 pt-5'>
        <h1
          className='
          text-[#3D405B] text-4xl font-black tracking-wide transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
        >
          <Link to='/'>
            <span className='italic font-semibold text-3xl text-xl'>Home</span>
          </Link>
          <span className='mx-2 text-[#3D405B] text-xl font-black tracking-wide'>
            /
          </span>

          <span className='italic font-medium text-2xl text-xl'>Cart</span>
        </h1>
      </div>

      {initialCartItems.length > 0 ? (
        <div className='flex flex-col justify-start items-start mt-10'>
          <div className='hidden md:flex flex-row justify-between items-center w-full font-black pb-4 px-24 font-light text-lg capitalize'>
            <h3 className='tracking-wide'>item</h3>
            <h3 className='tracking-wide'>price</h3>
            <h3 className='tracking-wide'>quantity</h3>
            <h3 className='tracking-wide'>subtotal</h3>
          </div>
          <hr className='border-[#3D405B] border-opacity-10 border-solid border-t-2 w-full' />
          <CartItems initialCartItems={initialCartItems} />
          <hr className='border-[#3D405B] border-opacity-10 border-solid border-t-2 w-full mb-6' />
          <Checkout />
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center my-8'>
          <h1 className='text-[#3D405B] text-4xl font-black tracking-wide text-center justify-center items-center'>
            Your cart is empty!
          </h1>
          <Link to='/products'>
            <button className='bg-[#3D405B] text-white text-lg font-semibold tracking-wide rounded-md p-2 mx-3 mt-8 uppercase hover:bg-[#3D405B] hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
              Fill it
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
