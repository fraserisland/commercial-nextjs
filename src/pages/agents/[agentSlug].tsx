import IndividualAgent from '@/components/individualAgent';
import { AGENTS } from '@/constants';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { IAgent } from '@/types';
import Header from '@/components/Header';

import { Configure, InstantSearch, InstantSearchSSRProvider } from 'react-instantsearch-hooks-web';
import Hits from '@/components/search/hit';
import algoliasearch from 'algoliasearch';

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
          title='Next.js Boilerplate Presentation'
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      <IndividualAgent agent={agent} />
      <InstantSearchSSRProvider>
        <InstantSearch searchClient={client} indexName='commercial1'>
          <Configure filters={`agents.id:${agent.id}`} />
          <Header
            tag='Results'
            title='Sold and Leased properties'
            subtitle={`Properties leased and sold by ${agent.name}`}
          />
          <Hits />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </Main>
  );
};

export async function getStaticProps({ params }: { params: { agentSlug: IAgent['slug'] } }) {
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
