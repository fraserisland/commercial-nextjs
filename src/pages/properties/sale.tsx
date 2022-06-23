import kebabCase from 'lodash.kebabcase';
import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const PropertySale = ({ availabeSaleProperties }: any) => {
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
      {availabeSaleProperties.items.map((item: any) => {
        return (
          <div key={item.id}>
            <Link href={`/properties/${kebabCase(item.id)}`}>
              {item.heading}
            </Link>
            <hr />
          </div>
        );
      })}
      <br />
    </Main>
  );
};

export default PropertySale;

export async function getAvailableSaleProperties() {
  const myHeaders = new Headers();
  // @TODO: MOVE ENV!!
  myHeaders.append('X-Api-Key', 'UIxhtpbAwu2C7ODbHllEXnRs49FyuNz4KMOt8Ch9');
  myHeaders.append(
    'Authorization',
    'Bearer sabblonocgwvaysnstujdijolciofiospxhpyzml'
  );

  const res = await fetch(
    'https://ap-southeast-2.api.vaultre.com.au/api/v1.3/properties/commercial/sale/available',
    {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    }
  );

  const json = await res.json();
  return json;
}

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
