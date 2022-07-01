import kebabCase from "lodash.kebabcase";

import { getAllProperties, getSalePropertyByID } from "@/api/properties";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import type { IProperty } from "@/types";

const Property = ({ property }: { property: IProperty }) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      PROPERTY
      <h1>{property.heading}</h1>
      <ul>
        <li>Address: {property.displayAddress}</li>
        <li>Description: {property.description}</li>
      </ul>
    </Main>
  );
};

interface IParams {
  params: {
    id: string;
    heading: string;
  };
}

export async function getStaticProps({ params }: IParams) {
  const property = await getSalePropertyByID({ id: params.id });

  return {
    props: {
      property,
    },
    // ISR, will refetch every 15 mins.
    revalidate: 60 * 15,
  };
}

export async function getStaticPaths() {
  const availabeSaleProperties = await getAllProperties();

  if (!availabeSaleProperties?.length) throw new Error(`Failed fetching properties.`);

  const paths = availabeSaleProperties.map(
    (property: IProperty): IParams => ({
      params: { id: `${property.id}`, heading: kebabCase(property.heading) },
    })
  );

  return { paths, fallback: false };
}

export default Property;
