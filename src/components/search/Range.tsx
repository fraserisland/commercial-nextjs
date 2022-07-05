import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import connectRange from "instantsearch.js/es/connectors/range/connectRange";
import { Fragment, useEffect, useState } from "react";
import { useConnector } from "react-instantsearch-hooks-web";

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
    <Popover key={attribute} className="relative inline-block px-4 text-left">
      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
        <span>{label}</span>
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

export default Range;
