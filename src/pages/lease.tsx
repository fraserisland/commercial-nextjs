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

type ForSalePageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

export default function ForSalePage({ serverState }: ForSalePageProps) {
  return (
    <Main meta={<Meta title='Available Properties' description='Lease with Commercial 1 GC' />}>
     
      <Header tag='' title='For Lease' subtitle='browse the best properties for lease' />

      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName='commercial1'>
          <Configure filters='type:lease' />
          <div className="border-[1px] border-gray-300 rounded-md shadow-md bg-white">
          <Input />
          <FiltersHolder>
            <Range attribute='price' label='Price ($)' />
            <Range attribute='floorArea' label='Floor Area (sqm)' />
            <RefinementList attribute='address.suburb' label='Suburb' />
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
