import { Configure, InstantSearch, InstantSearchSSRProvider, InstantSearchServerState, Hits } from 'react-instantsearch-hooks-web';

import Cta1 from '@/components/Cta1';
import FeaturedProperties from '@/components/FeaturedProperties';
import SearchInputUrlBuilder from "@/components/Search/SearchInputUrlBuilder"
import HeaderHomePage from '@/components/HeaderHomePage';
import Blog from '@/components/Blog';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React from "react";

import client from '@/utils/algoliaClient'
import { simple } from 'instantsearch.js/es/lib/stateMappings';
import { history } from 'instantsearch.js/es/lib/routers';

const Index = ({ serverState }) => (
  <Main meta={<Meta title='Commercial 1 GC' image='assets/images/team.jpeg' />}>

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
        <SearchInputUrlBuilder />
      </InstantSearch>
    </InstantSearchSSRProvider>


    <FeaturedProperties />

    <Cta1 />

    <Blog />

  </Main>
)
  ;

export default Index;
