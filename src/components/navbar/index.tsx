import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Fragment } from 'react';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

const NavBar = () => {
  return (
    <Popover className="relative bg-white">
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-center md:space-x-10">
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden max-w-[1280px] md:flex md:flex-1 md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <div>
              <Link href="/forSale">For Sale</Link>
            </div>

            <div>
              <Link href="/lease">Lease</Link>
            </div>

            <div>
              <Link href="/results">Results</Link>
            </div>

            <div>
              <Link href="/propertyManagement">Property Management</Link>
            </div>

            <div>
              <Link href="/about">About</Link>
            </div>

            <div>
              <Link href="/appraisals">Appraisals</Link>
            </div>

            <div>
              <Link href="/contact">Contact</Link>
            </div>
          </Popover.Group>
        </div>

        <div>
          <Link href="/" className="flex">
            <img
              className="h-8 w-auto hover:cursor-pointer sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </Link>
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
          className="absolute inset-x-0 top-0 origin-top-right p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div>
                  <Link href="/" className="flex">
                    <img
                      className="h-8 w-auto hover:cursor-pointer sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Link href="/forSale">For Sale</Link>
                </div>

                <div>
                  <Link href="/lease">Lease</Link>
                </div>

                <div>
                  <Link href="/results">Results</Link>
                </div>

                <div>
                  <Link href="/propertyManagement">Property Management</Link>
                </div>

                <div>
                  <Link href="/about">About</Link>
                </div>

                <div>
                  <Link href="/appraisals">Appraisals</Link>
                </div>

                <div>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavBar;
