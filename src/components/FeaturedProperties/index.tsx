import algoliasearch from 'algoliasearch/lite';
import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import { Configure, InstantSearch, InstantSearchSSRProvider } from 'react-instantsearch-hooks-web';
import { InfiniteHits } from '@/components/Search/InfiniteHits';

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
          <p className=' text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl items-end pb-4'>
            Featured Properties:
          </p> 
         
          <InfiniteHits noPaginate={true} />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </>
  );
}
