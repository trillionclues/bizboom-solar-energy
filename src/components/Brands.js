import { useSelector } from 'react-redux';

const Brand = () => {
  const { allProducts } = useSelector((state) => state.products);

  // company name
  const company = allProducts.map((item) => item.company);
  console.log(company);

  // company logo url
  const logo = allProducts.map((item) => item.logo[0].url);

  return (
    <>
      <hr className='w-1/2 mx-auto bg-gradient-to-r from-black via-red-500 to-black border-2 border-black rounded' />

      <div className='brands bg-white py-24'>
        <div className='mx-auto'>
          <h2 className='md:px-16 px-8 text-2xl md:text-3xl font-semibold text-[#3D405B] mb-2 md:mb-4'>
            Choose By Brand
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-7 md:px-16 px-8 py-10 items md:items-start justify-items md:px-16 '>
            {logo.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-row items-start justify-start gap-2 md:gap-5 px-4 py-5 rounded-md shadow-md hover:shadow-lg transition w-full bg-gray-100'
                >
                  <img
                    src={item}
                    alt={company[index]}
                    className='w-16 h-16 object-contain rounded-full'
                  />
                  <div className='flex flex-col justify-start items-start gap-2'>
                    <h3 className='text-xl font-semibold text-[#3D405B] capitalize'>
                      {company[index]}
                    </h3>
                    <p className='text-sm text-[#3D405B] font-normal'>
                      Delivery with in 24 hours
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
