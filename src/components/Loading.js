const Loading = () => {
  return (
    <div className='flex items-center justify-center py-20'>
      <div className='flex space-x-3'>
        <div className='w-5 h-5 bg-gray-300 rounded-full animate-bounce'></div>
        <div className='w-5 h-5 bg-gray-300 rounded-full animate-bounce'></div>
        <div className='w-5 h-5 bg-gray-300 rounded-full animate-bounce'></div>
        <div className='w-5 h-5 bg-gray-300 rounded-full animate-bounce'></div>
      </div>
    </div>
  );
};

export default Loading;
