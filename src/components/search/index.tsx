import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
);

function Hit({ hit }: HitProps) {
  return (
    <>
      <span className="Hit-price">{hit.title}</span>
      <br />
      <span className="Hit-price">${hit.price}</span>
      <hr />
    </>
  );
}

export default function Search() {
  console.log(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY, searchClient);
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="commercial1">
        <SearchBox />
      </InstantSearch>
    </>
  );
}
