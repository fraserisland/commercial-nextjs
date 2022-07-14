import Link from 'next/link';
import React from 'react';
import capitalize from '@/utils/capitalise';

const Cta = ({ titleTop = '', titleBottom = '', btnText = '', bgImgSrc = '', href = '' }) => {
  return (
    
    <div className='my-24 space-y-16 bg-white rounded-md shadow-xl'>
      <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center'>
        <div className='lg:col-start-8 xl:col-start-9 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5  px-4 pb-4 lg:p-0 lg:pr-3'>
          <img className='hidden md:block w-28 hover:cursor-pointer mb-2' src='/assets/images/logo.png' alt='' />
          <h3 className='text-lg lg:text-2xl font-medium text-gray-900'>
            {capitalize(titleTop)} {titleBottom.toLowerCase()}
          </h3>
          <Link href={href}>
            <div className='mt-4 inline-flex w-full items-center justify-center border rounded border-transparent bg-orange px-5 py-3 text-base  font-medium text-whiteLinen hover:cursor-pointer hover:bg-orange-50 sm:w-auto'>
              {btnText}
            </div>
          </Link>
        </div>
        <div className={'lg:col-start-1 flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'}>
          <div className='aspect-w-5 aspect-h-2 rounded-md rounded-b-none lg:rounded-r-none lg:rounded-bl bg-gray-100 overflow-hidden'>
            <img src={bgImgSrc} alt={titleTop} className='object-center object-cover' />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Cta;
