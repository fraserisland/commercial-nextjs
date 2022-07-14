import kebabCase from "lodash.kebabcase";

import { getAllProperties, getSalePropertyByID, getLeasePropertyByID } from "@/api/properties";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

import type { IProperty } from "@/types";

const breadcrumbs = [
  { id: 1, name: "Properties", href: "#" },
  { id: 2, name: "Sale", href: "#" },
];

const highlights = [
  "Hand cut and sewn locally",
  "Dyed with our proprietary colors",
  "Pre-washed & pre-shrunk",
  "Ultra-soft 100% cotton",
];

const Property = ({ property }: { property: IProperty }) => {
  console.log(property);
  return (
    <Main
      meta={
        <Meta
          title={`${property.heading} - Commercial 1 GC`}
          description={`${property.displayPrice} - ${property.description}`}
          image={property.photos?.[0]?.thumbnails.thumb_1024}
        />
      }
    >
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">{property.heading}</li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={property.photos?.[0]?.thumbnails.thumb_1024}
                alt={property.heading}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={property.photos?.[1]?.thumbnails.thumb_1024}
                  alt={property.heading}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={property.photos?.[2]?.thumbnails.thumb_1024}
                  alt={property.heading}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={property.photos?.[3]?.thumbnails.thumb_1024}
                alt={property.heading}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{property.heading}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{property.displayPrice}</p>

              <form className="mt-10">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 py-3 px-8 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Enquire now
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p
                    className="text-base text-gray-900 whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: property.description }}
                  />
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{property.displayAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

interface IParams {
  params: {
    id: string;
    heading: string;
    type: "sale" | "lease";
  };
}

export async function getStaticProps({ params }: IParams) {
  let property;
  console.log("SOLD PARAMS ==", params);
  if (params.type === "sale") {
    property = await getSalePropertyByID({ id: params.id });
  } else {
    property = await getLeasePropertyByID({ id: params.id });
  }

  return {
    props: {
      property,
    },
    // ISR, will refetch every 15 mins.
    revalidate: 60 * 15,
  };
}

export async function getStaticPaths() {
  const allProperties = await getAllProperties();

  if (!allProperties?.length) throw new Error(`Failed fetching properties.`);

  const paths = allProperties.map(
    (property: IProperty): IParams => ({
      params: { id: `${property.id}`, heading: kebabCase(property.heading), type: property.commercialListingType },
    })
  );

  return { paths, fallback: false };
}

export default Property;
