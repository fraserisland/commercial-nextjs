import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  useRefinementList,
  useCurrentRefinements,
  useNumericMenu,
  useClearRefinements,
  useConnector,
} from "react-instantsearch-hooks-web";
import connectRange from "instantsearch.js/es/connectors/range/connectRange";

export function useRangeSlider(props) {
  return useConnector(connectRange, props);
}

const Range = ({ attribute = "price", label = "Price ($)" }) => {
  const { refine } = useRangeSlider({ attribute });

  const [inputs, setInputs] = useState({
    start: undefined,
    end: undefined,
  });

  useEffect(() => {
    refine([inputs.start, inputs.end]);
  }, [inputs.start, inputs.end]);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Popover key={attribute} className="px-4 relative inline-block text-left">
      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
        <span>{label}</span>
        <ChevronDownIcon
          className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="origin-top-left absolute left-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <form className="space-y-4">
            <span>{label}</span>
            <>
              <input name="start" placeholder="No Min" type="number" value={inputs.start} onChange={handleChange} />
              <input name="end" placeholder="No Max" type="number" value={inputs.end} onChange={handleChange} />
            </>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const RefinementList = ({ attribute, label }: { attribute: string }) => {
  const { items, refine } = useRefinementList({ attribute });

  return (
    <Popover key={attribute} className="px-4 relative inline-block text-left">
      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
        <span>{label}</span>
        <ChevronDownIcon
          className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="origin-top-left absolute left-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <form className="space-y-4">
            <span>{label}</span>
            {items.map((item) => (
              <div key={item.value} className="flex items-center">
                <input
                  id={`filter-${attribute}-${item.value}`}
                  name={item.value}
                  defaultValue={item.value}
                  type="checkbox"
                  value={item.value}
                  checked={item.isRefined}
                  onChange={() => refine(item.value)}
                  className="h-4 w-4 border-gray-300 rounded text-orange-600 focus:ring-orange-500"
                />
                <label
                  htmlFor={`filter-${attribute}-${item.value}`}
                  className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const ActiveFilters = () => {
  const { items, refine } = useCurrentRefinements();
  const { refine: clearRefinements, canRefine } = useClearRefinements({
    includedAttributes: ["price", "floorArea", "type"],
  });

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 py-1">
          APPLIED FILTERS
          <span className="sr-only">, active</span>
        </h3>

        <div aria-hidden="true" className="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4" />

        <div className="mt-2 sm:mt-0 sm:ml-4">
          <div className="-m-1 flex flex-wrap items-center">
            {items.map((item) => (
              <>
                {item.refinements.map((itemRefinement) => {
                  return (
                    <span
                      key={item.attribute}
                      className="m-1 inline-flex rounded-full border border-gray-200 items-center pl-3 pr-2 text-sm font-medium bg-white text-gray-900"
                    >
                      <span>
                        {item.attribute} {itemRefinement.label}
                      </span>
                      <button
                        type="button"
                        className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                        onClick={() => {
                          refine(itemRefinement);
                        }}
                      >
                        <span className="sr-only">Remove filter for {item.label}</span>
                        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                        </svg>
                      </button>
                    </span>
                  );
                })}
              </>
            ))}
          </div>
        </div>
        {canRefine && (
          <button
            style={{ marginLeft: "auto" }}
            className="text-xs font-semibold tracking-wide py-1"
            onClick={clearRefinements}
          >
            clear all
          </button>
        )}
      </div>
    </div>
  );
};

export default function Example({
  filters = [{ attribute: "type", label: "Type" }],
  ranges = [
    { attribute: "price", label: "Price ($)" },
    { attribute: "floorArea", label: "Floor Area (sqm)" },
  ],
}: {
  filters: { label: string; attribute: string }[];
  ranges: { label: string; attribute: string }[];
}) {
  return (
    <div className="pt-4">
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>

        <div className="relative z-10 border-b border-gray-200 pb-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <div className="block">
              <div className="flow-root">
                <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                  {filters.map((filter) => (
                    <RefinementList attribute={filter.attribute} label={filter.label} />
                  ))}
                  {ranges.map((range) => (
                    <Range attribute={range.attribute} label={range.label} />
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>

        <ActiveFilters />
      </section>
    </div>
  );
}

const NumericMenu = ({
  attribute = "price",
  filterItems = [
    { label: "All" },
    { label: "Less than $50k", end: 50000 },
    { label: "Between $50k - 100k", start: 50000, end: 100000 },
    { label: "Between $100k - 400k", start: 100000, end: 400000 },
    { label: "Between $50k - $1 million", start: 40000, end: 1000000 },
    { label: "More than $1 million", start: 1000 },
  ],
}) => {
  const { refine, items } = useNumericMenu({
    attribute,
    items: filterItems,
  });

  return (
    <Popover key={attribute} className="px-4 relative inline-block text-left">
      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
        <span>{attribute}</span>
        <ChevronDownIcon
          className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="origin-top-left absolute left-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <form className="space-y-4">
            <span>{attribute}</span>
            {items.map((item) => (
              <div key={item.label} className="flex items-center">
                <input
                  id={`filter-${item.value}`}
                  type="checkbox"
                  checked={item.isRefined}
                  onChange={() => refine(item.value)}
                  className="h-4 w-4 border-gray-300 rounded text-orange-600 focus:ring-orange-500"
                />
                <label
                  htmlFor={`filter-${attribute}-${item.value}`}
                  className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
