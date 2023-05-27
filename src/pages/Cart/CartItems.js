import React from 'react';
import logo from '../../assets/logo3.jpg';

const CartItems = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
      {/* item image */}
      <div className='flex flex-row justify-between items-center w-full pb-4 gap-4'>
        <div className='flex flex-row justify-start items-center gap-4'>
          <img src={logo} alt='item' className='w-24 h-24' />
          <div className='flex flex-col justify-start items-start'>
            <p className='text-[#3D405B] text-sm font-black  tracking-wide'>
              Item Name
            </p>
            <p>Color: </p>
          </div>
        </div>
        <div className='flex flex-row justify-start items-center gap-4'>
          <img src={logo} alt='item' className='w-24 h-24' />
          <div className='flex flex-col justify-start items-start'>
            <p className='text-[#3D405B] text-sm font-black  tracking-wide'>
              Item Name
            </p>
            <p>Color: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
