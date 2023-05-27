import { Link } from 'react-router-dom';
import logo from '../assets/logo3.jpg';
import { BarsIcon, IconUser, IconShoppingCart } from '../assets/icons/icons';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 bg-white text-gray-700 py-3 w-full shadow-md z-50'>
      <div className='nav-center px-8 md:px-16'>
        <div className='nav-header flex flex-row justify-between items-center'>
          <Link to='/'>
            <img src={logo} alt='Bizboom' className='w-24 h-14 h-auto' />
          </Link>

          <ul className='nav-links flex justify-center items-center gap-10 hidden md:flex'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='collection/about'>About</Link>
            </li>
            <li>
              <Link to='collection/batteries'>Batteries</Link>
            </li>
            <li>
              <Link to='collection/inverters'>Inverters</Link>
            </li>
            <li>
              <Link to='collection/solar-panels'>Solar Panels</Link>
            </li>
          </ul>

          <div className='cart-login flex justify-center items-center gap-3 md:gap-6'>
            <Link to='/login'>
              <button className='btn-svg flex justify-center items-center gap-1'>
                <IconUser />
                <p className='hidden md:inline-block'>Login</p>
              </button>
            </Link>

            <Link to='/cart'>
              <button className='btn-svg flex justify-center items-center gap-1'>
                <IconShoppingCart />
                <p className='hidden md:inline-block'>Cart</p>
              </button>
            </Link>
            <button className='nav-toggle md:hidden flex'>
              <BarsIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
