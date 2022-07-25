// import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import Link from "next/link";
import { useHits } from "react-instantsearch-hooks-web";
import Cta1 from "../Cta1";
import Cta2 from "../Cta2";
import Image from "next/image";

export default function Example() {
  const { hits } = useHits();

  return (
    <div className="">
      <h2 className="sr-only">Hits</h2>

      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
        {hits.map((hit: any, index) => (
          <>
            {index % 8 === 0 && index != 0 && index === 8 ? (
              <>
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <Cta1 />
                </div>
              </>
            ) : (
              ""
            )}
            {index % 8 === 0 && index != 0 && index === 16 ? (
              <>
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <Cta2 />
                </div>
              </>
            ) : (
              ""
            )}

            <Link key={hit.slug} href={hit.slug}>
              <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                <div className="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-52 overflow-hidden">
                  <div className="h-full w-full object-cover  sm:h-full sm:w-full ">
                    <Image
                      src={hit.image}
                      alt={hit.title}
                      layout="responsive"
                      height="300"
                      width="300"
                      className=""
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {hit.title}
                  </h3>

                  <p className="cursor-pointer text-sm text-gray-500 whitespace-pre-wrap">
                    {hit.excerpt.substring(0, 100)}
                  </p>

                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{hit.state}</p>
                    <p className="text-base font-medium text-gray-900">
                      ${hit.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
