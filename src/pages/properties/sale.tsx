import Link from 'next/link';

import { getAvailableSaleProperties } from '@/api/properties';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { IProperty } from '@/types';

import makePropertyPath from '../../utils/makePropertyPath';

const PropertySale = ({
  availabeSaleProperties,
}: {
  availabeSaleProperties: { items: IProperty[] };
}) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1>For sale properties</h1>
      <br />
      {availabeSaleProperties.items.map((item: IProperty) => {
        return (
          <div key={item.id}>
            <Link href={makePropertyPath(item)}>{item.heading}</Link>
            <hr />
          </div>
        );
      })}
      <br />
    </Main>
  );
};

export default PropertySale;

export async function getStaticProps() {
  const availabeSaleProperties = await getAvailableSaleProperties();

  return {
    props: {
      availabeSaleProperties,
    },
    // ISR, will refetch every 15 mins.
    revalidate: 60 * 15,
  };
}
