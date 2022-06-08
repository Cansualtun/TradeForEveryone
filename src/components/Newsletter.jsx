import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-5 text-white px-8 bg-[#6A6D9E] '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-Bilo py-2'>
             Stay In Touch
          </h1>
          <p>Join our newsletter to get news before anyone</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full border-[#3d1673] '>
            <input
              className='p-3 flex w-full rounded-md font-Bilo text-white'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#3d1673] text-white rounded-md font-Bilo w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#3d1673]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
