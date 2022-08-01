import kebabCase from "lodash.kebabcase";

import {
  getAllProperties,
  getSalePropertyByID,
  getLeasePropertyByID,
} from "@/api/properties";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import type { IProperty } from "@/types";
import Link from "next/link";
import PropSaleForm from "@/components/PropSaleForm";
import Cta3 from "@/components/Cta3";
import Carousel from "@/components/Carousel"

const breadcrumbs = [
  { id: 1, name: "Properties", href: "#" },
  { id: 2, name: "Sale", href: "#" },
];


const Property = ({ property }: { property: IProperty }) => {

  console.log(property)

  type LowAreaVarients = "landArea" | "retailArea" | "otherArea" | "floorArea" | "mezzanineArea" | "warehouseArea" | "officeArea" ;


  let areas = [
    "Land",
    "Retail",
    "Other",
    "Floor",
    "Mezzanine",
    "Warehouse",
    "Office",
  ];

  const getAreas = () => {
    areas.map((area) => {
      let propertyAreaKey = `${area.toLowerCase()}Area` as LowAreaVarients;
      return property[propertyAreaKey]?.value
        ? details.push(
            `${area} area: ${property[propertyAreaKey].value} \u33A1`
          )
        : "";
    });
  };

  let details = [property.displayAddress];

  getAreas();


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
      <div className="bg-white rounded-lg shadow-xl">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
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
              <li className="text-sm truncate ">{property.heading}</li>
            </ol>
          </nav>
<div className="mt-12 pb-2">
          <Carousel propPhotos={property.photos}/>
          </div>

          

          {/* Product info */}
          <div className="mx-auto max-w-4xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {property.heading}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Property Price</h2>
              <p className="text-3xl text-gray-900">{property.displayPrice}</p>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {details.map((detail, index) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <form className="mt-10">
              <Link href="#form" className="flex">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 py-3 px-8 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Enquire now
                </button>
                </Link>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900 whitespace-pre-wrap">
                    {property.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <a id="form"><PropSaleForm id={property.id || 0}/></a>
      <Cta3/>
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
  // console.log("SOLD PARAMS ==", params);
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
      params: {
        id: `${property.id}`,
        heading: kebabCase(property.heading),
        type: property.commercialListingType,
      },
    })
  );

  return { paths, fallback: false };
}

export default Property;
