import { useClearRefinements, useCurrentRefinements } from 'react-instantsearch-hooks-web';

import capitalise from '@/utils/capitalise';

const getPrefix = (attribute: string) => {
  let name = capitalise(attribute);
  if (attribute === 'floorArea') name = 'Floor Area';

  return name;
};

const getFormattedNumberLabel = (label: string, attribute: string) => {
  const isPrice = attribute === 'price';
  const isSqm = attribute === 'floorArea';
  const num = label.split(' ');
  const formatted = parseInt(num[1] as string).toLocaleString();
  return `${num[0]?.replace('≥', 'over').replace('≤', 'under')} ${isPrice ? '$' : ''}${formatted}${isSqm ? 'sqm' : ''}`;
};

const transformItems = (items: any) => {
  const prefixedFilters = ['price', 'floorArea'];
  return items.map((item: any) => ({
    ...item,
    label: capitalise(item.label),
    refinements: item.refinements.map((r: any) => ({
      ...r,
      label: prefixedFilters.includes(r.attribute)
        ? `${getPrefix(r.attribute)} ${getFormattedNumberLabel(r.label, r.attribute)}`
        : capitalise(r.label),
    })),
  }));
};

const ActiveFilters = () => {
  const { items, refine } = useCurrentRefinements({ transformItems });
  const { refine: clearRefinements, canRefine } = useClearRefinements({
    includedAttributes: ['price', 'floorArea', 'address.suburb'],
  });

  console.log('active', { items });

  return (
    <div className='bg-gray-100 rounded-b-md'>
      <div className='mx-auto max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8'>
        <h3 className='whitespace-nowrap py-1 text-xs font-semibold uppercase tracking-wide text-gray-500'>
          APPLIED FILTERS
          <span className='sr-only'>, active</span>
        </h3>

        <div aria-hidden='true' className='hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block' />

        <div className='mt-2 sm:mt-0 sm:ml-4'>
          <div className='-m-1 flex flex-wrap items-center'>
            {items.map((item) => (
              <div key={item.label}>
                {item.refinements.map((itemRefinement) => {
                  return (
                    <span
                      key={item.attribute + itemRefinement.label}
                      className='m-1 inline-flex items-center rounded-full border border-gray-200 bg-white pl-3 pr-2 text-sm font-medium text-gray-900'
                    >
                      <span>{itemRefinement.label}</span>
                      <button
                        type='button'
                        className='ml-1 inline-flex h-4 w-4 shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500'
                        onClick={() => {
                          refine(itemRefinement);
                        }}
                      >
                        <span className='sr-only'>Remove filter for {item.label}</span>
                        <svg className='h-2 w-2' stroke='currentColor' fill='none' viewBox='0 0 8 8'>
                          <path strokeLinecap='round' strokeWidth='1.5' d='M1 1l6 6m0-6L1 7' />
                        </svg>
                      </button>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        {canRefine && (
          <button
            style={{ marginLeft: 'auto' }}
            className='whitespace-nowrap ml-2 inline-flex items-center rounded border border-transparent bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
            onClick={clearRefinements}
          >
            clear all
          </button>
        )}
      </div>
    </div>
  );
};

export default ActiveFilters;
