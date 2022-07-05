import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useNumericMenu } from "react-instantsearch-hooks-web";

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
    <Popover key={attribute} className="relative inline-block px-4 text-left">
      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
        <span>{attribute}</span>
        <ChevronDownIcon
          className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
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
        <Popover.Panel className="absolute left-0 mt-2 origin-top-left rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <form className="space-y-4">
            <span>{attribute}</span>
            {items.map((item) => (
              <div key={item.label} className="flex items-center">
                <input
                  id={`filter-${item.value}`}
                  type="checkbox"
                  checked={item.isRefined}
                  onChange={() => refine(item.value)}
                  className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label
                  htmlFor={`filter-${attribute}-${item.value}`}
                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
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

export default NumericMenu;
