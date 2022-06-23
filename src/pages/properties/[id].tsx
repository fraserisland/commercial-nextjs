import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getAvailableSaleProperties } from './sale';

const Property = ({ property }: any) => {
  console.log(property);

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

export async function getSalePropertyByID({ id }: any) {
  const myHeaders = new Headers();
  // @TODO: MOVE ENV!!
  myHeaders.append('X-Api-Key', 'UIxhtpbAwu2C7ODbHllEXnRs49FyuNz4KMOt8Ch9');
  myHeaders.append(
    'Authorization',
    'Bearer sabblonocgwvaysnstujdijolciofiospxhpyzml'
  );

  try {
    const res = await fetch(
      `https://ap-southeast-2.api.vaultre.com.au/api/v1.3/properties/commercial/sale/${id}`,
      {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      }
    );

    const json = await res.json();

    return json;
  } catch (e) {
    console.error(e);
  }

  return '';
}

// https://nextjs.org/docs/basic-features/data-fetching
export async function getStaticProps({ params }: any) {
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
  const availabeSaleProperties = await getAvailableSaleProperties();

  if (!availabeSaleProperties?.items.length)
    throw new Error(`Failed fetching properties.`);

  const paths = availabeSaleProperties.items.map(
    (property: { id: string }) => ({
      params: { id: `${property.id}` },
    })
  );

  return { paths, fallback: false };
}

export default Property;
