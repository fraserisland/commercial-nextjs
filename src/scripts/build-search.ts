import { getAllProperties } from '../api/properties';
import type { IProperty, IPropertySearch } from '../types';
import makePropertyPath from '../utils/makePropertyPath';

const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch/lite');

function transformPostsToSearchObjects(properties: IProperty[]) {
  const transformed = properties.map((p: IProperty): IPropertySearch => {
    return {
      objectID: `${p.id}`,
      title: p.heading,
      excerpt: p.description,
      slug: makePropertyPath(p),
      date: p.inserted,
      image: p.photos?.[0]?.thumbnails?.thumb_1024 ?? '',
      displayPrice: p.displayPrice,
      price: p.searchPrice,
      state: p.address.state.name,
      suburb: p.address.suburb.name,
      modified: p.modified,
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
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    );
    const index = client.initIndex('commercial1');
    const algoliaResponse = await index.saveObjects(transformed);

    console.log(transformed);

    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        '\n'
      )}`
    );
  } catch (e) {
    console.error('Failed indexing!', e);
  }

  console.log("Schnitzel! Let's fetch some data!");
})();
