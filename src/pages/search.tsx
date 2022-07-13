import algoliasearch from 'algoliasearch/lite';
import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import { InstantSearch, InstantSearchSSRProvider } from 'react-instantsearch-hooks-web';

import ActiveFilters from '@/components/Search/ActiveFilters';
import FiltersHolder from '@/components/Search/FiltersHolder';
import Hits from '@/components/Search/hit';
import Input from '@/components/Search/input';
import Range from '@/components/Search/Range';
import RefinementList from '@/components/Search/refinementList';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Header from '@/components/Header';

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
    <Main meta={<Meta title='Commercial 1 GC' description='Commercial 1 GC' />}>
      <Header tag='' title='Search' subtitle='browse the best properties for sale' />
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName='commercial1'>
          <div className='border-[1px] border-gray-300 rounded-md shadow-md bg-white'>
            <Input />
            <FiltersHolder>
              <Range attribute='price' label='Price ($)' />
              <Range attribute='floorArea' label='Floor Area (sqm)' />
              <RefinementList attribute='type' label='Type' />
            </FiltersHolder>
            <ActiveFilters />
          </div>
          <div className='pt-16'>
            <Hits />
          </div>
        </InstantSearch>
      </InstantSearchSSRProvider>
    </Main>
  );
}
