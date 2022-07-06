import algoliasearch from 'algoliasearch/lite';
import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import {
  Configure,
  InstantSearch,
  InstantSearchSSRProvider,
} from 'react-instantsearch-hooks-web';

import Header from '@/components/Header';
import ActiveFilters from '@/components/search/ActiveFilters';
import FiltersHolder from '@/components/search/FiltersHolder';
import Hits from '@/components/search/hit';
import Input from '@/components/search/input';
import Range from '@/components/search/Range';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

type ForSalePageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

export default function ForSalePage({ serverState }: ForSalePageProps) {
  return (
    <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
      <Header
        tag="for sale"
        title="For Sale"
        subtitle="browse the best properties for sale"
      />
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName="commercial1">
          <Configure filters="type:sale" />
          <Input />
          <FiltersHolder>
            <Range attribute="price" label="Price ($)" />
            <Range attribute="floorArea" label="Floor Area (sqm)" />
            {/* <RefinementList attribute="type" label="Type" /> */}
          </FiltersHolder>
          <ActiveFilters />
          <Hits />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </Main>
  );
}
