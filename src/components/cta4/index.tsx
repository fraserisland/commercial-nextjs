import Link from 'next/link';
import React from 'react';

const Cta4 = () => {
  return (
    <div className="m-auto max-w-7xl bg-[url('/assets/images/banner4.jpg')]">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">REQUIRE INFORMATION</span>
          <span className="block">ON PROPERTY MANAGEMENT SERVICES?</span>
        </h2>
        <Link href="/propertyManagement">
          <div className="mt-8 inline-flex w-full items-center justify-center border border-transparent bg-orange px-5 py-3 text-base  font-medium text-whiteLinen hover:cursor-pointer hover:bg-orange-50 sm:w-auto">
            Find out More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cta4;
