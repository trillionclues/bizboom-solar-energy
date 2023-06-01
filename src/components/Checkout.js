import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import { clearCart } from '../features/SingleProduct';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';

const Checkout = () => {
  //wrap the initialization of 'initialCartItems' in its own useMemo() Hook
  const initialCartItems = useMemo(() => {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  }, []);

  const dispatch = useDispatch();

  // calculate total cart price
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const item of initialCartItems) {
      totalPrice += item.price * item.amount;
    }
    return totalPrice;
  };

  // clear cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(initialCartItems));
  }, [initialCartItems]);

  return (
    <div className='flex flex-col justify-end items-end w-full mb-8'>
      <div className='flex flex-row justify-between items-center w-full font-black pb-4 font-light capitalize'>
        <Link to='/products'>
          <button className='bg-[#3D405B] text-white text-sm md:text-base font-normal tracking-wide rounded-md p-2 mx-2 md:mx-3 hover:bg-[#3D405B] hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            Continue Shopping
          </button>
        </Link>
        <button
          className='bg-black text-white text-sm md:text-base font-normal tracking-wide rounded-md p-2 mx-2 md:mx-3 hover:bg-[#3D405B] hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
          onClick={handleClearCart}
        >
          Clear Shopping Cart
        </button>
      </div>
      <div className='flex flex-col justify-center items-center font-black pb-4 font-light capitalize border border-2 md:w-[30%] w-full my-5 '>
        <div className='flex flex-col justify-center items-center w-full font-black pb-4 font-light px-14 py-8 gap-5'>
          <div className='flex flex-row w-full'>
            <h3 className='tracking-wide text-[#3D405B] text-lg font-black tracking-wide w-full'>
              Subtotal:
            </h3>
            <span className='text-black text-lg font-normal tracking-wide'>
              $0.00
            </span>
          </div>
          <div className='flex flex-row w-full'>
            <h3 className='tracking-wide text-normal text-lg font-normal tracking-wide w-full'>
              Shipping:
            </h3>
            <span className='text-black text-base font-normal tracking-wide'>
              FREE
            </span>
          </div>
          <hr className='border-[#3D405B] border-opacity-10 border-solid border-t-2 w-full mb-2' />
        </div>

        <div className='flex flex-col justify-center items-center w-full font-black pb-4 font-light px-14 py-2 gap-5'>
          <div className='flex flex-row w-full justify-center items-center'>
            <h3 className='tracking-wide text-[#3D405B] text-2xl font-black tracking-wide w-full'>
              Order Total:
            </h3>
            <span className='text-[#3D405B] text-base font-normal tracking-wide'>
              {formatPrice(getTotalPrice())}
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center w-full md:w-[30%] font-black pb-4 font-light capitalize'>
        <button className='w-full bg-[#3D405B] text-white text-sm md:text-base font-normal tracking-wide p-3 hover:bg-[#3D405B] hover:text-white transition duration-500 ease-in-out hover:bg-black hover:text-white'>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
