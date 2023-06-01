import { formatPrice } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../features/SingleProduct';
import { toggleAmount } from '../../features/SingleProduct';
import { IconMinus, IconPlus, IconDelete } from '../../assets/icons/icons';

const CartItems = ({ initialCartItems }) => {
  // const storedCartItems = localStorage.getItem('cartItems');
  // const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col justify-start items-start mt-8'>
      {initialCartItems.map((item, idx) => {
        const { id, name, price, images } = item;
        const displayImage = images[0].url;

        return (
          <div
            key={idx}
            className='flex flex-row justify-between items-center mb-5 w-full'
          >
            <div className='mr-10 md:mr-[230px] flex flex-col justify-center items-center gap-0 md:gap-2 mb-6'>
              <img
                src={displayImage}
                className='h-full w-full md:w-40'
                alt='item'
              />
              <p className='text-sm capitalize hidden md:inline-block'>
                {name}
              </p>
            </div>
            <div
              className='flex flex-grow
        justify-between items-center gap-8 md:gap-32
        '
            >
              <p className='text-[#3D405B] text-md md:text-lg font-normal tracking-wide mr-auto md:mr-20'>
                {formatPrice(price)}
              </p>
              <div className='flex flex-row justify-center items-center gap-4 md:gap-10 mr-auto md:mr-32'>
                <button
                  className='text-[#3D405B] text-lg md:text-2xl font-bold tracking-wide'
                  onClick={() => dispatch(toggleAmount({ id, toggle: 'dec' }))}
                >
                  <IconMinus />
                </button>

                <p className='text-[#3D405B] text-lg md:text-2xl font-normal tracking-wide'>
                  {item.amount}
                </p>

                <button
                  className='text-[#3D405B] text-lg md:text-2xl font-normal tracking-wide'
                  onClick={() => dispatch(toggleAmount({ id, toggle: 'inc' }))}
                >
                  <IconPlus />
                </button>
              </div>
              <div className='flex flex-row justify-center items-center gap-10'>
                <p className='text-[#3D405B] text-md md:text-lg font-normal tracking-wide'>
                  {formatPrice(price)}
                </p>
                <button
                  className='bg-red-500 text-lg md:text-xl font-normal tracking-wide rounded-md p-1'
                  onClick={() => dispatch(removeCartItem({ id }))}
                >
                  <IconDelete className='text-white' />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
