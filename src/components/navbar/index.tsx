import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Fragment } from 'react';

const links = [
  { href: '/forSale', name: 'For Sale' },
  { href: '/lease', name: 'Lease' },
  { href: '/results', name: 'Results' },
  { href: '/propertyManagement', name: 'Property Management' },
  { href: '/about', name: 'About' },
  { href: '/appraisals', name: 'Appraisals' },
  { href: '/contact', name: 'Contact' },
];

const NavBar = () => {
  return (
    <Popover className="relative bg-whiteLinen">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-6 pt-6 sm:px-6 lg:space-x-10 lg:pl-0 ">
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-whiteLinen p-2 text-orange-400 hover:bg-orange-100 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueCharcoal-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden whitespace-nowrap lg:flex lg:flex-1 lg:justify-between">
            <Popover.Group as="nav" className="flex space-x-8">
              {links.map((link) => {
                return (
                  <div key={link.href}>
                    <Link href={link.href}>{link.name}</Link>
                  </div>
                );
              })}
            </Popover.Group>
          </div>

          <div className="shrink-0 pb-1">
            <Link href="/">
              <img
                className="h-10 min-w-full hover:cursor-pointer sm:h-10"
                src="/assets/images/logo.png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="mx-6">
          <div className="mx-auto h-1  items-center justify-center  bg-orange"></div>
        </div>
      </div>
      {/* MOBILE MENU */}

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 origin-top-right p-2 transition lg:hidden"
        >
          <div className="divide-y-2 divide-orange-50 rounded-lg bg-whiteLinen">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-whiteLinen p-2 text-orange-400 hover:bg-orange-100 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueCharcoal-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div>
                  <Link href="/" className="flex">
                    <img
                      className="h-10 w-auto hover:cursor-pointer sm:h-10"
                      src="/assets/images/logo.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {links.map((link) => {
                  return (
                    <div key={link.href}>
                      <Link href={link.href}>{link.name}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavBar;
