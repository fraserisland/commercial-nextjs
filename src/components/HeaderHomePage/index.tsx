import Link from "next/link";
import Image from "next/image";

export default function Example() {
  return (
    <div>
      <div className="max-w-7xl mx-auto pb-14 ">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/banner1.jpg"
              alt="logo"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">
                  The #1 address for commercial property
                </span>
              </h2>
              {/* <p className='mt-3 text-xl text-white'>Search commercial property's</p> */}
              <Link href="/search">
                <span className="mt-4 inline-flex w-full items-center justify-center border rounded border-transparent bg-orange px-5 py-3 text-base  font-medium text-whiteLinen hover:cursor-pointer hover:bg-orange-50 sm:w-auto">
                  Find properties now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
