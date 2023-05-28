import React from 'react';
import logo from '../../assets/logo3.jpg';
import { IconMinus, IconPlus, IconDelete } from '../../assets/icons/icons';

const CartItems = () => {
  return (
    <div className='flex flex-col justify-start items-start mt-8'>
      <div className='flex flex-row justify-between items-center'>
        <div className='mr-10 md:mr-[230px]'>
          <img src={logo} className='h-28 w-40 ' />
        </div>
        <div
          className='flex flex-grow
        justify-between items-center gap-8 md:gap-32
        '
        >
          <p className='text-[#3D405B] text-lg md:text-xl font-normal tracking-wide mr-auto md:mr-20'>
            $100
          </p>
          <div className='flex flex-row justify-center items-center gap-4 md:gap-10 mr-auto md:mr-32'>
            <button className='text-[#3D405B] text-lg md:text-2xl font-bold tracking-wide'>
              <IconMinus />
            </button>

            <p className='text-[#3D405B] text-lg md:text-2xl font-normal tracking-wide'>
              1
            </p>

            <button className='text-[#3D405B] text-lg md:text-2xl font-normal tracking-wide'>
              <IconPlus />
            </button>
          </div>
          <div className='flex flex-row justify-center items-center gap-10'>
            <p className='text-[#3D405B] text-lg md:text-xl font-normal tracking-wide'>
              $100
            </p>
            <button className='bg-red-500 text-lg md:text-xl font-normal tracking-wide rounded-md p-1'>
              <IconDelete className='text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className='flex flex-col justify-start items-start mt-8'>
    //   {/* item image */}
    //   <div className='flex flex-row justify-between items-center w-full pb-4 gap-4'>
    //     <div className='flex flex-row justify-between items-center w-full font-black pb-4 px-24 font-light text-lg capitalize'>
    //       <img src={logo} alt='item' className='w-24 h-24' />
    //       <div className='flex flex-col justify-start items-start'>
    //         <p className='text-[#3D405B] text-sm font-black  tracking-wide'>
    //           Item Name
    //         </p>
    //         <p>Color: </p>
    //       </div>

    //       <p className='text-[#3D405B] text-sm font-black  tracking-wide'>
    //         $100
    //       </p>
    //     </div>
    //     <div className='flex flex-row justify-between items-center gap-4'>
    //       <button className='text-[#3D405B] text-sm font-black  tracking-wide'>
    //         -
    //       </button>
    //       <p className='text-[#3D405B] text-sm font-black  tracking-wide'>1</p>
    //       <button className='text-[#3D405B] text-sm font-black  tracking-wide'>
    //         +
    //       </button>
    //     </div>

    //     <p className='text-[#3D405B] text-sm font-black  tracking-wide'>$100</p>
    //     <button className='text-[#3D405B] text-sm font-black  tracking-wide'>
    //       X
    //     </button>
    //   </div>
    // </div>
  );
};

export default CartItems;
