import algoliasearch from 'algoliasearch/lite';
import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import { Configure, InstantSearch, InstantSearchSSRProvider } from 'react-instantsearch-hooks-web';

import Header from '@/components/Header';
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

type ResultsPageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

const title = 'Sold and Leased'
const desc = 'Check out some of our results'

export default function ResultsPage({ serverState }: ResultsPageProps) {
  return (
    <Main meta={<Meta title={title} description={desc} />}>
     
      <Header tag='' title={title} subtitle= {desc} />
      
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName='commercial1'>
          
          
          <div className="border-[1px] border-gray-300 rounded-md shadow-md bg-white">
          <Configure filters='type:sold OR type:leased' />
          <Input />
          <FiltersHolder>
            <Range attribute='price' label='Price ($)' />
            <Range attribute='floorArea' label='Floor Area (sqm)' />
            <RefinementList attribute='address.suburb' label='Suburb' />
          </FiltersHolder>
          <ActiveFilters />
          </div>
          <div className='pt-16' >
          <Hits />
          </div>
        </InstantSearch>
      </InstantSearchSSRProvider>
      
    </Main>
  );
}
