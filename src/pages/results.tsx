import algoliasearch from 'algoliasearch/lite';
import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import { Configure, InstantSearch, InstantSearchSSRProvider } from 'react-instantsearch-hooks-web';

import Header from '@/components/Header';
import ActiveFilters from '@/components/search/ActiveFilters';
import FiltersHolder from '@/components/search/FiltersHolder';
import Hits from '@/components/search/hit';
import Input from '@/components/search/input';
import Range from '@/components/search/Range';
import RefinementList from '@/components/search/refinementList';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

type ResultsPageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

export default function ResultsPage({ serverState }: ResultsPageProps) {
  return (
    <Main meta={<Meta title='Commercial 1 GC' description='Commercial 1 GC' />}>
     
      <Header tag='' title='Sold and leased' subtitle='check out some of our results' />
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName='commercial1'>
          <Configure filters='type:sold OR type:leased' />
          
          <div className="border-[1px] border-gray-300 rounded-md">
          <Input />
          <FiltersHolder>
            <Range attribute='price' label='Price ($)' />
            <Range attribute='floorArea' label='Floor Area (sqm)' />
            <RefinementList attribute='address.suburb' label='Suburb' />
          </FiltersHolder>
          <ActiveFilters />
          </div>
          <div className='p-3 pt-8' >
          <Hits />
          </div>
        </InstantSearch>
      </InstantSearchSSRProvider>
      
    </Main>
  );
}
