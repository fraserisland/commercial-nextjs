import algoliasearch from 'algoliasearch/lite';
import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import {
  InstantSearch,
  InstantSearchSSRProvider,
} from 'react-instantsearch-hooks-web';

import ActiveFilters from '@/components/Search/ActiveFilters';
import FiltersHolder from '@/components/Search/FiltersHolder';
import Hits from '@/components/Search/hit';
import Input from '@/components/Search/input';
import Range from '@/components/Search/Range';
import RefinementList from '@/components/Search/refinementList';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

type HomePageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

export default function HomePage({ serverState }: HomePageProps) {
  return (
    <Main meta={<Meta title="Property Search" description="Commercial 1 GC" />}>
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName="commercial1">
          <Input />
          <FiltersHolder>
            <Range attribute="price" label="Price ($)" />
            <Range attribute="floorArea" label="Floor Area (sqm)" />
            <RefinementList attribute="type" label="Type" />
          </FiltersHolder>
          <ActiveFilters />
          <Hits />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </Main>
  );
}
