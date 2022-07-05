import algoliasearch from 'algoliasearch/lite';
import type { InstantSearchServerState } from 'react-instantsearch-hooks-web';
import {
  InstantSearch,
  InstantSearchSSRProvider,
} from 'react-instantsearch-hooks-web';

import Hits from '@/components/search/hit';
import Input from '@/components/search/input';
import RefinementList from '@/components/search/refinementList';
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
    <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName="commercial1">
          <Input />
          <RefinementList />
          <Hits />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </Main>
  );
}
