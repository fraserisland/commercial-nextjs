import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import { Configure, InstantSearch, InstantSearchSSRProvider } from 'react-instantsearch-hooks-web';

import Header from '@/components/Header';
import ActiveFilters from '@/components/Search/ActiveFilters';
import FiltersHolder from '@/components/Search/FiltersHolder';
import { InfiniteHits } from '@/components/Search/InfiniteHits';
import Input from '@/components/Search/input';
import Range from '@/components/Search/Range';
import RefinementList from '@/components/Search/refinementList';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import client from '@/utils/algoliaClient'
import { simple } from 'instantsearch.js/es/lib/stateMappings';
import { history } from 'instantsearch.js/es/lib/routers';

type ResultsPageProps = {
  serverState?: InstantSearchServerState;
  location: Location;
};

const title = 'Sold and Leased'
const desc = 'Check out some of our results'

export default function ResultsPage({ serverState, location }: ResultsPageProps) {
  return (
    <Main meta={<Meta title={title} description={desc} />}>
     
      <Header tag='' title={title} subtitle= {desc} />
      
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch routing={{
          stateMapping: simple(),
          router: history({
            getLocation() {
              if (typeof window === 'undefined') {
                return location;
              }

              return window.location;
            },
          }),
        }}   searchClient={client} indexName='commercial1'>
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
          <InfiniteHits />
          </div>
        </InstantSearch>
      </InstantSearchSSRProvider>
      
    </Main>
  );
}
