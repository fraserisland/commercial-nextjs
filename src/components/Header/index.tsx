import React from 'react';

export default function Example({
  tag = 'pricing',
  title = 'Take control of your team.',
  subtitle = '',
}) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-8  sm:px-6 lg:px-8">
        <div>
          <h2 className="text-base font-semibold uppercase tracking-wide text-orange-500 py-1">
            {tag}
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl md:py-3">
            {title}
          </p>
          <p className="mt-5 max-w-7xl text-lg text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
