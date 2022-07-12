import algoliasearch from 'algoliasearch';
import {
  Configure,
  InstantSearch,
  InstantSearchSSRProvider,
} from 'react-instantsearch-hooks-web';

import Header from '@/components/Header';
import IndividualAgent from '@/components/IndividualAgent';
import Hits from '@/components/Search/hit';
import { AGENTS } from '@/constants';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { IAgent } from '@/types';

const findAgentBySlug = (slug: IAgent['slug']): IAgent | undefined => {
  const agent = AGENTS.find((a: IAgent) => {
    if (a.slug === slug) {
      return true;
    }
    return false;
  });
  return agent;
};

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ''
);

const Agent = ({ agent }: { agent: IAgent }) => {
  return (
    <Main
      meta={
        <Meta
          title="Steve Macgregor"
          description="Commercial 1 Gold Coast"
        />
      }
    >
       <div className='m-auto max-w-7xl px-6'>
      <IndividualAgent agent={agent} />
      <InstantSearchSSRProvider>
        <InstantSearch searchClient={client} indexName="commercial1">
          <Configure filters={`agents.id:${agent.id}`} />
          <Header
            tag=""
            title="Sold and Leased properties"
            subtitle={`Properties leased and sold by ${agent.name}`}
          />
          <Hits />
        </InstantSearch>
      </InstantSearchSSRProvider>
      </div>
    </Main>
  );
};

export async function getStaticProps({
  params,
}: {
  params: { agentSlug: IAgent['slug'] };
}) {
  return {
    props: {
      agent: findAgentBySlug(params.agentSlug),
    },
    // ISR, will refetch every 15 mins.
    revalidate: 60 * 15,
  };
}

export async function getStaticPaths() {
  const paths = AGENTS.map((agent: IAgent) => ({
    params: { agentSlug: agent.slug },
  }));

  return { paths, fallback: false };
}

export default Agent;
