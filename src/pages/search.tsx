import algoliasearch from "algoliasearch/lite";

import { InstantSearch, InstantSearchServerState, InstantSearchSSRProvider } from "react-instantsearch-hooks-web";

import { Main } from "@/templates/Main";
import Hits from "@/components/search/hit";
import Input from "@/components/search/input";

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
);

type HomePageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

export default function HomePage({ serverState }: HomePageProps) {
  return (
    <Main>
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName="commercial1">
          <Input />
          <Hits />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </Main>
  );
}
