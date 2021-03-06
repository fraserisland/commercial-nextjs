import { useSearchBox } from 'react-instantsearch-hooks-web';

export default function Example() {
  const { refine } = useSearchBox();

  return (
    <>
      <div className="flex-column relative mx-auto mt-1 max-w-7xl items-center px-6 pt-4">
        <div>
          <input
            type="text"
            name="search"
            onChange={(e) => {
              refine(e.target.value);
            }}
            placeholder="Search for suburb, state, or keywords..."
            id="search"
            className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
          />
        </div>
      </div>
    </>
  );
}
