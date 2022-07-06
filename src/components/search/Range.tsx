import React, { useEffect, useState } from "react";

import { useRange, UseRangeProps } from "react-instantsearch-hooks";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export type RangeProps = React.ComponentProps<"div"> & UseRangeProps;

// if the default value is undefined, React considers the component uncontrolled initially, which we don't want 0 or NaN as the default value
const unsetNumberInputValue = "" as unknown as number;

export function RangeInput(props: RangeProps) {
  const {
    range: { min, max },
    start: [minValue, maxValue],
    canRefine,
    refine,
  } = useRange(props);

  const values = {
    min: minValue !== -Infinity && minValue !== min ? minValue : unsetNumberInputValue,
    max: maxValue !== Infinity && maxValue !== max ? maxValue : unsetNumberInputValue,
  };

  const [{ from, to }, setRange] = useState({
    from: values.min,
    to: values.max,
  });

  useEffect(() => {
    setRange({ from: values.min, to: values.max });
  }, [values.min, values.max]);

  console.log({ from });
  return (
    <Popover key={props.attribute} className="relative inline-block px-4 text-left">
      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
        <span>{props.label}</span>
        <ChevronDownIcon
          className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="absolute left-0 mt-2 origin-top-left rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none w-96">
          <form
            className="flex items-center "
            onSubmit={(event) => {
              event.preventDefault();
              refine([from, to]);
            }}
          >
            <input
              className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
              type="number"
              min={min}
              max={max}
              value={from}
              placeholder={"min"}
              disabled={!canRefine}
              onChange={(event) => {
                setRange({ from: event.currentTarget.value, to });
              }}
            />
            <span className="mx-2"> - </span>
            <input
              className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
              type="number"
              min={min}
              max={max}
              value={to}
              placeholder={"max"}
              disabled={!canRefine}
              onChange={(event) => setRange({ from, to: event.currentTarget.value })}
            />
            <button
              className="inline-flex items-center px-3 py-2.5 border border-transparent text-xs font-medium rounded text-orange-700 bg-orange-100 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ml-2"
              type="submit"
            >
              Apply
            </button>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default RangeInput;
