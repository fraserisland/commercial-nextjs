import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import type { UseRangeProps } from 'react-instantsearch-hooks-web';
import { useRange } from 'react-instantsearch-hooks-web';

type Props = {
  label: string;
  attribute: 'price' | 'floorArea';
};

export type RangeProps = React.ComponentProps<'div'> & UseRangeProps & Props;

// if the default value is undefined, React considers the component uncontrolled initially, which we don't want 0 or NaN as the default value
const unsetNumberInputValue = '' as unknown as number;

const priceRange = [
  { id: 50000, name: '$50,000', value: 50000 },
  { id: 75000, name: '$75,000', value: 75000 },
  { id: 100000, name: '$100,000', value: 100000 },
  { id: 150000, name: '$150,000', value: 150000 },
  { id: 175000, name: '$175,000', value: 175000 },
  { id: 43, name: '$200,000', value: 200000 },
  { id: 4, name: '$250,000', value: 250000 },
  { id: 42, name: '$275,000', value: 275000 },
  { id: 5, name: '$300,000', value: 300000 },
  { id: 6, name: '$400,000', value: 400000 },
  { id: 7, name: '$500,000', value: 500000 },
  { id: 8, name: '$600,000', value: 600000 },
  { id: 9, name: '$700,000', value: 700000 },
  { id: 10, name: '$800,000', value: 800000 },
  { id: 11, name: '$900,000', value: 900000 },
  { id: 12, name: '$1,000,000', value: 1000000 },
  { id: 13, name: '$1,100,000', value: 1100000 },
  { id: 14, name: '$1,200,000', value: 1200000 },
  { id: 15, name: '$1,300,000', value: 1300000 },
  { id: 16, name: '$1,400,000', value: 1400000 },
  { id: 17, name: '$1,500,000', value: 1500000 },
];

const floorAreaRange = [
  { id: 121, name: '100 sqm', value: 100 },
  { id: 122, name: '200 sqm', value: 200 },
  { id: 123, name: '300 sqm', value: 300 },
  { id: 124, name: '400 sqm', value: 400 },
  { id: 125, name: '500 sqm', value: 500 },
  { id: 126, name: '600 sqm', value: 600 },
  { id: 127, name: '700 sqm', value: 700 },
  { id: 128, name: '1000 sqm', value: 1000 },
  { id: 129, name: '1500 sqm', value: 1500 },
  { id: 1210, name: '2000 sqm', value: 2000 },
  { id: 1211, name: '3000 sqm', value: 3000 },
];

const findSelecedByValue = (value: any, selection: any) => {
  return selection.find((r: any) => r.value === value);
};

const getItems = (attribute: 'price' | 'floorArea', { min, max }: { min: any; max: any }) => {
  let items;
  if (attribute === 'price') items = priceRange;
  if (attribute === 'floorArea') items = floorAreaRange;

  items = items?.filter((r) => r.value > min && r.value < max);

  return items;
};

export function RangeInput(props: RangeProps) {
  const {
    range: { min, max },
    start: [minValue, maxValue],
    refine,
  } = useRange(props);

  const values = {
    min: minValue !== -Infinity && minValue !== min ? minValue : unsetNumberInputValue,
    max: maxValue !== Infinity && maxValue !== max ? maxValue : unsetNumberInputValue,
  };

  const [{ from, to }, setRange] = useState<any>({
    from: values.min,
    to: values.max,
  });

  useEffect(() => {
    setRange({ from: values.min, to: values.max });
  }, [values.min, values.max]);

  const selectItems = getItems(props.attribute, { min, max });

  return (
    <Popover key={props.attribute} className='relative inline-block px-4 text-left'>
      <Popover.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
        <span>{props.label}</span>
        <ChevronDownIcon
          className='-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500'
          aria-hidden='true'
        />
      </Popover.Button>

      <Transition
        as={React.Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Popover.Panel className='absolute left-0 mt-2 w-96 origin-top-left rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <form
            className='flex items-center '
            onSubmit={(event) => {
              event.preventDefault();
              refine([from, to]);
            }}
          >
            <SelectBox
              items={selectItems}
              onChange={(e: any) => setRange({ from: e.value, to })}
              currentSelected={findSelecedByValue(from, selectItems)}
            />

            <span className='mx-2'> - </span>
            <SelectBox
              items={from ? selectItems?.filter((r) => r.value > from) : selectItems}
              onChange={(e: any) => setRange({ to: e.value, from })}
              currentSelected={findSelecedByValue(to, selectItems)}
            />

            <button
              className='ml-2 inline-flex items-center rounded border border-transparent bg-orange-100 px-3 py-2.5 text-xs font-medium text-orange-700 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              type='submit'
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

import { Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

interface SelectProps {
  items: any;
  onChange: (e: any) => void;
  currentSelected: any;
}

function SelectBox({ items, onChange = (e) => e as void, currentSelected }: SelectProps) {
  // const [selected, setSelected] = useState(items[0]);
  const selected = currentSelected || items[0];

  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <>
          <div className='mt-1 relative'>
            <Listbox.Button className='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-32'>
              <span className='block truncate'>{selected.name}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                {items.map((item: any) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-8 pr-4'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {item.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
