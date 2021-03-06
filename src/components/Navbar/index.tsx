import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";

const links = [
  { href: "/sale", name: "For Sale" },
  { href: "/lease", name: "Lease" },
  { href: "/results", name: "Results" },
  { href: "/property-management", name: "Property Management" },
  { href: "/about", name: "About" },
  { href: "/appraisals", name: "Appraisals" },
  { href: "/contact", name: "Contact" },
];

const NavBar = () => {
  return (
    <Popover className="relative bg-white shadow-md">
      <div className="mx-auto max-w-7xl bg-white">
        <div className="flex items-center justify-between px-6 pt-6 sm:px-6 lg:space-x-10 lg:pl-0 ">
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-orange-400 hover:bg-orange-100 hover:text-orange-500 ">
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

          <div className="shrink-0 pb-4">
            <Link href="/">
              <div className="h-10 min-w-full hover:cursor-pointer sm:h-10">
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  layout="fixed"
                  height="40%"
                  width="165%"
                  className="contain"
                />
              </div>
            </Link>
          </div>
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
          <div className="divide-y-2 divide-orange-50 rounded-lg bg-white">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-orange-400 hover:bg-orange-100 hover:text-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div>
                  <Link href="/" className="flex">
                    <Image
                      src="/assets/images/logo.png"
                      alt="logo"
                      layout="fixed"
                      height="40%"
                      width="165%"
                      className="contain"
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

      <div className="mx-auto h-[1px]  items-center justify-center  bg-orange shadow-md lg:mb-12 mb-9"></div>
    </Popover>
  );
};

export default NavBar;
