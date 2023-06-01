import { Link } from 'react-router-dom';
import {
  IconBriefcase,
  IconGift,
  IconBxHelpCircle,
} from '../assets/icons/icons';
import logo3 from '../assets/logo3.jpg';

const Footer = () => {
  return (
    <footer className='text-black py-3 flex flex-col justify-start items-start gap-4 w-full px-8 md:px-16 bg-[#C9DBB2] h-full pt-10 pb-8 md:pb-3'>
      <div className='footer flex flex-col gap-10'>
        <div className='flex flex-col md:flex-row justify-between items-start w-[100%] md:w-full mb-4'>
          <div
            className='flex flex-col justify-start items-start gap-4'
            style={{ alignSelf: 'flex-start' }}
          >
            <img src={logo3} alt='logo' className='md:w-1/5 w-2/5 invert-bg' />
            <h3 className='text-sm w-full md:w-3/5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              aspernatur praesentium optio, alias exercitationem incidunt.
            </h3>
          </div>
          <div className='flex flex-row gap-4 md:gap-24 justify-start items-start md:-ml-32 ml-auto md:mt-auto mt-5'>
            <div className='about flex flex-col justify-center'>
              <h2 className='font-bold text-xl mb-2 md:mb-5'>About Us</h2>
              <ul className='text-sm flex flex-col gap-0 md:gap-3'>
                <li>
                  <Link to='/about'>About Bizboom</Link>
                </li>
                <li>
                  <Link to='/careers'>Careers</Link>
                </li>
                <li>
                  <Link to='/contact'>News {'&'} Blog</Link>
                </li>

                <li>
                  <Link to='/'>Ideas {'&'} Guides</Link>
                </li>
                <li>
                  <Link to='/'>Affiliate Partners</Link>
                </li>
              </ul>
            </div>
            <div className='about flex flex-col justify-center'>
              <h2 className='font-bold text-xl mb-2 md:mb-5'>Services</h2>
              <ul className='text-sm flex flex-col gap-0 md:gap-3'>
                <li>
                  <Link to='/about'>Gift Card</Link>
                </li>
                <li>
                  <Link to='/careers'>Mobile App</Link>
                </li>
                <li>
                  <Link to='/contact'>Order Pickup</Link>
                </li>
                <li>
                  <Link to='/'>Account Signup</Link>
                </li>
              </ul>
            </div>
            <div className='about flex flex-col justify-center'>
              <h2 className='font-bold text-xl mb-2 md:mb-5'>Help</h2>
              <ul className='text-sm flex flex-col gap-0 md:gap-3'>
                <li>
                  <Link to='/about'>Bizboom Help</Link>
                </li>
                <li>
                  <Link to='/careers'>Returns {'&'} Refunds</Link>
                </li>
                <li>
                  <Link to='/contact'>Track Orders</Link>
                </li>
                <li>
                  <Link to='/'>Contact Us</Link>
                </li>
                <li>
                  <Link to='/'>Security and Fraud</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className='border-t border-gray-600 mt-2 mb-0' />

        <div className='social flex flex-col md:flex-row justify-center md:justify-between items-center md:items-center -mt-6'>
          <div className='flex flex-row justify-center md:justify-between items-center text-sm md:items-center gap-5'>
            <div className='flex flex-row justify-between items-center gap-2'>
              <IconBriefcase />
              <p>Become Seller</p>
            </div>
            <div className='flex flex-row justify-between items-center gap-2'>
              <IconGift />
              <p>
                Gift <span className='hidden md:inline-block'> Cards</span>
              </p>
            </div>
            <div className='flex flex-row justify-between items-center gap-2'>
              <IconBxHelpCircle />
              <p>Help Center</p>
            </div>
          </div>

          <div className='social-middle flex flex-row gap-5 mt-3 md:mt-auto'>
            <div className='terms'>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div className='privacy'>
              <Link to='/'>Privacy {'&'} Policy</Link>
            </div>
          </div>

          <div className='social-right mt-1 md:mt-auto'>
            <p>
              All Rights Reserved by
              <span className='ml-2'>
                <a href='https://github.com/trillionclues/bizboom-solar-energy/'>
                  Trillionclues | 2023
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
