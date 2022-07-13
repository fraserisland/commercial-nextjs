import React from 'react';

export default function Example({ tag = 'pricing', title = 'Take control of your team.', subtitle = '' }) {
  return (
    <div>
      <div className='pb-12'>
        <div>
          {tag && <h2 className='text-base font-semibold uppercase tracking-wide text-orange-500 py-1'>{tag}</h2>}
          <p className=' text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl'>{title}</p>
          {subtitle && (
            <div className='space-y-6 text-base text-gray-700 pt-2' dangerouslySetInnerHTML={{ __html: subtitle }} />
          )}
        </div>
      </div>
    </div>
  );
}
