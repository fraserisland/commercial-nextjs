import { Configure, InstantSearch, InstantSearchSSRProvider, InstantSearchServerState } from 'react-instantsearch-hooks-web';

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

type ForSalePageProps = {
  serverState?: InstantSearchServerState;
  location: Location;
};

const title = 'For Sale'
const desc = 'Browse the best properties for sale'

export default function ForSalePage({ serverState, location }: ForSalePageProps) {

  return (
    <Main meta={<Meta title={`${title} - Commercial 1 GC`} description={desc} />}>

      <Header tag='' title={title} subtitle={desc} />
      <InstantSearchSSRProvider  {...serverState}>
        <InstantSearch
          routing={{
            stateMapping: simple(),
            router: history({
              getLocation() {
                if (typeof window === 'undefined') {
                  return location;
                }

                return window.location;
              },
            }),
          }}
          searchClient={client}
          indexName='commercial1'>
          <Configure filters='type:sale' />
          <div className="border-[1px] border-gray-300 rounded-md shadow-md bg-white">
            <Input />
            <FiltersHolder>
              <Range attribute='price' label='Price ($)' />
              <Range attribute='floorArea' label='Floor Area (sqm)' />
              <RefinementList attribute='address.suburb' label='Suburb' />
            </FiltersHolder>


            <ActiveFilters />
          </div>

          <div className="pt-16">
            <InfiniteHits />

          </div>
        </InstantSearch>
      </InstantSearchSSRProvider>

    </Main>
  );
}
