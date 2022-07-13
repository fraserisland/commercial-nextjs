import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { useRefinementList } from 'react-instantsearch-hooks-web';

import capitalise from '@/utils/capitalise';

const RefinementList = ({
  attribute,
  label,
}: {
  attribute: string;
  label: string;
}) => {
  const { items, refine, canRefine } = useRefinementList({ attribute });

  if (!canRefine) return null;
  return (
    <Popover key={attribute} className="relative inline-block px-4 text-left">
      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-500 group-hover:text-gray-600">
        <span>{label}</span>
        <ChevronDownIcon
          className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-500 group-hover:text-gray-600"
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
                  className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label
                  htmlFor={`filter-${attribute}-${item.value}`}
                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                >
                  {capitalise(item.label)}{' '}
                  <span className="text-gray-500">({item.count})</span>
                </label>
              </div>
            ))}
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default RefinementList;
