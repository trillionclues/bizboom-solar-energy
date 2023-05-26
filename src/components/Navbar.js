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
              <Link to='collections/about'>About</Link>
            </li>
            <li>
              <Link to='collections/batteries'>Batteries</Link>
            </li>
            <li>
              <Link to='collections/inverters'>Inverters</Link>
            </li>
            <li>
              <Link to='collections/panels'>Solar Panels</Link>
            </li>
          </ul>

          <div className='cart-login flex justify-center items-center gap-6'>
            <div className='login'>
              <Link to='/login'>
                <button className='btn flex justify-center items-center '>
                  <IconUser />
                  <p>Login</p>
                </button>
              </Link>
            </div>
            <Link to='/cart'>
              <button className='btn flex justify-center items-center'>
                <IconShoppingCart />
                <p>Cart</p>
              </button>
            </Link>
          </div>
          <button className='nav-toggle md:hidden flex'>
            <BarsIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
