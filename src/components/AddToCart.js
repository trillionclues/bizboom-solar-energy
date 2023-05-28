import { useEffect, useState } from 'react';
import { toggleAmount } from '../features/SingleProduct';
import { useDispatch, useSelector } from 'react-redux';
import { itemTotal } from '../features/Products';
import { IconMinus, IconPlus, IconCheck } from '../assets/icons/icons';
import { useNavigate } from 'react-router-dom';

const AddToCart = ({ productItem }) => {
  const { colors } = productItem;
  const [mainColor, setMainColor] = useState(colors[0]);
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.singleProduct);
  const { itemAmount } = useSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(toggleAmount('reset'));
  }, [dispatch]);

  const handleItemTotal = () => {
    dispatch(itemTotal(itemAmount));
    navigate('/cart');
  };

  return (
    <>
      <div className='flex flex-row justify-start items-center gap-2 mt-4'>
        <p className='text-[#3D405B] text-base font-semibold tracking-wide pr-2'>
          Choose a color:
        </p>
        <div className='flex flex-row justify-start items-center gap-2'>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color && <IconCheck />}
              </button>
            );
          })}
        </div>
      </div>

      <div className='flex flex-row justify-start items-center md:gap-16 gap-12 mt-4'>
        <div className='flex flex-row justify-start items-center gap-2 bg-[#C9DBB2] w-40 h-12 rounded-md px-3 py-2'>
          <button
            className='h-8 text-4xl font-black mr-3'
            onClick={() => dispatch(toggleAmount('dec'))}
          >
            <IconMinus />
          </button>
          <p className='text-[#3D405B] text-4xl font-black tracking-wide mr-3'>
            {amount}
          </p>
          <button
            className='h-8 text-4xl font-black'
            onClick={() => dispatch(toggleAmount('inc'))}
          >
            <IconPlus />
          </button>
        </div>
        {/* <Link to='/'> */}
        <button
          className='w-40 h-12 bg-[#3D405B] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D405B]'
          onClick={handleItemTotal}
        >
          Add to Cart
        </button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default AddToCart;
