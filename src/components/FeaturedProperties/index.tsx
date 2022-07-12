import algoliasearch from 'algoliasearch/lite';
import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import { Configure, InstantSearch, InstantSearchSSRProvider } from 'react-instantsearch-hooks-web';

import Header from '@/components/Header';
import Hits from '@/components/Search/hit';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

type ForSalePageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

export default function FeatureProperties({ serverState }: ForSalePageProps) {
  return (
    <>
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName='commercial1'>
          <Configure hitsPerPage={4} filters='type:sale OR type:lease' />
          <Header tag='' title='Featured Properties' subtitle='' />
          <Hits />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </>
  );
}
