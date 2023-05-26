import BestDeals from '../components/BestDeals';
import Brands from '../components/Brands';
import Hero from '../components/Hero';

const LandingPage = () => {
  return (
    <>
      <div className='bg-[#E3F2C1] h-full pt-14 md:h-[80vh] w-full'>
        <Hero />
      </div>
      <BestDeals />
      <Brands />
    </>
  );
};

export default LandingPage;
