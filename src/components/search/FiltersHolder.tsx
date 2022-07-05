import React from "react";
import { Popover } from "@headlessui/react";

const FiltersHolder = ({ children }) => {
  return (
    <div className="pt-4">
      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>

        <div className="relative z-10 border-b border-gray-200 pb-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="block">
              <div className="flow-root">
                <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">{children}</Popover.Group>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiltersHolder;
