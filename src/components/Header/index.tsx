import React from 'react';
import Image from 'next/image';

export default function Example({ tag = 'pricing', title = 'Take control of your team.', subtitle = '' }) {
  return (
    <div className='mb-14 py-8 px-6 bg-white rounded-md shadow-lg'>
      <div >
        <div>
         
          <div className='flex'>
            <div className='flex items-end'>
              <p className=' text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl items-end'>
            {title}
          </p> 
          
          </div>
          <div className='items-end'>
          {tag &&    
            <div className="w-[450px] overflow-hidden hover:cursor-pointer items-end">
            <Image
                src={tag}
                alt="logo"
                layout="responsive"
                height="25%"
                width="100%"
                className="object-scale-down"
              />
            </div>
          }
          </div>
          </div>
        
          {subtitle && (
            <div className='space-y-6 text-base text-gray-700 pt-8' dangerouslySetInnerHTML={{ __html: subtitle }} />
          )}
        </div>
      </div>
    </div>
  );
}
