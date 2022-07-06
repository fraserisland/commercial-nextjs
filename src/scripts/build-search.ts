import { getAllProperties } from '../api/properties';
import type { IPropertyNormalised, IPropertySearch } from '../types';
import makePropertyPath from '../utils/makePropertyPath';

const crypto = require('crypto');
const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch/lite');

function transformPostsToSearchObjects(properties: IPropertyNormalised[]) {
  const transformed = properties.map((p: IPropertyNormalised): IPropertySearch => {
    return {
      objectID: crypto.createHash('sha256').update(`${p.id}`).digest('hex'),
      title: p.heading,
      slug: makePropertyPath(p),
      date: p.inserted,
      image: p.photos?.[0]?.thumbnails?.thumb_1024 ?? '',
      displayPrice: p.displayPrice,
      price: p.searchPrice,
      excerpt: p.description,
      address: {
        state: p.address.state.name,
        suburb: p.address.suburb.name,
      },
      agents: p.contactStaff.map((c) => ({ id: c.id, firstName: c.firstName, staffTypeId: c.staffTypeId })),
      modified: p.modified,
      floorArea: p.floorArea.value,
      type: p.type,
    };
  });

  return transformed;
}

(async function () {
  // initialize environment variables
  dotenv.config();
  try {
    const properties = await getAllProperties();
    const transformed = transformPostsToSearchObjects(properties);

    // initialize the client with your environment variables
    const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_KEY);
    const index = client.initIndex('commercial1');
    const algoliaResponse = await index.saveObjects(transformed);

    console.log(transformed);

    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join('\n')}`
    );
  } catch (e) {
    console.error('Failed indexing!', e);
  }

  console.log("Schnitzel! Let's fetch some data!");
})();
