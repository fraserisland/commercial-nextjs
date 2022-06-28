import Link from 'next/link';
import React from 'react';

const Cta = ({
  titleTop = "WHAT'S YOUR COMMERCIAL",
  titleBottom = 'PROPERTY WORTH?',
  btnText = 'Request an Appraisal',
  bgImgSrc = '/assets/images/banner1.jpg',
  href = '/appraisals',
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImgSrc})`,
      }}
      className={`m-auto max-w-7xl `}
    >
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">{titleTop}</span>
          <span className="block">{titleBottom}</span>
        </h2>
        <Link href={href}>
          <div className="mt-8 inline-flex w-full items-center justify-center border border-transparent bg-orange px-5 py-3 text-base  font-medium text-whiteLinen hover:cursor-pointer hover:bg-orange-50 sm:w-auto">
            {btnText}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
