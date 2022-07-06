import algoliasearch from "algoliasearch/lite";
import { InstantSearchServerState } from "react-instantsearch-hooks-web";
import { InstantSearch, InstantSearchSSRProvider, Configure } from "react-instantsearch-hooks-web";

import Hits from "@/components/search/hit";
import Input from "@/components/search/input";
import FiltersHolder from "@/components/search/FiltersHolder";
import ActiveFilters from "@/components/search/ActiveFilters";
import Range from "@/components/search/Range";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Header from "@/components/Header";

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
);

type ResultsPageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

export default function ResultsPage({ serverState }: ResultsPageProps) {
  return (
    <Main meta={<Meta title="Commercial 1 GC" description="Commercial 1 GC" />}>
      <Header tag="results" title="Sold and leased" subtitle="check out some of our results" />

      <InstantSearchSSRProvider {...serverState}>
        <InstantSearch searchClient={client} indexName="commercial1">
          <Configure filters="type:sold OR type:leased" />
          <Input />
          <FiltersHolder>
            <Range attribute="price" label="Price ($)" />
            <Range attribute="floorArea" label="Floor Area (sqm)" />
          </FiltersHolder>
          <ActiveFilters />
          <Hits />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </Main>
  );
}
