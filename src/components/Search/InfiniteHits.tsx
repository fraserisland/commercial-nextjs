import React, { useEffect, useRef } from "react";
import { useInfiniteHits, useHits } from "react-instantsearch-hooks-web";
import Link from "next/link";
import Image from "next/image";
import Cta1 from "../Cta1";
import Cta2 from "../Cta2";
import Cta3 from "../Cta3";
import Cta4 from "../Cta4";



const Hit = ({ hit }: { hit: any }) => {
  return (
    <Link key={hit.slug} href={hit.slug}>
      <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl ">
        <div className="aspect-w-3 aspect-h-2 bg-gray-200 sm:aspect-none sm:h-52 overflow-hidden">
          <div className="h-full w-full object-cover object-center sm:h-full sm:w-full ">
            {hit.image ?
              <Image src={hit.image} alt={hit.title} layout="responsive" height="300" width="300" objectFit="cover" />
              :
              <Image src={"/assets/images/team.jpeg"} alt="placeholder image" layout="responsive" height="300" width="300" objectFit="cover" />}
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-2 p-4 ">
          <div className="  overflow-hidden h-36 ">
            <h3 className=" font-medium text-gray-900  overflow-hidden">{hit.title}</h3>

            <p className="cursor-pointer text-sm text-gray-500 whitespace-pre-wrap overflow-hidden overflow-ellipsis mt-2 ">{hit.excerpt}</p>

          </div>
          <div className="flex flex-1"></div>
          <div className="flex flex-col justify-end pt-1">
            <button className=" my-auto h-12 inline-flex items-center justify-center border rounded border-transparent bg-orange text-base  font-medium text-whiteLinen hover:cursor-pointer hover:bg-orange-50 sm:w-auto">
              Details
            </button>

          </div>
        </div>
      </div>
    </Link>
  );
};

export function InfiniteHits({ hitComponent: HitComponent = Hit, noPaginate = false, ...props }: { hitComponent?: any, noPaginate?: boolean }) {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const { hits: hits2 } = useHits(props)
  console.log(hits2)
  const sentinelRef = useRef(null);
  console.log(hits)
  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
    return
  }, [isLastPage, showMore]);

  const valReset = () => {
    val > 4 ? val = 1 : ""
  }

  let val = 1

  return (
    <div className="ais-InfiniteHits">
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
        {hits.map((hit, index) => {
          const isEighth = index % 8 === 0 && val === 1 && index != 0
          const isSixteenth = index % 8 === 0 && val === 2
          const isTwentyForth = index % 8 === 0 && val === 3
          const isThirtySecond = index % 8 === 0 && val === 4
          valReset()
          console.log(val)
          return (
            <React.Fragment key={hit.objectID}>
              {isEighth && val++ &&
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <Cta1 />
                </div>
              }
              {isSixteenth && val++ &&
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <Cta2 />
                </div>
              }
              {isTwentyForth && val++ &&
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <Cta3 />
                </div>
              }
              {isThirtySecond && val++ &&
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                  <Cta4 />
                </div>

              }
              <HitComponent key={hit.objectID} hit={hit} />
            </React.Fragment>
          )
        })}
      </div>
      {!noPaginate &&
        <div className="ais-InfiniteHits-sentinel" ref={sentinelRef} aria-hidden="true" />
      }
    </div>
  );
}